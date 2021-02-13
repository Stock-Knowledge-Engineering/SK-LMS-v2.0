import { useEffect, useState } from "react";
import { useHttp } from "../hooks/http";
import { usePostHttp } from "../hooks/postHttp";

const Row = (props) => {
  const {subject} = props;

  return (
    <tr
      onClick={(e) => props.editData( subject)}
      className="cursor-pointer"
      key={subject.id}
    >
      <td className="border w-1/12 text-right">{subject.id}</td>
      <td className="border w-1/4 text-center">{subject.title}</td>
      <td className="border w-1/4 text-left">{subject.description}</td>
      <td className="border w-1/6 text-center">{subject.gradelevel}</td>
    </tr>
  );
};

export default function SubjectTable(props) {
  const [fetchSubjects, setFetchSubjects] = useState(true);

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [gradelevel, setGradeLevel] = useState('');
  const [filterQuery, setFilterQuery] = useState('');

  const [subjectLoading, subjects] = useHttp(
    fetchSubjects ? `http://localhost:3001/subjects?${id ? 'id='+id+'&' : ''}${title ? 'title='+title+'&' : ''}` : '',
    [fetchSubjects ? fetchSubjects : null]
  );

  useEffect(() => {
    if (fetchSubjects) setFetchSubjects(false);
  }, []);

  useEffect(() => {
    if(subjectLoading)
      setFetchSubjects(false)
  },[subjectLoading])

  useEffect(() => {
    if(!subjectLoading)
      setFetchSubjects(true)
  },[id, title, description, gradelevel])

  useEffect(()=>{
    (!props.isAddModalOpen) ? setFetchSubjects(true) : setFetchSubjects(false);
  },[props.isAddModalOpen])

  useEffect(()=>{
    (!props.isEditModalOpen) ? setFetchSubjects(true) : setFetchSubjects(false);
  },[props.isEditModalOpen])


  return (
    <table className="mt-2 table-fixed">
      <thead>
        <tr>
          <th className="border">ID</th>
          <th className="border">Title</th>
          <th className="border">Description</th>
          <th className="border">Grade Level</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border text-right">
            <input value={id} onChange={e => setId(e.target.value)} className="h-6 w-full" type="text" />
          </td>
          <td className="border text-right">
            <input value={title} onChange={e => setTitle(e.target.value)} className="h-6 w-full" type="text" />
          </td>
          <td className="border text-right">
            <input value={description} onChange={e => setDescription(e.target.value)} className="h-6 w-full" type="text" />
          </td>
          <td className="border text-right">
            <input value={gradelevel} onChange={e => setGradeLevel(e.target.value)} className="h-6 w-full" type="text" />
          </td>
        </tr>
        {subjects &&
          subjects.map((subject) => {
            return (
              <Row key={subject.id} subject={subject} editData={props.editData} />
            );
          })}
      </tbody>
    </table>
  );
}
