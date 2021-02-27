import {useEffect, useState} from 'react';

export default function PasswordInput(props){
    const [showPassword, setShowPassword] = useState(false);
    const [validPassword, SetValidPassword] = useState(false);
    const [containCapital, setContainCapital] = useState(false);
    const [containLowerCase, setContainLowerCase] = useState(false);
    const [containNumber, setContainNumber] =useState(false);
    const [containSpecialCharacter, setContainSpecialCharacter] = useState(false);
    const [containValidLenght, setContainValidLenght] = useState(false);
    

    useEffect(()=>{
        if(!/([A-ZÑ])+/.test(props.value))
            setContainCapital(true);
        else
            setContainCapital(false);

        if(/([a-zñ])+/.test(props.value))
            setContainLowerCase(true);
        else
            setContainLowerCase(false);
        
        if(/\d/.test(props.value))
            setContainNumber(true);
        else
            setContainNumber(false);   
            
        if(/\W/.test(props.value))
            setContainSpecialCharacter(true);
        else
            setContainSpecialCharacter(false);
        
        if(/(\W|\d|\w){8,}/.test(props.value))
            setContainValidLenght(true);
        else    
            setContainValidLenght(false);
        
        if(containCapital && containLowerCase && containNumber && containSpecialCharacter && containValidLenght)
            SetValidPassword(true)
        else
            SetValidPassword(false)
    },[props.value])

    return (
        <>
          <div className="w-full flex">
            <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="block w-80 rounded-l-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Password"
                value={props.value}
                onChange={e => { props.setValue(e.target.value) }}
            />
            <button onClick={ e => setShowPassword(!showPassword)} type="button" className="focus:outline-none text-gray-600 text-sm rounded-r-lg border border-gray-600 hover:bg-gray-50 flex items-center">
                {
                    showPassword ?             
                        <svg className="w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>:
                        <svg className="w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg> 
                }
          </button>
        </div> 
        <br />
        <div
          className={`w-3/4 px-4 py-3 rounded relative ${validPassword ? 'bg-green-100 border border-green-400 text-green-700 ' : 'bg-red-100 border border-red-400 text-red-700 '}`}
          role="alert"
        >
          <strong className="font-bold">Password Strenght: {validPassword ? 'Strong' : 'Weak'}</strong>
          { !validPassword && <ul className="list-disc text-sm p-2">
            {
              !/([A-ZÑ])+/.test(props.value) && <li>Password must contain atleast 1 upper case letters (A - Z)</li>
            }
            {
              !/([a-zñ])+/.test(props.value) && <li>Password must contain atleast 1 lower case letters (a - z)</li>
            }
                        {
              !/\d/.test(props.value) && <li>Password must contain atleast 1 number (0 - 9)</li>
            }
            {!/\W/.test(props.value) && <li>Password must contain atleast 1 non-alphanumeric symbol (e.g. '@$%@(|'))</li>}
            {!/(\W|\d|\w){8,}/.test(props.value)&& <li>Password must be 8 characters long</li>}
          </ul>}
          </div>
        </>
    )
}