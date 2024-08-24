import React from "react";

function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    isFriendly: "",
    employment: "",
    favouriteColour: "",
  });

  //console.log(formData);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className='container'>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div className='mt-5 mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='your first name'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='your last name'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <input
            type='email'
            className='form-control'
            placeholder='your email here'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <textarea
            className='form-control'
            name='message'
            cols='30'
            rows='10'
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <br />
        <hr />

        <div className='form-check'>
          <input
            className='form-check-input'
            type='checkbox'
            name='isFriendly'
            checked={formData.isFriendly}
            onChange={handleChange}
            id='is-friendly'
          />
          <label className='form-check-label' htmlFor='is-friendly'>
            Are you friendly?
          </label>
        </div>
        <br />
        <hr />

        <fieldset className='mt-3 border'>
          <span className='h5'>Employment Status</span>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              id='unemployed'
              name='employment'
              value='unemployed'
              checked={formData.employment === "unemployed"}
              onChange={handleChange}
            />
            <label className='form-check-label' htmlFor='unemployed'>
              Unemployed
            </label>
          </div>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              id='part-time'
              name='employment'
              value='part-time'
              checked={formData.employment === "part-time"}
              onChange={handleChange}
            />
            <label className='form-check-label' htmlFor='part-time'>
              Part-time
            </label>
          </div>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              id='full-time'
              name='employment'
              value='full-time'
              checked={formData.employment === "full-time"}
              onChange={handleChange}
            />
            <label className='form-check-label' htmlFor='full-time'>
              Full-time
            </label>
          </div>
        </fieldset>
        <br />
        <hr />

        <label className='form-select-label' htmlFor='favourite-colour'>
          <span className='h5'> What is your favourite colour</span>
        </label>
        <select
          value={formData.favouriteColour}
          onChange={handleChange}
          name='favouriteColour'
          className='form-select'
          size='3'
          aria-label='size 3 select example'
          id='favourite-colour'
        >
          <option disabled value='red'>
            ---Choose Colour---
          </option>
          <option value='red'>Red</option>
          <option value='orange'>Orange</option>
          <option value='yellow'>Yellow</option>
          <option value='green'>Green</option>
          <option value='blue'>Blue</option>
          <option value='indigo'>Indigo</option>
          <option value='violet'>Violet</option>
        </select>

        <div className='my-3'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
