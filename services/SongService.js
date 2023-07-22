import axios from "axios";
import { useEffect } from "react";

export function getAll(url){
    const [datas, setDatas] = useEffect([]);

    useEffect(()=>{
        axios.get(url).then((response)=>{
            console.log(response)
            setDatas(response.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[]);

    return datas;
}