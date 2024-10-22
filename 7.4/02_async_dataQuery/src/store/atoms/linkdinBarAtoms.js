import { atom } from 'recoil'

const networkAtom = atom({
    key : 'networkAtom',
    default : 0
})

const jobAtom = atom({
    key : 'jobAtom',
    default : 0
})

const messagingAtom = atom({
    key : 'messagingAtom',
    default : 0
})

const notificationAtom = atom({
    key : 'notificationAtom',
    default : 0
})

export  {networkAtom , jobAtom , messagingAtom , notificationAtom}