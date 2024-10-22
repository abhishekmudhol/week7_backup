import { RecoilRoot , useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import Input from './components/Input'
import './App.css'
import Filter from './components/Filter'
import todoAtom from './store/atoms/todoAtom'
import filterSelector from './store/selectors/filterSelector'
import { useEffect } from 'react'

function App() {
  
  return (
    <RecoilRoot>
      <Input/>
      <Filter/>
      <Todos/>
      {/* <FilterTodo/> */}
    </RecoilRoot>
  )
}

// function FilterTodo(){
//   const filterTodo = useRecoilValue(filterSelector)
//   return(
//   <>
//     {
//       filterTodo.map((todo)=><Todo key={todo.id} description={todo.description} title={todo.title}/>)
//     }
//   </>
//   )
// }

function Todos (){
  const filterTodo = useRecoilValue(filterSelector)

  return(
    <>
      {
        filterTodo.map((todo)=><Todo key={todo.id} description={todo.description} title={todo.title}/>)
      }
    </>
  )
}

function Todo ({title , description}){
  return(
    <div>
      <b>{title}</b><br/>
      <b>{description}</b><br/>
    </div>
  )
}


export default App
