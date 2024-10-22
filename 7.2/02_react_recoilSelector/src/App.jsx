import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import countState from './store/atoms/count';
import countEvenSelector from './store/selectors/countSelector';

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
  const evenCount = useRecoilValue(countEvenSelector)
  const count = useRecoilValue(countState)
  
  console.log('CountRenderer');

  return(
    <>
      <b>{count}</b><br/>
      <b>{evenCount == 0 ? "IT IS EVEN NUMBER" : "NOT EVEN"}</b>
    </>
  )
}

function Buttons(){
  //const [count , setCount] = useRecoilState(countState)
  const setCount = useSetRecoilState(countState)
  
  console.log('Buttons');

  return(
    <div>
      <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
      <button onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
      {/* <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button> */}
    </div>
  )
}

export default App
