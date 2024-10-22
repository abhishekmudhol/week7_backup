import { useRef } from 'react'
import {useSetRecoilState } from 'recoil'
import todoAtom from '../store/atoms/todoAtom'

let Id = 1
function Input(){

    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const setTodo = useSetRecoilState(todoAtom)

    function buttonHandler(){
        let title = titleRef.current.value;
        let description = descriptionRef.current.value
        setTodo(prevTodo => [
            ...prevTodo,
            {
                id : Id++,
                title,
                description
            }
        ])
        titleRef.current.value = ''
        descriptionRef.current.value = ''
    }

    return (
        <div>
        <input ref={titleRef} type='text' placeholder='Title'/><br/>
        <input ref={descriptionRef} type='text' placeholder='Description'/><br/>
        <button onClick={buttonHandler}>Add Todo</button>
        </div>
    )
}

export default Input