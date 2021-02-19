import { useEffect, useState } from "react";
import { usePostHttp } from "../hooks/postHttp";

export default function SubjectEditModal(props){
    const [name, setName] = useState(props.subject.title);
    const [description, setDescription] = useState(props.subject.description);
    const [gradelevel, setGradeLevel] = useState(props.subject.gradelevel);
    const [toSubmit, setToSubmit] = useState(false);

    const [isLoading, data] = usePostHttp(toSubmit ? {id: props.subject.id, name: name, description: description, gradelevel: gradelevel} : null, `/subject/edit`)

    useEffect(() => {
        if(data)
            props.showEditModal(false);
    },[data])

    return (
             <div className="p-12 absolute w-full m-auto h-full">
                <div className="border">
                    <div className="bg-green-400 p-4 text-white text-xl font-bold uppercase flex justify-between">
                        <h1>Add new subject</h1>
                        <button className="relative border rounded-full w-8 h-8 right-1" onClick={(e => props.showEditModal(false))}>
                            <p className="absolute left-2 bottom-1">&#215;</p>
                        </button>
                    </div>
                    <div className="bg-white p-4 flex justify-around">
                    <input value={name} onChange={e => {setName(e.target.value)}} type="text" placeholder="Subject Name" />
                        <input value={description} onChange={e => {setDescription(e.target.value)}} type="text" placeholder="Subject Descripttion"/>
                        <input value={gradelevel} onChange={e => {setGradeLevel(e.target.value)}}type="text" placeholder="Grade Level" />
                    </div>
                    <div className="w-full p-4 flex justify-end relative">
                        <button onClick={e => setToSubmit(true)} className="border p-2 text-white bg-green-400 text-center text-xl">Submit</button>
                    </div>
                </div>
            </div>
    )
}