import { useState } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  console.log('렌더링되었습니다.');
  console.log(`현재 count : ${count}`)
  return(
    <div>  
      <p>버튼 눌러주세요</p>
      <button onClick={() => {
        console.log('-----');
        console.log('🏆 버튼 클릭')
        setCount(preCount => preCount + 1);
        console.log(`렌더링 전의 count : ${count}`)
      }}>🏆</button>
      <h3>{count}</h3>
    </div>
  );
}

export default App