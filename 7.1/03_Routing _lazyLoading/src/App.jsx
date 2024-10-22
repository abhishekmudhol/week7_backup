import React, { Suspense } from 'react'
import Landing from './components/Landing'
//import Dashboard from './components/Dashboard'
const Dashboard = React.lazy(()=>{
  return import('./components/Dashboard')
})
import {BrowserRouter , Routes , Route, useNavigate} from 'react-router-dom'

function App() {
  return (
    <Suspense fallback={<div>loading....</div>}>
      <BrowserRouter>
          <Topbar/>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

const Topbar = React.memo(function Topbar(){
  const navigate = useNavigate()

  console.log('Topbar');
  
  const topbarStyle = {
    width: '100%',
    height: '60px',
    backgroundColor:'orange',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: "0 20px",
    color: "white"
    }

  function landingHandler(){
    navigate('/')
  }

  function dashboardHandler(){
    navigate('/dashboard')
  }

  return(
    <div style={topbarStyle}>
    Top Bar
    <button onClick={landingHandler}>Landing Page</button>
    <button onClick={dashboardHandler}>Dashboard Page</button>
  </div>
  )
})
export default App
