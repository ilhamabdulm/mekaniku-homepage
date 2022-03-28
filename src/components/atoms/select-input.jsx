const SelectInput = (props) => {
  const { label, name, placeholder, options = [] } = props;

  return (
    <label>
      <p className="font-semibold mb-2">{label}</p>
      <select
        name={name}
        placeholder={placeholder}
        className="form-select w-full rounded-lg"
      >
        {options?.map((opt, i) => (
          <option value={opt.value} key={i + 'opt'}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectInput;
