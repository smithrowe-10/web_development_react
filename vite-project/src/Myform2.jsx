import { useState } from "react";

export default function MyForm() {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    alert(`${text} 라고 입력함`);
    event.preventDefault();
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text"  onChange={(event) => setText(event.target.value)} value={text}/>
      <input type="submit" value='submit'/>
    </form>
  )
}