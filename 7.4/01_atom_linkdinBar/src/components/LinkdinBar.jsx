import { useRecoilState, useRecoilValue } from 'recoil'
import axios, {  } from 'axios'
import {networkAtom , jobAtom , messagingAtom , notificationAtom} from '../store/atoms/linkdinBarAtoms'
import allNotificationCountSelector from '../store/selectors/linkdinBarSelector'
import { useEffect } from 'react'

function LinkdinBar(){
    const [networkCount , setNetworkCount] = useRecoilState(networkAtom)
    const [jobCount , setJobCount] = useRecoilState(jobAtom)
    const [messagingCount , setMessagingCount] = useRecoilState(messagingAtom)
    const [notificationCount , setNotificationCount] = useRecoilState(notificationAtom)

    const allNotification = useRecoilValue(allNotificationCountSelector)

    async function dataFetch(){
        const response = await axios.get('https://sum-server.100xdevs.com/notifications')
        let fetchedData = response.data
    
        setNetworkCount(fetchedData.network)
        setJobCount(fetchedData.jobs)
        setMessagingCount(fetchedData.messaging)
        setNotificationCount(fetchedData.notifications)
    }

    useEffect(()=>{
        let intervalId = setInterval(()=>{
            dataFetch()
        },4000)
        return ()=>{
            clearInterval(intervalId)
        }
    },[])

    return(
        <div style={{border: '2px solid orange'}}>
            <button>Home</button>
            <button >Network <b>{networkCount>99?'99+':networkCount}</b></button>
            <button >Job <b>{jobCount}</b></button>
            <button >Messaging <b>{messagingCount>10?'10+':messagingCount}</b></button>
            <button >Notifications <b>{notificationCount}</b></button>
            <button>Profile<b>{allNotification}</b></button>
        </div>
    )
}

export default LinkdinBar