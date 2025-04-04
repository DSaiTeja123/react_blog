import React, { useId } from 'react';

const Select = React.forwardRef(function Select(
  { options = [], label, className = '', ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full mb-4">
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-semibold text-gray-700"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        ref={ref}
        className={`
          px-4 py-2 rounded-lg bg-white text-gray-700 
          border border-gray-300 focus:ring-2 focus:ring-blue-500 
          focus:border-blue-500 transition duration-200 ease-in-out w-full 
          ${className}
        `}
        {...props}
      >
        {options.map((option, index) =>
          typeof option === 'object' ? (
            <option key={option.value || index} value={option.value}>
              {option.label}
            </option>
          ) : (
            <option key={option} value={option}>
              {option}
            </option>
          )
        )}
      </select>
    </div>
  );
});

export default Select;
