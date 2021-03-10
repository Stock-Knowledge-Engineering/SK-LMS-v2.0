import { useEffect, useState } from "react";
import { useHttp } from "../hooks/http";
import { useMultipartHttp } from "../hooks/multipartHttp";
import { usePostHttp } from "../hooks/postHttp";

import Select from "./Select";
import ModeOneHotspot from './ModeOneHotspot';
import ModeTwoHotspot from './ModeTwoHotspot';
import { useSelector } from "react-redux";

export default function TopicsAddModal(props) {
  const user = useSelector(state => state.UserReducer);

  const [subject, setSubject] = useState("");
  const [chapter, setChapter] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [model, setModel] = useState("");
  const [background, setBackground] = useState("");
  const [content, setContent] = useState("");
  const [gradelevel, setGradeLevel] = useState("");
  const [mode, setMode] = useState("");
  const [modeAttributes, setModeAttributes] = useState("");
  const [hotspots, setHotspots] = useState([]);
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState(null);

  const [toSubmit, setToSubmit] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);

  const [subjectsLoading, subjects] = useHttp(
    `/teacher/subjects?teacherid=${user.data.id}`,
    []
  );

  const [
    gradelevelsLoading,
    gradelevels,
  ] = useHttp(
    `/teacher/gradelevels?teacherid=${user.data.id}&subject=${subject}`,
    [subject]
  );

  const [modesLoading, modes] = useHttp(`/modes`,[]);
  const [topicStatusLoading, topicStatus] = useHttp(`/topic-status`,[]);

  const [isLoading, data] = useMultipartHttp(
    toSubmit ? formData: null,
    `/topic/add`
  );

  useEffect(() => {
    if (data) props.showAddModal(false);
  }, [data]);

  useEffect(() => {
    if(subject && chapter && description && background && content && gradelevel && mode && model && modeAttributes && hotspots && status)
      setDisableSubmit(false);
    else
      setDisableSubmit(true)

    let formData = new FormData();
    formData.append('subject', subject);
    formData.append('chapter', chapter);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('background', background);
    formData.append('content', content);
    formData.append('gradelevel', gradelevel);
    formData.append('mode', mode);
    formData.append('model', model);
    formData.append('modeAttributes', modeAttributes);
    formData.append('hotspots', JSON.stringify(hotspots));
    formData.append('status', status);
    formData.append('author', user.data.id);
    formData.append('school', user.data.school);

    setFormData(formData);

  },[subject, chapter, title, description ,background, content, gradelevel, mode, model, modeAttributes, hotspots, status])

  useEffect(() => {
    if(mode == 1)
      setHotspots([{
        id: 1,
        title: "",
        coordinatex: "",
        coordinatey: "",
        coordinatez: "",
        description: "",
      }])

    if(mode == 2)
    setHotspots([{
      id: 1,
      title: "",
      coordinatexStart: "",
      coordinateyStart: "",
      coordinatezStart: "",
      coordinatexEnd: "",
      coordinateyEnd: "",
      coordinatezEnd: "",
      description: "",
    }])
  }, [mode]);

  return (
    <div className="p-12 absolute w-full m-auto h-full">
      <div className="border">
        <div className="bg-green-400 p-4 text-white text-xl font-bold uppercase flex justify-between">
          <h1>Add new topic</h1>
          <button
            className="relative border rounded-full w-8 h-8 right-1"
            onClick={(e) => props.showAddModal(false)}
          >
            <p className="absolute left-2 bottom-1">&#215;</p>
          </button>
        </div>
        <div className="bg-white p-4 flex flex-col space-y-2">
          <Select
            setValue={setSubject}
            options={subjects}
            selected={subject}
            value="subjectid"
            label={"subject"}
            placeholder="Subject"
          />
          <input
            type="text"
            value={chapter}
            onChange={(e) => {
              setChapter(e.target.value);
            }}
            placeholder="Chapter"
          />
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Title"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="Description"
          />
          <input
            type="file"
            name="background"
            onChange={(e) => {
              setBackground(e.target.files[0]);
            }}
          />
          <input
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder="Content"
          />
          <Select
            setValue={setGradeLevel}
            options={gradelevels}
            selected={gradelevel}
            value="gradelevel"
            label={"gradelevel"}
            placeholder="Grade Level"
          />
          <Select
            setValue={setMode}
            options={modes}
            selected={mode}
            value="id"
            label={"name"}
            placeholder="Modes"
          />
          <input
            type="file"
            name="model"
            onChange={(e) => {
              setModel(e.target.files[0]);
            }}
          />
          {(mode == 1 || mode == 2 )&& <input
            type="text"
            value={modeAttributes}
            onChange={(e) => {
              setModeAttributes(e.target.value);
            }}
            placeholder="3D Attributes"
          />}
          {mode && <label>Hotspots</label>}
          {mode == 1 && hotspots.length > 0  && hotspots.map((elm, i) => {
            return <ModeOneHotspot id={i} elm={elm} key={i} hotspots={hotspots} setHotspots={setHotspots} />
          })}
          {mode == 2 && hotspots.length > 0  && hotspots.map((elm, i) => {
            return <ModeTwoHotspot id={i} elm={elm} key={i} hotspots={hotspots} setHotspots={setHotspots} />
          })}
          {mode == 1 && <div className="w-full text-center">
            <button
              className="bg-green-400 text-white text-xl w-40 h-10"
              onClick={(e) => {
                setHotspots((hotspot) => [
                  ...hotspots,
                  {
                    id: hotspots[hotspots.length-1].id + 1,
                    title: "",
                    coordinatex: "",
                    coordinatey: "",
                    coordinatez: "",
                    description: "",
                  },
                ]);
              }}
            >
              Add Hotspot
            </button>
          </div>}
          {mode == 2 && <div className="w-full text-center">
            <button
              className="bg-green-400 text-white text-xl w-40 h-10"
              onClick={(e) => {
                setHotspots((hotspot) => [
                  ...hotspots,
                  {
                    id: hotspots[hotspots.length-1].id + 1,
                    title: "",
                    coordinatexStart: "",
                    coordinateyStart: "",
                    coordinatezStart: "",
                    coordinatexEnd: "",
                    coordinateyEnd: "",
                    coordinatezEnd: "",
                    description: "",
                  },
                ]);
              }}
            >
              Add Hotspot
            </button>
          </div>}
          <Select
            setValue={setStatus}
            options={topicStatus}
            selected={mode}
            value="id"
            label={"name"}
            placeholder="Status"
          />
        </div>
        
        <div className="w-full p-4 flex justify-end relative bg-white">
          <button
            onClick={(e) => setToSubmit(true)}
            className="border p-2 text-white bg-green-400 text-center text-xl"
            disabled={disableSubmit} 
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
