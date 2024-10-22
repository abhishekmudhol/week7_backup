import {useRecoilValue , useRecoilState} from 'recoil'
import todoAtomFamily from '../store/atoms/todoAtom'

function Todos(){
    let ids = [1,2,3,4,5]
    return(
        <>
            {
                ids.map((id)=> <Todo key={id} id={id}/>)
            }
        </>
    )
}

function Todo({id}){
    const [todo , setTodo] = useRecoilState(todoAtomFamily(id))

    function buttonHandler(){
        setTodo(prev => {
            return {
                ...prev,
                title : 'aaaa',
                description : 'aaaaa'
            }
        })
    }

    return(
        <div>
            <b>{todo.title}</b><br/>
            <b>{todo.description}</b><br/>
            <button onClick={buttonHandler}>todo update</button>
        </div>
    )
}

export default Todos