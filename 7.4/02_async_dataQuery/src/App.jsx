import {RecoilRoot} from 'recoil'
import LinkdinBar from './components/LinkdinBar'
import './App.css'
import { Suspense } from 'react'

function App() {

  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <LinkdinBar/>
      </Suspense>
    </RecoilRoot>
  )
}

export default App
