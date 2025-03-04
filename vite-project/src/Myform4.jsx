import { useState } from "react";

function Myform() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Wake Up ! Mr.${firstName} ! 😎`);
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>firstName</label>
      <input type="text" name="firstName" onChange={event => setFirstName(event.target.value)} value={firstName}/>
      <br />
      <label>lastName</label>
      <input type="text" name="LastName" onChange={(e) => setLastName(event.target.value)} value={lastName}/>
      <br />
      <label>email</label>
      <input type="email" name="email" onChange={(event) => setEmail(event.target.value)} value={email}/>
      <br />
      <input type="submit" value="제출"/>
    </form>
  );
}

export default Myform;