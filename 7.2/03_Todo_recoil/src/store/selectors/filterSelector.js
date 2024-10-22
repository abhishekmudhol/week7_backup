import {selector} from 'recoil'
import todoAtom from '../atoms/todoAtom'
import filterAtom from '../atoms/filterAtom'

const filterSelector = selector({
    key : 'filterSelector',
    get : ({get}) => {
        const todos = get(todoAtom)
        const filterString = get(filterAtom)

        if (filterString == '') {
            return []
        }else{
            const filterArray = todos.filter((todo)=>{
                let stringExist = todo.title.includes(filterString) || todo.description.includes(filterString)
                if (stringExist) {
                    return true
                }
            })
            return filterArray
        }
    }
})

export default filterSelector