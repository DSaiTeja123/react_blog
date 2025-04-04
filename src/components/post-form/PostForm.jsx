import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    try {
      let file;
      if (post) {
        if (data.image && data.image.length > 0) {
          file = await appwriteService.uploadFile(data.image[0]);
          if (file) {
            await appwriteService.deleteFile(post.featuredImage);
          }
        }
        const dbPost = await appwriteService.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : post.featuredImage,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      } else {
        file = await appwriteService.uploadFile(data.image[0]);
        if (file) {
          data.featuredImage = file.$id;
          const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });
          if (dbPost) {
            navigate(`/post/${dbPost.$id}`);
          }
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "_")
        .replace(/\s+/g, "_");
    }
    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-wrap p-6 bg-white shadow-xl rounded-2xl border border-gray-200"
    >
      {/* Left Section - Text Inputs */}
      <div className="w-full md:w-2/3 px-2">
        <Input
          label="Title"
          placeholder="Enter Title"
          className="mb-5"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug"
          placeholder="Auto-generated from title"
          className="mb-5"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
          }}
        />
        <RTE
          label="Content"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>

      {/* Right Section - Image + Status + Submit */}
      <div className="w-full md:w-1/3 px-2">
        <Input
          label="Featured Image"
          type="file"
          className="mb-5 border border-gray-300 rounded-lg p-2 bg-gray-50 file:cursor-pointer"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-5">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg shadow-md border border-gray-200"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-5"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-600" : "bg-blue-600"}
          className="w-full py-3 text-white font-semibold rounded-md hover:opacity-90 transition-all duration-300 shadow-sm"
        >
          {post ? "Update Post" : "Publish Post"}
        </Button>
      </div>
    </form>

  );
}