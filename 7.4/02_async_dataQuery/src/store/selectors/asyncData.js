import { selectorFamily } from 'recoil'
import axios from 'axios'

const asyncDataQuerySelector = selectorFamily({
    key : 'asyncDataQuerySelector',
    get : (queryUrl) => async ({get})=>{
        await new Promise((r)=> setTimeout(r,4000))
        const response = await axios.get(queryUrl)
        return response.data
    }
})

export default asyncDataQuerySelector