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
      <td className="border w-1/4 text-center">{teacher.firstname}</td>
      <td className="border w-1/4 text-center">{teacher.middlename}</td>
      <td className="border w-1/6 text-center">{teacher.lastname}</td>
      <td className="border w-1/6 text-center">{teacher.gradelevelname}</td>
    </tr>
  );
};

export default function TeacherTable(props) {
  const user = useSelector((state) => state.UserReducer);

  const [fetchTeachers, setFetchTeachers] = useState(true);

  const [id, setId] = useState('');
  const [firstname, setFirstName] = useState('');
  const [middlename, setMiddleName] = useState('');
  const [lastname, setLastName] = useState('');
  const [gradelevel, setGradeLevel] = useState('');

  const [teacherLoading, teachers] = useHttp(
    fetchTeachers ? `http://localhost:3001/teachers?schoolid=${user.data.school_id}${id ? '&id='+id: ''}${firstname ? '&firstname='+firstname: ''}${middlename ? '&middlename='+middlename: ''}` : '',
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
  },[id, firstname, middlename, lastname, gradelevel])

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
          <th className="border">First Name</th>
          <th className="border">Middle Name</th>
          <th className="border">Last Name</th>
          <th className="border">Grade Level</th>          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border text-right">
            <input value={id} onChange={e => setId(e.target.value)} className="h-6 w-full" type="text" />
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
          <td className="border text-right">
            <input value={gradelevel} onChange={e => setGradeLevel(e.target.value)} className="h-6 w-full" type="text" />
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
