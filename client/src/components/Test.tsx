import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
  
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios.get('/api/').then((res) => {
      const {message} = res.data;
      console.log(message);
      setMsg(message); 
    })
    
  },[msg]);


  return (<>
    {msg}
  </>);
}

