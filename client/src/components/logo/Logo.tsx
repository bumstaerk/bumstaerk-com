import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import { PathType } from 'components/path-type';

const Logo = () => {

  let location = useLocation();
  const [path,setPath] = useState("");

  useEffect(() => {
    console.log("changing pathname");
    setPath(location.pathname.replace("/",""));
  },[path,location]);

  return(<div>
    <h1>bumstaerk @ ~ /<PathType path={path} /></h1>
  </div>) 
  
}

export default Logo;