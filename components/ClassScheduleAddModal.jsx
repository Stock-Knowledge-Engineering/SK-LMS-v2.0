import { useEffect, useState } from "react";
import { useHttp } from "../hooks/http";
import { usePostHttp } from "../hooks/postHttp";

export default function ClassScheduleAddModal(props){
    const [subject, setSubject] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [day, setDay] = useState('');
    const [room, setRoom] = useState('');
    const [teacher, setTeacher] = useState('');
    const [section, setSection] = useState('');
    const [gradelevel, setGradeLevel] = useState('');
    const [toSubmit, setToSubmit] = useState(false);
    const [disableSubmit, setDisableSubmit] = useState(false);

    const [isLoading, data] = usePostHttp(toSubmit ? {schoolid: props.schoolid, day: day, room: room, teacher: teacher, subject: subject, start: start, end: end, section: section, gradelevel: gradelevel } : null, `/class-schedule/add`)
    const [daysLoading, days] = useHttp(
        `http://localhost:3001/days`,
        []
      );
      const [roomsLoading, rooms] = useHttp(
        `http://localhost:3001/rooms?school=${props.schoolid}`,
        []
      );
      const [sectionsLoading, sections] = useHttp(
        `http://localhost:3001/sections?school=${props.schoolid}`,
        []
      );
      const [teachersLoading, teachers] = useHttp(
        `http://localhost:3001/teachers?schoolid=${props.schoolid}`,
        []
      );
      const [gradelevelsLoading, gradelevels] = useHttp(
        `http://localhost:3001/grade-levels?school=${props.schoolid}`,
        []
      );
      const [subjectsLoading, subjects] = useHttp(
        `http://localhost:3001/subjects?school=${props.schoolid}`,
        []
      );
      const [hoursLoading, hours] = useHttp(
        `http://localhost:3001/school-hours`,
        []
      );

    useEffect(() => {
        if(data)
            props.showAddModal(false);
    },[data])

    // useEffect(()=>{
    //     if(day && room && teacher && firstName && middleName && lastName && subject && start && end)
    //       setDisableSubmit(false);
    //     else
    //     setDisableSubmit(true);
    //   },[day, room, teacher, firstName, middleName, lastName, subject, start, end])
    
    return (
             <div className="p-12 absolute w-full m-auto h-full">
                <div className="border">
                    <div className="bg-green-400 p-4 text-white text-xl font-bold uppercase flex justify-between">
                        <h1>Add new class schedule</h1>
                        <button className="relative border rounded-full w-8 h-8 right-1" onClick={(e => props.showAddModal(false))}>
                            <p className="absolute left-2 bottom-1">&#215;</p>
                        </button>
                    </div>
                    <div className="bg-white p-4 flex flex-wrap justify-around content-evenly">
                        <select onChange={e => setSubject(e.target.value)}>
                            <option></option>
                        {subjects && subjects.map(e => {
                                return <option key = {e.id} value={e.id}>{e.title}</option>
                            })}
                        </select>
                        <select className="m-2" onChange={e => setDay(e.target.value)}>
                            <option></option>
                            {days && days.map(e => {
                                return <option key = {e.id} value={e.id}>{e.day}</option>
                            })}
                        </select>
                        <select className="m-2" onChange={e => setStart(e.target.value)}>
                            <option></option>
                            {hours && hours.map(e => {
                                return <option key = {e.id} value={e.id}>{e.time}</option>
                            })}
                        </select>
                        <select className="m-2" onChange={e => setEnd(e.target.value)}>
                            <option></option>
                            {hours && hours.map(e => {
                                return <option key = {e.id} value={e.id}>{e.time}</option>
                            })}
                        </select>
                        <select className="m-2" onChange={e => setRoom(e.target.value)}>
                            <option></option>    
                            {rooms && rooms.map(e => {
                                return <option key = {e.id} value={e.id}>{e.name}</option>
                            })}
                        </select>
                        <select className="m-2" onChange={e => setTeacher(e.target.value)}>
                        <option></option>
                            {teachers && teachers.map(e => {
                                return <option key = {e.id} value={e.id}>{e.firstname} {e.lastname}</option>
                            })}
                        </select>
                        <select className="m-2" onChange={e => setSection(e.target.value)}>
                        <option></option>
                            {sections && sections.map(e => {
                                return <option key = {e.id} value={e.id}>{e.name}</option>
                            })}
                        </select>
                        <select className="m-2" onChange={e => setGradeLevel(e.target.value)}>
                        <option></option>
                            {gradelevels && gradelevels.map(e => {
                                return <option key = {e.id} value={e.id}>{e.name}</option>
                            })}
                        </select>
                    </div>
                    <div className="w-full p-4 flex justify-end relative">
                        <button onClick={e => setToSubmit(true)} className="border p-2 text-white bg-green-400 text-center text-xl">Submit</button>
                    </div>
                </div>
            </div>
    )
}