import { selector } from 'recoil'
import countState from '../atoms/count'

const countEvenSelector = selector({
    key : 'countEvenSelector',
    get : ({get})=>{
        const count = get(countState)
        return count % 2
    }
})

export default countEvenSelector