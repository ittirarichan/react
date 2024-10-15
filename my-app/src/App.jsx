import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './Component/Layout'
import Home from './Component/Home'
import Contact from './Component/Contact'

function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route Path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='contact' element={<Contact/>}/>

      </Route>
    </Routes>
    </BrowserRouter>


    </>
  )
}

export default App