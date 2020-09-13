import React from 'react';

interface PathProps {
  path:String;
}

// Should take current string, remove it (like typewrite)
// Then it should take the new string and type it out
// It should use clearTimeout each time, to prevent quick switches

const PathType: React.FC<PathProps> = ({path}) => {

  return(<>
    {path}
  </>)
}

export default PathType;