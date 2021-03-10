import { useEffect, useState } from "react";
import { useHttp } from "../hooks/http";
import { usePostHttp } from "../hooks/postHttp";

const Select = (props) => {
    return (
        <select defaultValue={props.selected} onChange={e => props.setValue(e.target.value)}>
            <option value=""></option>
            {props.options && props.options.map(option => {
                return (
                    <option selected={option[props.label]==props.selected} key={option.id} value={option.id}>{option[props.label]}</option>
                )
            })}
        </select>
    );
}

export default function ClassScheduleEditModal(props){
    const [subjectDataLoading, subjectData] = useHttp(
        props.classSchedule.subject ? `/subjects?title=${props.classSchedule.subject}` : '',
        []
      );

    const [dayDataLoading, dayData] = useHttp(
        props.classSchedule.day ? `/days?day=${props.classSchedule.day}` : '',
        []
      );

    const [startDataLoading, startData] = useHttp(
        props.classSchedule.start ? `/school-hours?time=${props.classSchedule.start}` : '',
        []
      );

    const [endDataLoading, endData] = useHttp(
        props.classSchedule.end ? `/school-hours?time=${props.classSchedule.end}` : '',
        []
      );
      
    const [roomDataLoading, roomData] = useHttp(
        props.classSchedule.room ? `/rooms?school=${props.schoolid}&name=${props.classSchedule.room}` : '',
        []
      );
      
    const [teacherDataLoading, teacherData] = useHttp(
        props.classSchedule.room ? `/teachers?school=${props.schoolid}&firstname=${props.classSchedule.firstname}&middlename=${props.classSchedule.middlename}&lastname=${props.classSchedule.lastname}` : '',
        []
      );        

    const [sectionDataLoading, sectionData] = useHttp(
        props.classSchedule.room ? `/sections?school=${props.schoolid}&name=${props.classSchedule.section}` : '',
        []
      );
      
    const [gradeLevelLoading, gradeLevelData] = useHttp(
        props.classSchedule.room ? `/grade-levels?school=${props.schoolid}&name=${props.classSchedule.gradelevel}` : '',
        []
      );      

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

    const [isLoading, data] = usePostHttp(toSubmit ? {schoolid: props.schoolid, day: day, room: room, teacher: teacher, mobile: subject, start: start, end: end, section: section, gradelevel: gradelevel } : null, `/class-schedule/edit`)
    const [daysLoading, days] = useHttp(
        `/days`,
        []
      );
      const [roomsLoading, rooms] = useHttp(
        `/rooms?school=${props.schoolid}`,
        []
      );
      const [sectionsLoading, sections] = useHttp(
        `/sections?school=${props.schoolid}`,
        []
      );
      const [teachersLoading, teachers] = useHttp(
        `/teachers?school=${props.schoolid}`,
        []
      );
      const [gradelevelsLoading, gradelevels] = useHttp(
        `/grade-levels?school=${props.schoolid}`,
        []
      );
      const [subjectsLoading, subjects] = useHttp(
        `/subjects?school=${props.schoolid}`,
        []
      );
      const [hoursLoading, hours] = useHttp(
        `/school-hours`,
        []
      );

    useEffect(() => {
        if(data)
            props.showEditModal(false);
    },[data])

    // useEffect(()=>{
    //     if(day && room && teacher && firstName && middleName && lastName && subject && start && end)
    //       setDisableSubmit(false);
    //     else
    //     setDisableSubmit(true);
    //   },[day, room, teacher, firstName, middleName, lastName, subject, start, end])

    useEffect(() => {
        if(subjectData)
            setSubject(subjectData[0].id)
    },[subjectData])

    useEffect(() => {
        if(dayData)
            setDay(dayData[0].id)
    },[dayData])

    useEffect(() => {
        if(startData)
            setStart(startData[0].id)
    },[startData])

    useEffect(() => {
        if(endData)
            setEnd(endData[0].id)
    },[endData])

    useEffect(() => {
        if(roomData)
            setRoom(roomData[0].id)
    },[roomData])

    useEffect(() => {
        if(teacherData)
            setTeacher(teacherData[0].id)
    },[teacherData])

    useEffect(() => {
        if(sectionData)
            setSection(sectionData[0].id)
    },[sectionData])

    useEffect(() => {
        if(gradeLevelData)
            setGradeLevel(gradeLevelData[0].id)
    },[gradeLevelData])

    return (
             <div className="p-12 absolute w-full m-auto h-full">
                <div className="border">
                    <div className="bg-green-400 p-4 text-white text-xl font-bold uppercase flex justify-between">
                        <h1>Add new class schedule</h1>
                        <button className="relative border rounded-full w-8 h-8 right-1" onClick={(e => props.showEditModal(false))}>
                            <p className="absolute left-2 bottom-1">&#215;</p>
                        </button>
                    </div>
                    <div className="bg-white p-4 flex flex-wrap justify-around content-evenly">
                        <Select setValue={setSubject} options={subjects} selected={props.classSchedule.subject} label={'title'}/>   
                        <Select setValue={setDay} options={days} selected={props.classSchedule.day} label={'day'}/>   
                        <Select setValue={setStart} options={hours} selected={props.classSchedule.start} label={'time'}/>   
                        <Select setValue={setEnd} options={hours} selected={props.classSchedule.end} label={'time'}/>
                        <Select setValue={setRoom} options={rooms} selected={props.classSchedule.room} label={'name'}/>
                        <Select setValue={setTeacher} options={teachers} selected={`${props.classSchedule.firstname} ${props.classSchedule.lastname}`} label={'fullname'}/>
                        <Select setValue={setSection} options={sections} selected={`${props.classSchedule.section}`} label={'name'}/>
                        <Select setValue={setGradeLevel} options={gradelevels} selected={`${props.classSchedule.gradelevel}`} label={'name'}/>
                    </div>
                    <div className="w-full p-4 flex justify-end relative">
                        <button onClick={e => setToSubmit(true)} className="border p-2 text-white bg-green-400 text-center text-xl">Submit</button>
                    </div>
                </div>
            </div>
    )
}