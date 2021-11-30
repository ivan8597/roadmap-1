import { useState } from "react";
import { useUserContext } from "../context/User";

const EditProfile = () => {
  const {user,updateUser}=useUserContext()
  const[name,setName]=useState(user.name)
  const[lastname,setLastname]=useState(user.lastname)
  const[username,setUsername]=useState(user.username)
  return (
    <form onSubmit={(e)=>{
   e.preventDefault()
   updateUser({name,lastname,username})
    }} className="needs-validation" noValidate>
  <div className="row g-3">
    <div className="col-sm-6">
      <label htmlFor="firstName" className="form-label">
        First name
      </label>
      <input
        type="text"
        className="form-control"
        id="firstName"
        onChange={(e)=>{
       setName( e.target.value)
        }}
        value={name}
      />
      <div className="invalid-feedback">Valid first name is required.</div>
    </div>
    <div className="col-sm-6">
      <label htmlFor="lastName" className="form-label">
        Last name
      </label>
      <input
        type="text"
        className="form-control"
        id="lastName"
        onChange={(e)=>{
        setLastname(e.target.value)
        }}
        value={lastname}
      />
      <div className="invalid-feedback">Valid last name is required.</div>
    </div>
    <div className="col-12">
      <label htmlFor="username" className="form-label">
        Username
      </label>
      <div className="input-group has-validation">
        <span className="input-group-text">@</span>
        <input
          type="text"
          className="form-control"
          id="username"
         
          onChange={(e)=>{
            setUsername(e.target.value)
            }}
            value={username}
        />
        <div className="invalid-feedback">Your username is required.</div>
      </div>
    </div>
    <div className="col-12">
      <label htmlFor="email" className="form-label">
        Email <span className="text-muted">(Optional)</span>
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        placeholder="you@example.com"
        value={user.email}
        disabled
      />
      <div className="invalid-feedback">
        Please enter a valid email address for shipping updates.
      </div>
    </div>
    </div>
   <hr className="my-4" />
  <button className="w-100 btn btn-primary btn-lg" type="submit">
    Save
  </button>
</form>

  )
}

export default EditProfile;