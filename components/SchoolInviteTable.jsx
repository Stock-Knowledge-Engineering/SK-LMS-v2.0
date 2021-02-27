import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHttp } from "../hooks/http";
import { usePostHttp } from "../hooks/postHttp";

const Row = (props) => {
  const {schoolInvite} = props;

  return (
    <tr
      onClick={(e) => props.editData( schoolInvite)}
      className="cursor-pointer"
      key={schoolInvite.id}
    >
      <td className="border w-1/12 text-right">{schoolInvite.id}</td>
      <td className="border w-1/4 text-center">{schoolInvite.code}</td>
      <td className="border w-1/4 text-center">{schoolInvite.name}</td>
    </tr>
  );
};

export default function SchoolInviteTable(props) {
  const user = useSelector((state) => state.UserReducer);

  const [fetchRooms, setFetchRooms] = useState(true);

  const [id, setId] = useState('');
  const [code, setCode] = useState('');

  const [schoolInviteLoading, schoolInvite] = useHttp(
    fetchRooms ? `/school-invite?${id?`id=${id}&`:''}${code?`code=${code}&`:''}` : '',
    [fetchRooms ? fetchRooms : null]
  );

  useEffect(() => {
    if (fetchRooms) setFetchRooms(false);
  }, []);

  useEffect(() => {
    if(schoolInviteLoading)
      setFetchRooms(false)
  },[schoolInviteLoading])

  useEffect(() => {
    if(!schoolInviteLoading)
      setFetchRooms(true)
  },[id, code])

  useEffect(()=>{
    (!props.isAddModalOpen) ? setFetchRooms(true) : setFetchRooms(false);
  },[props.isAddModalOpen])

  useEffect(()=>{
    (!props.isEditModalOpen) ? setFetchRooms(true) : setFetchRooms(false);
  },[props.isEditModalOpen])

  return (
    <table className="mt-2 table-fixed">
      <thead>
        <tr>
          <th className="border">ID</th>
          <th className="border">Code</th>
          <th className="border">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border text-right">
            <input value={id} onChange={e => setId(e.target.value)} className="h-6 w-full" type="text" />
          </td>
          <td className="border text-right">
            <input value={code} onChange={e => setCode(e.target.value)} className="h-6 w-full" type="text" />
          </td>
          <td className="border text-right">
            <input value={code} onChange={e => setCode(e.target.value)} className="h-6 w-full" type="text" />
          </td>
        </tr>
        {schoolInvite &&
          schoolInvite.map((schoolInvite) => {
            return (
              <Row key={schoolInvite.id} schoolInvite={schoolInvite} editData={props.editData} />
            );
          })}
      </tbody>
    </table>
  );
}
