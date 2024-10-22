import {atomFamily} from 'recoil'

const todoAtomFamily = atomFamily({
    key : 'todoAtom',
    default : (id) => ({
        id : id ,
        title : 'workout',
        description : 'do workout'
    })
})

// const todoAtom_1 = atom({
//     key : 'todoAtom',
//     default : {
//         id : 1 ,
//         title : 'workout',
//         description : 'do workout'
//     }
// })
export default todoAtomFamily