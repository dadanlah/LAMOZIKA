import { useState, useEffect } from 'react';
import axios from 'axios';
import { log } from 'react-native-reanimated';

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [datas, setDatas] = useState([]);

    const url = `http://127.0.0.1:8080/API/Songs/${endpoint}`

    // const options = {
    //     method: 'GET',
    //     url: `http://127.0.0.1:8080/API/Songs/${endpoint}`,
    //     Headers:{
    //         'Accept' : '*/*',
    //         'Accept-Encoding' : 'gzip, deflate, br' ,
    //         'Connection' : 'keep-alive',
    //         'User-Agent' : 'jajaja'
    //     }
        
    // };

    // const fetchData = async () => {
    //     setIsLoading(true);

    //     try {
    //         const response = await axios.request(options);
    //         console.log("RESSSPONSE MANA : "+response);
    //         setData(response.data.data);
    //         setIsLoading(false);
    //     } catch (error) {
    //         setError(error);
    //         alert('oups, there is an error, Could not connect to the server')
    //     } finally{
    //         setIsLoading(false);
    //     }
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])

    // const refetch = () =>{
    //     setIsLoading(true);
    //     fetchData();
    // }

    useEffect(()=>{
        axios.get(url).then((response)=>{
            console.log(response)
            setDatas(response.data)
            setIsLoading(false);
        }).catch((err)=>{
            setError(err);
            console.log(err);
        })
    },[]);


    
    return {datas, isLoading, error}; 

}
export default useFetch;