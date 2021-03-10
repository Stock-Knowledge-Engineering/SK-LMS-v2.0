import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';

import FieldAlert from './FieldAlert';

export default function TextField(props){
    const [invalidInput, setInvalidInput] = useState(false);

    useEffect(()=>{
        if(props.value.match(/^[A-Za-z ]*/)[0] != props.value){
            setInvalidInput(true);
        }
        else
            setInvalidInput(false);

    },[props.value])

    return(
        <>
        <input
          type="text"
          className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder={props.placeholder}
          value={props.value} onChange={e => props.setValue(e.target.value)} 
          />
          { invalidInput && <FieldAlert message="Only alphabet are accepted in this input." />}     
        </>
    )
}