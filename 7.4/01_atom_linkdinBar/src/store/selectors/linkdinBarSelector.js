import { selector } from 'recoil'
import { networkAtom , jobAtom , messagingAtom , notificationAtom } from '../atoms/linkdinBarAtoms'

const allNotificationCountSelector = selector({
    key : 'allNotificationCountSelector',
    get : ({get})=>{
        const networkCount = get(networkAtom)
        const jobCount = get(jobAtom)
        const messagingCount = get(messagingAtom)
        const notificationCount = get(notificationAtom)

        const allNotification = networkCount + jobCount + messagingCount + notificationCount
        return allNotification
    }
})

export default allNotificationCountSelector