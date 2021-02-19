import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHttp } from "../hooks/http";
import { usePostHttp } from "../hooks/postHttp";

const Row = (props) => {
  const {rooms} = props;

  return (
    <tr
      onClick={(e) => props.editData( rooms)}
      className="cursor-pointer"
      key={rooms.id}
    >
      <td className="border w-1/12 text-right">{rooms.id}</td>
      <td className="border w-1/4 text-center">{rooms.name}</td>
    </tr>
  );
};

export default function RoomTable(props) {
  const user = useSelector((state) => state.UserReducer);

  const [fetchRooms, setFetchRooms] = useState(true);

  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const [roomsLoading, rooms] = useHttp(
    fetchRooms ? `/rooms?school=${user.data.school}${id?'&id='+id:''}${name?'&name='+name:''}` : '',
    [fetchRooms ? fetchRooms : null]
  );

  useEffect(() => {
    if (fetchRooms) setFetchRooms(false);
  }, []);

  useEffect(() => {
    if(roomsLoading)
      setFetchRooms(false)
  },[roomsLoading])

  useEffect(() => {
    if(!roomsLoading)
      setFetchRooms(true)
  },[id, name])

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
        {rooms &&
          rooms.map((rooms) => {
            return (
              <Row key={rooms.id} rooms={rooms} editData={props.editData} />
            );
          })}
      </tbody>
    </table>
  );
}
