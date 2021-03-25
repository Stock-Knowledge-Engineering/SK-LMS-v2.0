import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';

import FieldAlert from './FieldAlert';

export default function NumberField(props){
    const [invalidInput, setInvalidInput] = useState(false);

    useEffect(()=>{
        if(props.value.match(/^[0-9]*/) != props.value)
            setInvalidInput(true);
        else
            setInvalidInput(false);

    },[props.value])

    return(
        <>
        <input
          type="text"
          className="lg:w-3/4 md:w-full mt-2 border-none bg-gray-100 rounded-xl"
          placeholder={props.placeholder}
          value={props.value} onChange={e => props.setValue(e.target.value)} 
          />
          { invalidInput && <FieldAlert message="Only numbers are accepted in this input." />}
        </>
    )
}