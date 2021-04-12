import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';

import FieldAlert from './FieldAlert';

export default function NumberField({value, setValue, placeholder, classNames}){
    const [invalidInput, setInvalidInput] = useState(false);

    useEffect(()=>{
        if(value.match(/^[0-9]*/) != value)
            setInvalidInput(true);
        else
            setInvalidInput(false);

    },[value])

    return(
        <>
        <input
          type="text"
          className={classNames}
          placeholder={placeholder}
          value={value} onChange={e => setValue(e.target.value)} 
          />
          { invalidInput && <FieldAlert classNames="w-full mt-2 border border-red-400 text-red-700 px-4 py-3 rounded relative" message="Only numbers are accepted in this input." />}
        </>
    )
}