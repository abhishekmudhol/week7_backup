import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';
import { Suspense } from 'react';

function App() {
  return <RecoilRoot>
  <Suspense fallback={<div>Loading....</div>}>
    <Todo id={1}/>
    <Todo id={2} />
    </Suspense>
  </RecoilRoot>
}

function Todo({id}) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));
  
  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App
