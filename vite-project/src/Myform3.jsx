import { useState } from "react";

export default function MyForm() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (event) => {
    setUser({...user, [event.target.name]:
      event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Wake Up ! Mr.${user.firstName} ! 😎`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name </label>
      <input type="text" name = "firstName" onChange={handleChange} value={user.firstName}/>
      <br />
      <label>Last Name </label>
      <input type="text" name="lastName" onChange={handleChange} value={user.lastName} />
      <br />
      <label>email</label>
      <input type="email" name="email" onChange={handleChange} value={user.email} />
      <br />
      <input type="submit" value="제출"/>
    </form>
  );
}