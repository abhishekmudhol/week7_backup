import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import countState from './store/atoms/count';

function App() {
  console.log('App');

  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  )
}

function Count(){
console.log('Count');

  return(
    <>
      <CountRenderer/>
      <Buttons  />
    </>
  )
}

function CountRenderer(){
  const count = useRecoilValue(countState)
  
  return(
      <b>{count}</b>
  )
}

function Buttons(){
  const [count , setCount] = useRecoilState(countState)
  //const setCount = useSetRecoilState(countState)

  return(
    <div>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default App
