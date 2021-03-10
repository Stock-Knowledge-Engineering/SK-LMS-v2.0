const ModeTwoHotspot = (props) => {
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
      <input placeholder="Coordinate X Start" type="text" name="coordinatexStart" value={props.elm.coordinatey} onChange={e => handleChange(props.id+1, e)} />
      <input placeholder="Coordinate Y Start" type="text" name="coordinateyStart" value={props.elm.coordinatez} onChange={e => handleChange(props.id+1, e)} />
      <input placeholder="Coordinate Z Start" type="text" name="coordinatezStart" value={props.elm.description} onChange={e => handleChange(props.id+1, e)} />
      <input placeholder="Coordinate X End" type="text" name="coordinatexEnd" value={props.elm.coordinatey} onChange={e => handleChange(props.id+1, e)} />
      <input placeholder="Coordinate Y End" type="text" name="coordinateyEnd" value={props.elm.coordinatez} onChange={e => handleChange(props.id+1, e)} />
      <input placeholder="Coordinate Z End" type="text" name="coordinatezEnd" value={props.elm.description} onChange={e => handleChange(props.id+1, e)} />
      <input placeholder="Description" type="text" name="description" value={props.elm.description} onChange={e => handleChange(props.id+1, e)} />
    </>
  )
}

export default ModeTwoHotspot;