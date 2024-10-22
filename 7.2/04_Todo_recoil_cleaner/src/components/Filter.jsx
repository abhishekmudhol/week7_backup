import {useSetRecoilState} from 'recoil'
import { useRef } from "react";
import filterAtom from "../store/atoms/filterAtom";

function Filter() {
    const filterRef = useRef(null)
    const setFilter = useSetRecoilState(filterAtom)

    function inputHandler() {
        let filter = filterRef.current.value
        console.log(filter);
        setFilter(filter)
    }

    return (
    <>
        <input ref={filterRef} onChange={inputHandler} type="text" placeholder="filter" />
    </>
    );
}

export default Filter;