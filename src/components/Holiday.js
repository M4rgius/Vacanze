import React,{useState, useEffect} from 'react'
import axios from 'axios';
import SingleHoliday from "./SingleHoliday"
const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

const Holiday = () => {
    const[data,setData]=useState([])
    const[selected,setSelected]=useState(0)
    //funzione per scegliere il prossimo valore di selected
    const nextHoliday=()=>{
        setSelected(prevValue=>{
            if(prevValue+1===data.data.length){
                return 0;
            
            }else{
                return prevValue+1
            }
        })
    }

    //funzione per diminuire
    const prevHoliday=()=>{
        setSelected(prevValue=>{
            if(prevValue -1 < 0){
                return data.data.length-1
            }else{
                return prevValue-1
            }
        })
    }

    //funzione fetch data API
    const getData=async()=>{
        try{
            const response=await axios.get(url)
            setData(response.data)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getData();
    })
    //Return condizionale per la response
    if(data.success){
        return (
          <>
           {
            //Ternary operator per controllare il numero di vancaze
            data.data.length >0 ? (<SingleHoliday{...data.data[selected]} next={nextHoliday} prev={prevHoliday}/>) :(<h4>No Vacanze</h4>)
           }
          </>
        )

    }else{
        return <h2>Loading...</h2>
    }
}

export default Holiday
