import React, { useState } from "react";

function AddToList() {
  const [ICTFields, setICTFields] = useState([
    "Data Science",
    "Web Development",
    "Software Engineering",
  ]);

  const [field, setField] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setICTFields([...ICTFields, field]);
  }

  return (
    <div className='w-75 px-5'>
      <ul>
        {ICTFields.map((fields) => (
          <li key={fields}>{fields}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={field}
          onChange={(event) => setField(event.target.value)}
          className='form-control w-25 d-inline-block'
        />
        <button className='btn btn-dark' type='submit'>
          Add to List
        </button>
      </form>
    </div>
  );
}

export default AddToList;
