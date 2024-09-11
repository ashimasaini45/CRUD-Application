import { useState } from "react";
import { addUser } from "../service/api";

const defaultValue = {
  firstName: '',
  lastName: '',
  userName: '',
  city: ''
};



const AddUser = () => {
  // Correct destructuring and useState call
  const [user, setUser] = useState(defaultValue);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async() =>{
    await addUser(user);
  }

  return (
    <div className="container">
      <h3>Fill Your Details</h3>

      <form className="row g-3">
        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">First name</label>
          <input
            onChange={onValueChange}
            type="text"
            name="firstName"
            className="form-control"
            id="validationDefault01"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationDefault02" className="form-label">Last name</label>
          <input
            onChange={onValueChange}
            type="text"
            name="lastName"
            className="form-control"
            id="validationDefault02"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
          <div className="input-group">
            <span className="input-group-text" id="inputGroupPrepend2">@</span>
            <input
              onChange={onValueChange}
              type="text"
              name="userName"
              className="form-control"
              id="validationDefaultUsername"
              aria-describedby="inputGroupPrepend2"
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault03" className="form-label">City</label>
          <input
            onChange={onValueChange}
            type="text"
            name="city"
            className="form-control"
            id="validationDefault03"
            required
          />
        </div>
        
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck2" required />
            <label className="form-check-label" htmlFor="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" 
          onClick={addUserDetails}
          type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
