import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHttp } from "../hooks/http";
import { usePostHttp } from "../hooks/postHttp";

const Row = (props) => {
  const {teacher} = props;

  return (
    <tr
      onClick={(e) => props.editData( teacher)}
      className="cursor-pointer"
      key={teacher.id}
    >
      <td className="border w-1/12 text-right">{teacher.id}</td>
      <td className="border w-1/4 text-center">{teacher.name}</td>
      <td className="border w-1/4 text-center">{teacher.gradelevel}</td>
      <td className="border w-1/6 text-center">{teacher.room}</td>
    </tr>
  );
};

export default function SectionTable(props) {
  const user = useSelector((state) => state.UserReducer);

  const [fetchTeachers, setFetchTeachers] = useState(true);

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [gradelevel, setGradeLevel] = useState('');
  const [room, setRoom] = useState('');

  const [teacherLoading, teachers] = useHttp(
    fetchTeachers ? `/sections?school=${user.data.school}` : '',
    [fetchTeachers ? fetchTeachers : null]
  );

  useEffect(() => {
    if (fetchTeachers) setFetchTeachers(false);
  }, []);

  useEffect(() => {
    if(teacherLoading)
      setFetchTeachers(false)
  },[teacherLoading])

  useEffect(() => {
    if(!teacherLoading)
      setFetchTeachers(true)
  },[id, name, gradelevel, room, gradelevel])

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
          <th className="border">Name</th>
          <th className="border">Grade Level</th>
          <th className="border">Room</th>    
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border text-right">
            <input value={id} onChange={e => setId(e.target.value)} className="h-6 w-full" type="text" />
          </td>
          <td className="border text-right">
            <input value={name} onChange={e => setName(e.target.value)} className="h-6 w-full" type="text" />
          </td>
          <td className="border text-right">
            <input value={gradelevel} onChange={e => setGradeLevel(e.target.value)} className="h-6 w-full" type="text" />
          </td>
          <td className="border text-right">
            <input value={room} onChange={e => setRoom(e.target.value)} className="h-6 w-full" type="text" />
          </td>
        </tr>
        {teachers &&
          teachers.map((teacher) => {
            return (
              <Row key={teacher.id} teacher={teacher} editData={props.editData} />
            );
          })}
      </tbody>
    </table>
  );
}
