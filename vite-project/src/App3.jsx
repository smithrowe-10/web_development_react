// firstName과 lastName라는 상태를 만들기 위해서 코드를 한번 작성해보겠습니다. .md 파일 참조

// import React, {useState} from 'react';

// const[fristName, setFristName] = useState('Junho');

// const[lastName, setLastName] = useState('Bong');


// setFristName=('Captain');

// setLastName=('America');

/**
 * 혹은 여러 개의 const를 작성해서 속성마다 정의하는 것이 아니라
 * 객체의 형태로 정의할 수도 있습니다.
 */

// const [name, setName] = useState({
//   fristName: 'Junho',
//   lastName: 'Bong',
// });

// setName을 사용하게 될 경우의 차이점이 있습니다.
// setName({fristName:'Captain', lastName:'America'});

// 즉 name, setName을 통해서 userState의 매개변수가 객체형태로 고정되어있으므로, setName의 argument 또한 객체가 들어가야합니다.
// 이상을 이유로 lastName만 수정하고 싶어도 전부 다 바꿔줘야 하거나 초기값을 동일하게 집어넣어줘야 하는 귀찮은 일이 있습니다.

// 객체의 부분 업데이트를 위한 방법 :

// spread : ES2018 객체 스프레드 구문을 이용하여 name 상태 객체를 복제하고, firstName의 값을 '이등병'으로 업데이트 한다면 

// setName({... name, fristName: '이등병'})

// import { useState } from "react";
// function App3() {
//   const[name, setName] = useState({
//     firstName: 'West',
//     lastName: 'Kanye'
//   });
//   return <div>안녕 {name.lastName} {name.firstName}</div>;
// }

// export default App3
