const Select = (props) => {
    return (
      <select
        defaultValue={props.selected}
        onChange={(e) => props.setValue(e.target.value)}
      >
        <option value="">------{props.placeholder}------</option>
        {props.options &&
          props.options.map((option, index) => {
            return (
              <option
                selected={option[props.label] == props.selected}
                key={index}
                value={option[props.value]}
              >
                {option[props.label]}
              </option>
            );
          })}
      </select>
    );
  };

  export default Select;