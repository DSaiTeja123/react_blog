import React, { useId } from 'react';

const Input = React.forwardRef(function Input({
  label,
  type = "text",
  className = "",
  id: customId,
  ...props
}, ref) {
  const autoId = useId();
  const id = customId || autoId;

  return (
    <div className="w-full mb-4">
      {label && (
        <label 
          className="inline-block mb-2 text-sm font-semibold text-gray-700" 
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        ref={ref}
        aria-label={label || 'input'}
        className={`
          px-4 py-3 rounded-lg bg-white text-gray-700 outline-none 
          focus:ring-2 focus:ring-blue-400 focus:bg-gray-50 
          transition-all duration-300 border border-gray-300 shadow-sm 
          hover:border-gray-400 hover:bg-gray-100 w-full
          ${className}
        `}
        {...props}
      />
    </div>
  );
});

export default Input;
