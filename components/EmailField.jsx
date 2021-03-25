import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import { useHttp } from '../hooks/http';

import FieldAlert from './FieldAlert';

export default function EmailField(props){
    const [invalidInput, setInvalidInput] = useState(false);
    const [verifyingEmail, validEmail] = useHttp(props.value ? `/register/verify/email?value=${props.value}` : '', [props.value]);
    
    useEffect(()=> {
      props.setEmailExist(validEmail)
    },[validEmail])

    return(
        <>
        <input
          className="lg:w-3/4 md:w-full mt-2 mb-2 border-none rounded-xl bg-gray-100"
          type="text"
          placeholder={props.placeholder}
          value={props.value} 
          onChange={e => props.setValue(e.target.value)} 
        />
          {/* { validEmail && <FieldAlert message="Email already exist!" />} */}
        </>
    )
}