import { atom, selector } from "recoil";
import axios from 'axios'

export const notificationsAtom = atom({
    key: 'networkAtom',
    default: selector({
        key : 'networkSelector',
        get : async ({})=>{
            await new Promise((r)=> setTimeout(r,4000))
            const response = await axios.get("https://sum-server.100xdevs.com/notifications")
            return response.data
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notificationsAtom);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})