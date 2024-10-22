import './App.css'
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {
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

  return (
    <div>
      <div style={topbarStyle}>
        Top Bar
      </div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
