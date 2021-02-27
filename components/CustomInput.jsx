import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';

import FieldAlert from './FieldAlert';

export default function CustomInput(props){
    const [invalidInput, setInvalidInput] = useState(false);

    useEffect(()=>{
        if(props.type == 'alphabet' && props.value.match(/^[A-Za-z]*/) != props.value)
            setInvalidInput(true);
        else
            setInvalidInput(false);
            
        if(props.type == 'number' && props.value.match(/^[0-9]*/) != props.value)
            setInvalidInput(true);
        else
            setInvalidInput(false);

    },[props.value])

    return(
        <>
        <input
          type="text"
          pattern={props.type == 'number' ? `[0-9]*` : `[a-zA-Z]`}
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder={props.placeholder}
          value={props.value} onChange={e => props.setValue(e.target.value)} 
          />
          { invalidInput && props.type == "number" && <FieldAlert message="Only numbers are accepted in this input." />}
          { invalidInput && props.type == "alphabet" && <FieldAlert message="Only alphabet are accepted in this input." />}     
        </>
    )
}