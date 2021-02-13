import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHttp } from "../hooks/http";
import { usePostHttp } from "../hooks/postHttp";

const Row = (props) => {
  const {gradelevel} = props;

  return (
    <tr
      onClick={(e) => props.editData( gradelevel)}
      className="cursor-pointer"
      key={gradelevel.id}
    >
      <td className="border w-1/12 text-right">{gradelevel.id}</td>
      <td className="border w-1/4 text-center">{gradelevel.name}</td>
    </tr>
  );
};

export default function GradeLevelTable(props) {
  const user = useSelector((state) => state.UserReducer);

  const [fetchGradeLevels, setFetchGradeLevels] = useState(true);

  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const [gradeLevelsLoading, gradelevels] = useHttp(
    fetchGradeLevels ? `http://localhost:3001/grade-levels?school=${user.data.school_id}${id?'&id='+id:''}${name?'&name='+name:''}` : '',
    [fetchGradeLevels ? fetchGradeLevels : null]
  );

  useEffect(() => {
    if (fetchGradeLevels) setFetchGradeLevels(false);
  }, []);

  useEffect(() => {
    if(gradeLevelsLoading)
      setFetchGradeLevels(false)
  },[gradeLevelsLoading])

  useEffect(() => {
    if(!gradeLevelsLoading)
      setFetchGradeLevels(true)
  },[id, name])

  useEffect(()=>{
    (!props.isAddModalOpen) ? setFetchGradeLevels(true) : setFetchGradeLevels(false);
  },[props.isAddModalOpen])

  useEffect(()=>{
    (!props.isEditModalOpen) ? setFetchGradeLevels(true) : setFetchGradeLevels(false);
  },[props.isEditModalOpen])

  return (
    <table className="mt-2 table-fixed">
      <thead>
        <tr>
          <th className="border">ID</th>
          <th className="border">Name</th>
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
        </tr>
        {gradelevels &&
          gradelevels.map((gradelevel) => {
            return (
              <Row key={gradelevel.id} gradelevel={gradelevel} editData={props.editData} />
            );
          })}
      </tbody>
    </table>
  );
}
