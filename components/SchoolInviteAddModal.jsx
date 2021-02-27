import { useEffect, useState } from "react";
import { usePostHttp } from "../hooks/postHttp";

export default function SchoolInvteAddModal(props){
    const [name, setName] = useState('');
    const [toSubmit, setToSubmit] = useState(false);

    const [isLoading, data] = usePostHttp(toSubmit ? {name: name } : null, `/school-invite/add`)

    useEffect(() => {
        if(data)
            props.showAddModal(false);
    },[data])

    return (
             <div className="p-12 absolute w-full m-auto h-full">
                <div className="border">
                    <div className="bg-green-400 p-4 text-white text-xl font-bold uppercase flex justify-between">
                        <h1>Add new room</h1>
                        <button className="relative border rounded-full w-8 h-8 right-1" onClick={(e => props.showAddModal(false))}>
                            <p className="absolute left-2 bottom-1">&#215;</p>
                        </button>
                    </div>
                    <div className="bg-white p-4 flex flex-wrap justify-around content-evenly">
                        <input className="m-2" value={name} onChange={e => {setName(e.target.value)}} type="text" placeholder="Name" />
                    </div>
                    <div className="w-full p-4 flex justify-end relative">
                        <button onClick={e => setToSubmit(true)} className="border p-2 text-white bg-green-400 text-center text-xl">Submit</button>
                    </div>
                </div>
            </div>
    )
}