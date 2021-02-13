import { useEffect, useState } from "react";
import { usePostHttp } from "../hooks/postHttp";

export default function TeacherAddModal(props){
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [gender, setGender] = useState('');
    const [gradelevel, setGradeLevel] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [toSubmit, setToSubmit] = useState(false);
    const [disableSubmit, setDisableSubmit] = useState(true);

    const [isLoading, data] = usePostHttp(toSubmit ? {schoolid: props.schoolid, username: username, password: password, firstname: firstName, middlename: middleName, lastname: lastName, email: email, mobile: mobileNumber, gender: gender, gradelevel: gradelevel } : null, `/teacher/add`)

    useEffect(() => {
        if(data)
            props.showAddModal(false);
    },[data])

    useEffect(()=>{
        if(username && password && email && firstName && middleName && lastName && mobileNumber && gender && gradelevel)
          setDisableSubmit(false);
        else
        setDisableSubmit(true);
      },[username, password, email, firstName, middleName, lastName, mobileNumber, gender, gradelevel])
    

    return (
             <div className="p-12 absolute w-full m-auto h-full">
                <div className="border">
                    <div className="bg-green-400 p-4 text-white text-xl font-bold uppercase flex justify-between">
                        <h1>Add new teacher</h1>
                        <button className="relative border rounded-full w-8 h-8 right-1" onClick={(e => props.showAddModal(false))}>
                            <p className="absolute left-2 bottom-1">&#215;</p>
                        </button>
                    </div>
                    <div className="bg-white p-4 flex flex-wrap justify-around content-evenly">
                        <input className="m-2" value={firstName} onChange={e => {setFirstName(e.target.value)}} type="text" placeholder="First Name" />
                        <input className="m-2" value={middleName} onChange={e => {setMiddleName(e.target.value)}} type="text" placeholder="Middle Name"/>
                        <input className="m-2" value={lastName} onChange={e => {setLastName(e.target.value)}}type="text" placeholder="Last Name" />
                        <input className="m-2" value={mobileNumber} onChange={e => {setMobileNumber(e.target.value)}}type="text" placeholder="Mobile Number" />                        
                        <input className="m-2" value={gender} onChange={e => {setGender(e.target.value)}}type="text" placeholder="Gender" />
                        <input className="m-2" value={gradelevel} onChange={e => {setGradeLevel(e.target.value)}}type="text" placeholder="Grade Level" />
                        <input className="m-2" value={username} onChange={e => {setUsername(e.target.value)}}type="text" placeholder="Username" />
                        <input className="m-2" value={password} onChange={e => {setPassword(e.target.value)}}type="password" placeholder="Password" />
                        <input className="m-2" value={email} onChange={e => {setEmail(e.target.value)}}type="text" placeholder="Email" />
                    </div>
                    <div className="w-full p-4 flex justify-end relative">
                        <button disabled={disableSubmit} onClick={e => setToSubmit(true)} className="border p-2 text-white bg-green-400 text-center text-xl">Submit</button>
                    </div>
                </div>
            </div>
    )
}