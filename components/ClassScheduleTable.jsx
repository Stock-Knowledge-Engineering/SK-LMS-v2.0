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
      <td className="border w-1/6 text-center">{classschedule.firstname}</td>
      <td className="border w-1/6 text-center">{classschedule.middlename}</td>
      <td className="border w-1/6 text-center">{classschedule.lastname}</td>
    </tr>
  );
};

export default function ClassScheduleTable(props) {
  const user = useSelector((state) => state.UserReducer);

  const [fetchTeachers, setFetchTeachers] = useState(true);

  const [id, setId] = useState('');
  const [subject, setSubject] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [day, setDay] = useState('');
  const [room, setRoom] = useState('');
  const [firstname, setFirstName] = useState('');
  const [middlename, setMiddleName] = useState('');
  const [lastname, setLastName] = useState('');

  const [classschedulesLoading, classschedules] = useHttp(
    fetchTeachers ? `/class-schedules?schoolid=${user.data.school}${user.data.title.toLowerCase() == 'teacher' ? `&teacherid=${user.data.id}`:''}${id ? '&id='+id: ''}${subject ? '&subject='+subject: ''}${start ? '&start='+start: ''}` : '',
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
          <th className="border">First Name</th>
          <th className="border">Middle Name</th>
          <th className="border">Last Name</th>            
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
            <input value={firstname} onChange={e => setFirstName(e.target.value)} className="h-6 w-full" type="text" />
          </td>
          <td className="border text-right">
            <input value={middlename} onChange={e => setMiddleName(e.target.value)} className="h-6 w-full" type="text" />
          </td>
          <td className="border text-right">
            <input value={lastname} onChange={e => setLastName(e.target.value)} className="h-6 w-full" type="text" />
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
