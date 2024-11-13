//import { width } from "@fortawesome/free-brands-svg-icons/fa42Group"
import React, { useState } from "react";

const Create = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Reset the form
    setFormData({
      name: '',
      email: '',
      password: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <h1>Create Form</h1>
      <form style={{ width: "50%", paddingBottom: "20px" }} onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="form-control" 
            placeholder="Enter Name" 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="form-control" 
            placeholder="Enter Email" 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            className="form-control" 
            placeholder="Enter Password" 
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default Create;

