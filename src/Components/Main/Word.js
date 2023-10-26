import React, {useState, useRef, useEffect} from 'react';

function Word(props) {
    const {text,active,correct} = props;
    const rerender = useRef(0);
  
    useEffect(() => {
      rerender.current += 1;
    })
    console.log("text =>",text);
    console.log("active =>",active);
    console.log("correct =>",correct);
  
    if(correct === true){
      console.log("first if => line 16");
      return <span className="correct">{text}({rerender.current}) </span>
    }
  
    if(correct === false){
      console.log("second if => line 21");
      return <span className="incorrect">{text}({rerender.current}) </span>
    }
  
    if(active){
      console.log("third if => line 26");
      return <span className='active'>{text}({rerender.current}) </span>
    }
  
  
    return (
      <span>{text}({rerender.current}) </span>
    )
}

export default Word