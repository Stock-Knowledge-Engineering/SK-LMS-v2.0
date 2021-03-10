import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHttp } from "../hooks/http";
import { useMultipartHttp } from "../hooks/multipartHttp";
import { usePostHttp } from "../hooks/postHttp";

import ModeOneHotspot from './ModeOneHotspot';
import ModeTwoHotspot from './ModeTwoHotspot';

const Select = (props) => {
    return (
      <select
        defaultValue={props.selected}
        onChange={(e) => props.setValue(e.target.value, props.label)}
      >
        <option value="">------{props.placeholder}------</option>
        {props.options &&
          props.options.map((option, index) => {
            return (
              <option
                selected={option[props.label] == props.selected}
                key={index}
                value={option[props.value]}
              >
                {option[props.label]}
              </option>
            );
          })}
      </select>
    );
  };

export default function TopicsEditModal(props) {
    const user = useSelector(state => state.UserReducer);

  const [subject, setSubject] = useState(props.topic.subjectid);
  const [selectedSubject, setSelectedSubject] = useState(props.topic.subjectname);
  const [chapter, setChapter] = useState(props.topic.chapter);
  const [title, setTitle] = useState(props.topic.title);
  const [description, setDescription] = useState(props.topic.description);
  const [model, setModel] = useState(props.topic.model);
  const [background, setBackground] = useState(props.topic.background);
  const [content, setContent] = useState(props.topic.content);
  const [gradelevel, setGradeLevel] = useState(props.topic.gradelevelid)
  const [selectedGradelevel, setSelectedGradelevel] = useState(props.topic.gradelevelname)
  const [mode, setMode] = useState(props.topic.modeid);
  const [selectedMode, setSelectedMode] = useState(props.topic.modename);
  const [modeAttributes, setModeAttributes] = useState(props.topic.instruction);
  const [hotspots, setHotspots] = useState([]);
  const [status, setStatus] = useState(props.topic.statusid);
  const [selectedStatus, setSelectedStatus] = useState(props.topic.statusname);

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
    `/teacher/gradelevels?teacherid=${user.data.id}&subject=${!typeof subject == 'number' ? subject : props.topic.subjectid}`,
    [subject]
  );

  const [modesLoading, modes] = useHttp(`/modes`,[]);
  const [topicStatusLoading, topicStatus] = useHttp(`/topic-status`,[]);

  const [isLoading, data] = useMultipartHttp(
    toSubmit ? formData: null,
    `/topic/edit`
  );

  useEffect(() => {
    if (data) props.showEditModal(false);
  }, [data]);

  useEffect(() => {
    if(subject && chapter && description && background && content && gradelevel && mode && model && modeAttributes && hotspots && status)
      setDisableSubmit(false);
    else
      setDisableSubmit(true)

    let formData = new FormData();
    formData.append('id', props.topic.id);
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
    const hotspots = JSON.parse(props.topic.hotspots);

    if(mode == 1 && props.topic.modeid == 1)
        setHotspots(hotspots)

    if(mode == 1 && props.topic.modeid != 1)
        setHotspots([{
            id: 1,
            title: hotspots.title,
            coordinatex: "",
            coordinatey: "",
            coordinatez: "",
            description: "",
          }])

    if(mode == 2 && props.topic.modeid == 2)
        setHotspots(JSON.parse(props.topic.hotspots))

    if(mode == 2 && props.topic.modeid != 2)
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

  const handleMode = (id, name) => {
      setMode(id);
      setSelectedMode(name);
  }

  const handleSubject = (id, name) => {
    setMode(id);
    setSelectedMode(name);
}

const handleGradelevel = (id, name) => {
    setGradeLevel(id);
    setSelectedGradelevel(name);
}

const handleStatus = (id, name) => {
    setStatus(id);
    setSelectedStatus(name);
}

  return (
    <div className="p-12 absolute w-full m-auto h-full">
      <div className="border">
        <div className="bg-green-400 p-4 text-white text-xl font-bold uppercase flex justify-between">
          <h1>Add new topic</h1>
          <button
            className="relative border rounded-full w-8 h-8 right-1"
            onClick={(e) => props.showEditModal(false)}
          >
            <p className="absolute left-2 bottom-1">&#215;</p>
          </button>
        </div>
        <div className="bg-white p-4 flex flex-col space-y-2">
          <Select
            setValue={handleSubject}
            options={subjects}
            selected={selectedSubject}
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
            setValue={handleGradelevel}
            options={gradelevels}
            selected={selectedGradelevel}
            value="gradelevel"
            label={"gradelevel"}
            placeholder="Grade Level"
          />
          <Select
            setValue={handleMode}
            options={modes}
            selected={selectedMode}
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
          {mode == 1 && hotspots.length > 0  && console.log(hotspots)}
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
            setValue={handleStatus}
            options={topicStatus}
            selected={selectedStatus}
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
