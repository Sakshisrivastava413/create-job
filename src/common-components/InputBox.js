const InputBox = ({ fieldKey, field, setValue }) => {
  return (
    <div className="mb-6 w-full" key={fieldKey}>
      <label className="block text-sm font-medium text-dark" aria-required>
        {field.name}
        {field.isRequired && <span className="text-alert-red">*</span>}
      </label>
      <div className="mt-2">
        <input
          id={fieldKey}
          required
          value={field.value}
          onChange={setValue}
          placeholder={field.placeholder}
          className="block w-full rounded-[5px] border py-2 px-3 text-grey-2 text-sm border-[#E6E6E6]"
        />
      </div>
      {field.error && (
        <p className="text-alert-red text-[12px]">This field is required</p>
      )}
    </div>
  );
};

export default InputBox;
