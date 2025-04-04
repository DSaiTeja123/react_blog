import React from 'react';
import conf from '../conf/conf';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({ name = 'content', control, label, defaultValue = '' }) {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {label && (
        <label className="block mb-2 text-lg font-semibold text-gray-700">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange } }) => (
          <Editor
            tinymceScriptSrc="/tinymce/tinymce.min.js"
            initialValue={defaultValue}
            onEditorChange={onChange}
            init={{
              branding: false,
              height: 500,
              menubar: true,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                'preview', 'anchor', 'searchreplace', 'visualblocks',
                'code', 'fullscreen', 'insertdatetime', 'media', 'table',
                'help', 'wordcount',
              ],
              toolbar:
                'undo redo | blocks | image | bold italic forecolor | ' +
                'alignleft aligncenter alignright alignjustify | ' +
                'bullist numlist outdent indent | removeformat | help',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              apiKey: conf.API_KEY,
              readonly: false,
            }}
          />
        )}
      />
    </div>
  );
}
