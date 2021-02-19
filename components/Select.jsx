export default function Select (props) {
    return (
        <select defaultValue={props.selected}>
            <option value=""></option>
            {props.options && props.options.map(option => {
                return (
                    <option selected={option[props.label]==props.selected} key={option.id} value={option.id}>{option[props.label]}</option>
                )
            })}
        </select>
    );
}