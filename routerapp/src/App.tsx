import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// 만든 컴포넌트들을 임포트
import Home from './components/Home';
import Contact from './components/Contact';
import PageNotFound from './components/pageNotFound';
import './App.css'
import ContactSeoul from './components/ContactSeoul';
import ContactLondon from './components/ContactLondon';

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>  {' | '}
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />}>
            <Route path='seoul' element={<ContactSeoul/>}/>
            <Route path='london' element={<ContactLondon/>}/> 
          </Route>
          // 새 페이지를 찾을 수 없음 경로 추가
          <Route path='*' element={<PageNotFound />}/>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
