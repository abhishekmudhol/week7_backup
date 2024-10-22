
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilStateLoadable } from 'recoil';
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
  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  console.log(todo);
  
  if(todo.state =='loading'){
    return(
      <div>
        Loading....
      </div>
    )
  }
  return (
    <>
      {todo.contents.title}
      {todo.contents.description}
      <br />
    </>
  )
}

export default App
