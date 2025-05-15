import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleNote(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleNote}
          placeholder="Title"
          value={note.title}
        />
        <textarea
          name="content"
          onChange={handleNote}
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
