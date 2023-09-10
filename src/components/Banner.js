import React, {
    useState,
    useEffect
} from 'react';

import "../assets/banner.css";
import { getMessages } from '../hooks/getMessages'; 

export default function Banner(){
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        let response = getMessages();
        response.then((success)=>{
            setMessages(success);
        })
    },[])
   return <>
   <footer  >
            <div id="bg">&nbsp;</div>
            <div className="newsBanner">
                {messages&&messages.map((message, index)=>{
                    return (<div key={index}>{message} </div>)
                })}
            </div>

    </footer>
   
   </>
}