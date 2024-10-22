import {atom} from 'recoil'

const todoAtom = atom({
    key : 'todoAtom',
    default : [{
        id : 0,
        title : 'Go to the gym',
        description : 'Workout for 1 hour'
    }]
})

export default todoAtom