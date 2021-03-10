const ModeOneHotspot = (props) => {
  const handleChange = (id, e) => {
    let updatedList = props.hotspots.map(hotspot => {
      if(hotspot.id == id)
        return {...hotspot, [e.target.name]:e.target.value}
      return hotspot;
    });

    props.setHotspots(updatedList)
  }

  const handleDelete = (id) => {
    let updatedList = props.hotspots.filter(hotspot => {
      return hotspot.id != id;
    });
    updatedList = updatedList.map((hotspot, i) => {
      return {...hotspot, id:i+1}
    })
    props.setHotspots(updatedList)
  }

  return (
    <>
      <div className="flex justify-between">
        <p>Hotspot: {props.elm.id}</p>
        {props.hotspots.length > 1 && <button onClick={e => handleDelete(props.elm.id)}>&times;</button>}
      </div>
      <input placeholder="Title" type="text" name="title" value={props.elm.title} onChange={e => handleChange(props.id+1, e)} />
      <input placeholder="Coordinate X" type="text" name="coordinatex" value={props.elm.coordinatex} onChange={e => handleChange(props.id+1, e)} />
      <input placeholder="Coordinate Y" type="text" name="coordinatey" value={props.elm.coordinatey} onChange={e => handleChange(props.id+1, e)} />
      <input placeholder="Coordinate Z" type="text" name="coordinatez" value={props.elm.coordinatez} onChange={e => handleChange(props.id+1, e)} />
      <input placeholder="Description" type="text" name="description" value={props.elm.description} onChange={e => handleChange(props.id+1, e)} />
    </>
  )
}


export default ModeOneHotspot;