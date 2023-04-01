import { useState,useEffect } from "react";
 const useWindowSize = () =>{
    const [windowSize,setwindowSize] = useState({
        width:undefined,
        height:undefined
    })
    useEffect(()=>{
            const handleResize = () =>{
                setwindowSize({
                    width:window.innerWidth,
                    height:window.innerHeight
                })
            }
            handleResize()
            window.addEventListener('resize',handleResize);
            const cleanUp =()=>{
                console.log('runs if a useEffect Dep changes');
                window.removeEventListener('resize',handleResize)
            }
            return cleanUp;
    },[])
    return windowSize;
 }
 export default useWindowSize;