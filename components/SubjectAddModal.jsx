import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usePostHttp } from "../hooks/postHttp";

export default function SubjectAddModal(props){
    const user = useSelector(state => state.UserReducer);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [gradelevel, setGradeLevel] = useState('');

    const [toSubmit, setToSubmit] = useState(false);

    const [isLoading, data] = usePostHttp(toSubmit ? { name: name, description: description, gradelevel: gradelevel, schoolid: user.data.school} : null, `/subject/add`)

    useEffect(() => {
        if(data)
            props.showAddModal(false);
    },[data])

    return (
             <div className="p-12 absolute w-full m-auto h-full">
                <div className="border">
                    <div className="bg-green-400 p-4 text-white text-xl font-bold uppercase flex justify-between">
                        <h1>Add new subject</h1>
                        <button className="relative border rounded-full w-8 h-8 right-1" onClick={(e => props.showAddModal(false))}>
                            <p className="absolute left-2 bottom-1">&#215;</p>
                        </button>
                    </div>
                    <div className="bg-white p-4 flex justify-around">
                        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Subject Name" />
                        <input value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder="Subject Descripttion"/>
                        <input value={gradelevel} onChange={e => setGradeLevel(e.target.value)} type="text" placeholder="Grade Level" />
                    </div>
                    <div className="w-full p-4 bg-white flex justify-end relative">
                        <button onClick={e => setToSubmit(true)} className="border p-2 text-white bg-green-400 text-center text-xl">Submit</button>
                    </div>
                </div>
            </div>
    )
}