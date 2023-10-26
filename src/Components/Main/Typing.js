import React, {useState, useRef, useEffect} from 'react';
import { ReactComponent as Reset} from '../../Assets/reset.svg'
import Timer from '../Timer/Timer';
import Word from './Word';



const getCloud = () =>  `A Discipline Discipline is an essential part of human beings.`.split (" ").sort(() => Math.random() > 0.5 ? 1 : -1);



function Typing() {
  

  const [userInput,setUserInput] = useState('');
  const [activeWordIndex,setActiveWordIndex] = useState(0);
  const [correctWordArray,setCorrectWordArray] = useState([]);
  const [startCounting,setStartCounting] = useState(false);
  const cloud = useRef(getCloud());

  const processInput = (value) => {

    if(activeWordIndex === cloud.current.length){
      return;
    }


    if(!startCounting){
      setStartCounting(true);
    }
    
    if(value.endsWith(' ')){

      
      if(activeWordIndex === cloud.current.length-1){
        setStartCounting(false);
        setUserInput('Completed');
      }
      else{
        setUserInput('');
      }

      setActiveWordIndex(index => index+1);
      console.log("activeWordIndex =>line 59 ",activeWordIndex)
      
      console.log("userInput =>line 61 ",userInput)
      
      setCorrectWordArray(data => {
        const word = value.trim()
        console.log("word => line 65 ", word)
        const newResult = [...data]
        console.log("newResult => line 67 ", newResult);
        newResult[activeWordIndex]= word === cloud.current[activeWordIndex]
        return newResult
      })
    }
    else{
      console.log("userInput =>",userInput);
      setUserInput(value);
    }
  }


  return (
    <div className="App">
        <h1>Typing Test</h1>
        <Timer 
        startCounting={startCounting}
        correctWords = {correctWordArray.filter(Boolean).length}
        />
        <p className='display'>{cloud.current.map((word,index) => {
          console.log("word =>",word);
          console.log("index =>",index);
          console.log("index === activeWordIndex => ",index === activeWordIndex);
          console.log("correctWordArray[index] => ",correctWordArray[index]);
          return <Word
                  text = {word}
                  active={index === activeWordIndex} 
                  correct = {correctWordArray[index]}
                  />
        })}</p>
        
        <input
        type='text'
        value={userInput}
        onChange={(e) => processInput(e.target.value)}
        />
    </div>
  );
}

export default Typing