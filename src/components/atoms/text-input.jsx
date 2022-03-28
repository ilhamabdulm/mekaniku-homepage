const TextInput = (props) => {
  const { label, name, placeholder, textarea } = props;

  return textarea ? (
    <label>
      <p className="font-semibold mb-2">{label}</p>
      <textarea
        name={name}
        placeholder={placeholder}
        className="form-textarea rounded-lg w-full"
      />
    </label>
  ) : (
    <label>
      <p className="font-semibold mb-2">{label}</p>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="form-input rounded-lg w-full"
      />
    </label>
  );
};

export default TextInput;
