import React, {useState, useRef, useEffect} from 'react';

function Timer(props) {
    const {correctWords,startCounting} = props;
    const [timeElapsed,setTimeElaspsed] = useState(0);
    
  
    useEffect(() => {
      let id
      if(props.startCounting){
       id = setInterval(() => {
          setTimeElaspsed(oldTime => oldTime+1)
        },1000);
      }
      return () => {
        clearInterval(id);
      }
  
    },[startCounting])
  
    const minutes = timeElapsed/60;
  
    return (
            <div className='timer'>
            <p>Time : {timeElapsed}</p>
            <p>WPM : {((correctWords/minutes) || 0).toFixed(0)}</p>
            </div>
            )
}

export default Timer