import { useState } from 'react';
import './App.css'

function App10() {

  const [drink, setDrink] = useState(0);

  const drinkWater = () => {
    setDrink(drink + 1)
    console.log(`버튼 클릭 횟수 : ${drink + 1}번`);
  }


  return (
    <>
      <h1>
        오늘은 물을 <strong> {drink} </strong> 잔을 마셨습니다!
      </h1>
      <br /><br /><br />
      <button onClick={drinkWater}>🧊</button>
    </>
  )
}


export default App10;