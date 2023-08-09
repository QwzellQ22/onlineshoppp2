import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
function App() {
  return (
    <>
   
   <BrowserRouter>
   <Routes>
    {/* <Route path="/login" element={<Login />}/> */}
    <Route index element={<Login />}/>
    <Route path="/dashboard" element={<Dashboard />}/>
    <Route path="/dashboard" element={<Dashboard />}/>
    <Route path="/dashboard" element={<Dashboard />}/>
    <Route path="/dashboard" element={<Dashboard />}/>
   
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
