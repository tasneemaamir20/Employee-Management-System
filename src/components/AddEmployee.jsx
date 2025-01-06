import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddEmployee = () => {
  let navigate = useNavigate();

  let [emp, setEmp] = useState({
    name: "",
    email: "",
    Password: "",
  });
  let handleChange = e => {
    console.log(e.target.name, e.target.value);

    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    console.log(emp);

    axios.post("http://localhost:4000/employees", emp);

    setEmp({
      name: "",
      email: "",
      Password: "",
    });

    navigate("/viewall");
  };
  return (
    <>
      <h2>AddEmployee</h2>

      <form id="mainformContainer" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={emp.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            value={emp.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="Password"
            value={emp.Password}
            onChange={handleChange}
            placeholder="Enter your passsword"
            required
          />
        </div>
        <div>
          <button>Add Employee</button>
        </div>
      </form>
    </>
  );
};

export default AddEmployee;
