import React, { useState } from 'react'
import { useContext } from 'react'
import countContext from './context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <countContext.Provider value={{count ,setCount }}>
      <Count />
    </countContext.Provider>
  )
}

const Count = React.memo(function Count(){
console.log('Count');

  return(
    <>
      <CountRenderer/>
      <Buttons  />
    </>
  )
})

function CountRenderer(){
  let {count} = useContext(countContext)
  //console.log('CountRenderer');
  return(
      <b>{count}</b>
  )
}

function Buttons(){
  let {count} = useContext(countContext)
  let {setCount} = useContext(countContext)

  return(
    <div>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default App
