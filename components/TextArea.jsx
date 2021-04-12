const TextArea = ({ classNames, value, setValue, placeholder }) => {
  return (
    <textarea
      type="text"
      className={classNames}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default TextArea;
