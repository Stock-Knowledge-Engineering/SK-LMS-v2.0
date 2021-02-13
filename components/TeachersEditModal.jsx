import { useEffect, useState } from "react";
import { usePostHttp } from "../hooks/postHttp";
import {useHttp} from '../hooks/http';

export default function TeacherEditModal(props){
    const [firstName, setFirstName] = useState(props.teacher.firstname);
    const [middleName, setMiddleName] = useState(props.teacher.middlename);
    const [lastName, setLastName] = useState(props.teacher.lastname);
    const [mobileNumber, setMobileNumber] = useState(props.teacher.mobile);
    const [gender, setGender] = useState(props.teacher.gender);
    const [gradeLevel, setGradeLevel] = useState(props.teacher.id);
    const [username, setUsername] = useState(props.teacher.username);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState(props.teacher.email);
    const [toSubmit, setToSubmit] = useState(false);

    const [isLoading, data] = usePostHttp(toSubmit ? {id: props.teacher.user_id, password: password, firstname: firstName, middlename: middleName, lastname: lastName, email: email, mobile: mobileNumber, gender: gender } : null, `/teacher/edit`)
    
    const [gendersLoading, genders] = useHttp(
        `http://localhost:3001/genders`,
        []
      );

    useEffect(() => {
        if(data)
            props.showEditModal(false);
    },[data])

    return (
             <div className="p-12 absolute w-full m-auto h-full">
                <div className="border">
                    <div className="bg-green-400 p-4 text-white text-xl font-bold uppercase flex justify-between">
                        <h1>Add edit teacher</h1>
                        <button className="relative border rounded-full w-8 h-8 right-1" onClick={(e => props.showEditModal(false))}>
                            <p className="absolute left-2 bottom-1">&#215;</p>
                        </button>
                    </div>
                    <div className="bg-white p-4 flex flex-wrap justify-around content-evenly">
                        <input className="m-2" value={firstName} onChange={e => {setFirstName(e.target.value)}} type="text" placeholder="First Name" />
                        <input className="m-2" value={middleName} onChange={e => {setMiddleName(e.target.value)}} type="text" placeholder="Middle Name"/>
                        <input className="m-2" value={lastName} onChange={e => {setLastName(e.target.value)}}type="text" placeholder="Last Name" />
                        <input className="m-2" value={mobileNumber} onChange={e => {setMobileNumber(e.target.value)}}type="text" placeholder="Mobile Number" />                        
                        <select onChange={e => setGender(e.target.value)}>
                            <option value="1">Male</option>
                            <option value="2" selected={props.teacher.genderid == 2}>Female</option>
                            {/* {
                                genders && genders.map(e => {
                                    return <option key={e.id} seletected = {gender == e.name ? 'selected' : ''} value={e.name}>{e.name}</option>
                                })
                            } */}
                        </select>
                        {/* <input className="m-2" value={gender} onChange={e => {setGender(e.target.value)}}type="text" placeholder="Gender" /> */}
                        <input className="m-2" value={gradeLevel} onChange={e => {setGradeLevel(e.target.value)}}type="text" placeholder="Grade Level" />
                        <input className="m-2" value={username} onChange={e => {setUsername(e.target.value)}}type="text" placeholder="Username" />
                        <input className="m-2" value={password} onChange={e => {setPassword(e.target.value)}}type="password" placeholder="Password" />
                        <input className="m-2" value={email} onChange={e => {setEmail(e.target.value)}}type="text" placeholder="Email" />

                    </div>
                    <div className="w-full p-4 flex justify-end relative">
                        <button onClick={e => setToSubmit(true)} className="border p-2 text-white bg-green-400 text-center text-xl">Submit</button>
                    </div>
                </div>
            </div>
    )
}