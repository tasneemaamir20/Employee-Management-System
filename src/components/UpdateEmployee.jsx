import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEmployee = () => {
  let navigate = useNavigate();

  let { id } = useParams();
  console.log(id);

  let [emp, setEmp] = useState({
    name: "",
    email: "",
    password: "",
  });

  let handleChange = e => {
    console.log(e.target.name, e.target.value);

    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    let getData = async () => {
      let { data } = await axios.get("http://localhost:4000/employees/" + id);
      console.log(data);
      setEmp(data);
    };
    getData();
  }, []);

  let handleSubmit = e => {
    e.preventDefault();

    console.log(emp);

    axios.put("http://localhost:4000/employees/" + id, emp);

    setEmp({
      name: "",
      email: "",
      password: "",
    });

    navigate("/viewall");
  };

  return (
    <>
      <h2>Add Employees</h2>

      <form id="mainformContainer" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={emp.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            value={emp.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            value={emp.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div>
          <button>Update Employee</button>
        </div>
      </form>
    </>
  );
};

export default UpdateEmployee;
