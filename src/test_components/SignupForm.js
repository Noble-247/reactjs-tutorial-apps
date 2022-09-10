import React from "react";

function SignupForm() {
  const [formData, setFormData] = React.useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    recieveOtherNews: true,
  });
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [otherNewsSignupSuccess, setOtherNewsSignupSuccess] =
    React.useState("");

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.password === formData.confirmPassword) {
      setSuccessMessage("You have successfully signed up!!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 4000);
    } else {
      setErrorMessage("Password does not match!!!");
      setTimeout(() => {
        setErrorMessage("");
      }, 4000);
      return;
    }

    if (formData.recieveOtherNews === true) {
      setOtherNewsSignupSuccess(
        "Thanks for signing up for our various tech news"
      );
      setTimeout(() => {
        setOtherNewsSignupSuccess("");
      }, 4000);
    }

    setFormData((previousFormData) => ({
      ...previousFormData,
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      recieveOtherNews: true,
    }));
  }

  //console.log(formData);

  return (
    <div className='container bg-purple p-3 mt-3'>
      <form onSubmit={handleSubmit} className='w-40 mx-auto bg-white p-4'>
        <p className='h5'>Subscribe to our Newsletter</p>

        <div className='mb-3 mt-3'>
          <input
            className='form-control'
            placeholder='user name'
            value={formData.userName}
            onChange={handleChange}
            type='text'
            name='userName'
          />
        </div>
        <div className='mb-3'>
          <input
            className='form-control'
            placeholder='email'
            value={formData.email}
            onChange={handleChange}
            type='email'
            name='email'
          />
        </div>
        <div className='mb-3'>
          <input
            className='form-control'
            placeholder='password'
            value={formData.password}
            onChange={handleChange}
            type='password'
            name='password'
          />
        </div>
        <div className='mb-3'>
          <input
            className='form-control'
            placeholder='confirm password'
            value={formData.confirmPassword}
            onChange={handleChange}
            type='password'
            name='confirmPassword'
          />
        </div>

        <div className='mb-3 form-check'>
          <input
            className='form-check-input'
            type='checkbox'
            name='recieveOtherNews'
            id='recieve-other-news'
            checked={formData.recieveOtherNews}
            onChange={handleChange}
          />
          <label className='form-check-label' htmlFor='recieve-other-news'>
            I want to recieve other related news
          </label>
        </div>

        <button className='btn bg-purple text-white' type='submit'>
          Subscribe!
        </button>
        <p className='text-danger'>{errorMessage}</p>
        <p className='text-success'>{successMessage}</p>
        <p className='text-success'>{otherNewsSignupSuccess}</p>
      </form>
    </div>
  );
}

export default SignupForm;
