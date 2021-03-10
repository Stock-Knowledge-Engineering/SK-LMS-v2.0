import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHttp } from "../hooks/http";
import { usePostHttp } from "../hooks/postHttp";

const Row = (props) => {
  const {topic} = props;

  return (
    <tr
      onClick={(e) => props.editData(topic)}
      className="cursor-pointer"
      key={topic.id}
    >
      <td className="border w-1/12 text-right">{topic.id}</td>
      <td className="border w-1/4 text-center">{topic.subjectname}</td>
      <td className="border w-1/4 text-center">{topic.chapter}</td>
      <td className="border w-1/6 text-center">{topic.title}</td>
      <td className="border w-1/6 text-center">{topic.statusname}</td>
    </tr>
  );
};

export default function TopicsTable(props) {
  const router = useRouter();
  const user = useSelector((state) => state.UserReducer);

  const [fetchTopics, setFetchTopics] = useState(true);

  const [id, setId] = useState('');
  const [subject, setSubject] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [day, setDay] = useState('');
  const [room, setRoom] = useState('');
  const [student, setStudent] = useState('');

  const [topicsLoading, topics] = useHttp(
    fetchTopics ? `/topics?schoolid=${user.data.school}&${user.data.userid ? `authorid=${user.data.userid}`:''}` : '',
    [fetchTopics ? fetchTopics : null]
  );

  useEffect(() => {
    if (fetchTopics) setFetchTopics(false);
  }, []);

  useEffect(() => {
    if(topicsLoading)
      setFetchTopics(false)
  },[topicsLoading])

  useEffect(() => {
    if(!topicsLoading)
      setFetchTopics(true)
  },[id, subject, start, end, day])

  useEffect(()=>{
    (!props.isAddModalOpen) ? setFetchTopics(true) : setFetchTopics(false);
  },[props.isAddModalOpen])

  useEffect(()=>{
    (!props.isEditModalOpen) ? setFetchTopics(true) : setFetchTopics(false);
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
          <th className="border">Chapter</th>
          <th className="border">Title</th>
          <th className="border">Status</th>
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
          {/* <td className="border text-right">
            <input value={room} onChange={e => setRoom(e.target.value)} className="h-6 w-full" type="text" />
          </td>
          <td className="border text-right">
            <input value={student} onChange={e => setStudent(e.target.value)} className="h-6 w-full" type="text" />
          </td> */}
        </tr>
        {topics &&
          topics.map((topic) => {
            return (
              <Row key={topic.id} topic={topic} editData={props.editData} />
            );
          })}
      </tbody>
    </table>
  );
}
