import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHttp } from "../hooks/http";
import { usePostHttp } from "../hooks/postHttp";

const Row = (props) => {
  const {classschedule} = props;

  return (
    <tr
      onClick={(e) => props.editData( classschedule)}
      className="cursor-pointer"
      key={classschedule.id}
    >
      <td className="border w-1/12 text-right">{classschedule.id}</td>
      <td className="border w-1/4 text-center">{classschedule.subject}</td>
      <td className="border w-1/4 text-center">{classschedule.start}</td>
      <td className="border w-1/6 text-center">{classschedule.end}</td>
      <td className="border w-1/6 text-center">{classschedule.day}</td>
      <td className="border w-1/6 text-center">{classschedule.room}</td>
      <td className="border text-center w-full">{classschedule.student_fullname}</td>
    </tr>
  );
};

export default function EnrolledStudentTable(props) {
  const router = useRouter();
  const user = useSelector((state) => state.UserReducer);

  const [fetchTeachers, setFetchTeachers] = useState(true);

  const [id, setId] = useState('');
  const [subject, setSubject] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [day, setDay] = useState('');
  const [room, setRoom] = useState('');
  const [student, setStudent] = useState('');

  const [classschedulesLoading, classschedules] = useHttp(
    fetchTeachers ? `/enrolled-students?schoolid=${user.data.school}&${user.data.title.toLowerCase() == 'teacher'? 'teacher_fullname=' + user.data.firstname +' '+ user.data.lastname:''}` : '',
    [fetchTeachers ? fetchTeachers : null]
  );

  useEffect(() => {
    if (fetchTeachers) setFetchTeachers(false);
  }, []);

  useEffect(() => {
    if(classschedulesLoading)
      setFetchTeachers(false)
  },[classschedulesLoading])

  useEffect(() => {
    if(!classschedulesLoading)
      setFetchTeachers(true)
  },[id, subject, start, end, day])

  useEffect(()=>{
    (!props.isAddModalOpen) ? setFetchTeachers(true) : setFetchTeachers(false);
  },[props.isAddModalOpen])

  useEffect(()=>{
    (!props.isEditModalOpen) ? setFetchTeachers(true) : setFetchTeachers(false);
  },[props.isEditModalOpen])

  useEffect(() => {
    if(user.isLogin && user.data.title.toLowerCase() != 'teacher'){
      router.push('/')
    }
  }, [user.isLogin]);


  return (
    <table className="mt-2 table-fixed">
      <thead>
        <tr>
          <th className="border">ID</th>
          <th className="border">Subject</th>
          <th className="border">Start</th>
          <th className="border">End</th>
          <th className="border">Day</th>
          <th className="border">Room</th>     
          <th className="border">Student Name</th>         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border text-right">
            <input value={id} onChange={e => setId(e.target.value)} className="h-6 w-full" type="text" />
          </td>
          <td className="border text-right">
            <input value={subject} onChange={e => setSubject(e.target.value)} className="h-6 w-full" type="text" />
          </td>
          <td className="border text-right">
            <input value={start} onChange={e => setStart(e.target.value)} className="h-6 w-full" type="text" />
          </td>
          <td className="border text-right">
            <input value={end} onChange={e => setEnd(e.target.value)} className="h-6 w-full" type="text" />
          </td>
          <td className="border text-right">
            <input value={day} onChange={e => setDay(e.target.value)} className="h-6 w-full" type="text" />
          </td>
          <td className="border text-right">
            <input value={room} onChange={e => setRoom(e.target.value)} className="h-6 w-full" type="text" />
          </td>
          <td className="border text-right">
            <input value={student} onChange={e => setStudent(e.target.value)} className="h-6 w-full" type="text" />
          </td>
        </tr>
        {classschedules &&
          classschedules.map((classschedule) => {
            return (
              <Row key={classschedule.id} classschedule={classschedule} editData={props.editData} />
            );
          })}
      </tbody>
    </table>
  );
}
