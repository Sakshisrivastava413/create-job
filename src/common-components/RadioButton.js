const RadioButton = ({ field, fieldKey, setValue }) => {
  return (
    <div className="mb-6 w-full" key={fieldKey}>
      <label className="block text-sm font-medium text-dark" aria-required>
        {field.name}
        {field.isRequired && <span className="text-alert-red">*</span>}
      </label>
      <div className="mt-2 flex space-x-[16px]">
        {field.options.map((option) => (
          <div className="flex items-center space-x-[4px]" key={option}>
            <input
              id={fieldKey}
              name="notification-method"
              type="radio"
              value={option}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
              onChange={setValue}
            />
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
      {field.error && (
        <p className="text-alert-red text-[12px]">This field is required</p>
      )}
    </div>
  );
};

export default RadioButton;
