import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import App2 from './App2.tsx'
// import './index.css' --> 얘 사용 안하고, vite 에서 미리 정의된 스타일을 사용 안할것

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
)
