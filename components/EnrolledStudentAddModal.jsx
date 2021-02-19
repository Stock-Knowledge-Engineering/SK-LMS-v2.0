import { useEffect, useState } from "react";
import { useHttp } from "../hooks/http";
import { usePostHttp } from "../hooks/postHttp";

const Select = (props) => {
    return (
        <select defaultValue={props.selected} onChange={e => props.setValue(e.target.value)}>
            <option value=""></option>
            {props.options && props.options.map((option, index) => {
                return (
                    <option selected={option[props.label]==props.selected} key={index} value={option[props.value]}>{option[props.label]}</option>
                )
            })}
        </select>
    );
}

export default function EnrolledStudentAddModal(props){
    const [subject, setSubject] = useState('');
    const [student, setStudent] = useState('');
    const [section, setSection] = useState('');
    const [gradelevel, setGradeLevel] = useState('');
    const [toSubmit, setToSubmit] = useState(false);
    const [disableSubmit, setDisableSubmit] = useState(false);
    
    const [subjectsLoading, subjects] = useHttp(
        `http://localhost:3001/teacher/subjects?teacherid=${props.teacherid}`,
        []
      );

    const [gradelevelsLoading, gradelevels] = useHttp(
      `http://localhost:3001/teacher/gradelevels?teacherid=${props.teacherid}&subject=${subject}`,
        [subject]
      );      

      const [sectionsLoading, sections] = useHttp(
        `http://localhost:3001/teacher/sections?schoolid=${props.schoolid}&teacherid=${props.teacherid}&subject=${subject}&gradelevel=${gradelevel}`,
        [subject, gradelevel]
      );

      const [studentsLoading, students] = useHttp(
        `http://localhost:3001/students?schoolid=${props.schoolid}`,
        []
      );

      const [classSchedulesLoading, classSchedules] = useHttp(
        `http://localhost:3001/class-schedules?schoolid=${props.schoolid}&teacherid=${props.teacherid}&gradelevel=${gradelevel}&section=${section}&subject=${subject}`,
        [section, subject]
      );

      const [isLoading, data] = usePostHttp(toSubmit ? {classSchedules: classSchedules, student: student } : null, `/student-schedule/add`)


    useEffect(() => {
        if(data)
            props.showAddModal(false);
    },[data])

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
                        <Select setValue={setSubject} options={subjects} selected={subject} value="subject" label={'subject'}/>   
                        <Select setValue={setGradeLevel} options={gradelevels} selected={gradelevel} value="gradelevel" label={'gradelevel'}/>   
                        <Select setValue={setSection} options={sections} selected={section} value="section" label={'section'}/>   
                        <Select setValue={setStudent} options={students} selected={student} value="id" label={'fullname'}/>
                    </div>
                    <div className="w-full p-4 flex justify-end relative bg-white">
                        <button onClick={e => setToSubmit(true)} className="border p-2 text-white bg-green-400 text-center text-xl">Submit</button>
                    </div>
                </div>
            </div>
    )
}