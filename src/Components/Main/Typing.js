import React, {useState, useRef, useEffect} from 'react';
import { ReactComponent as Reset} from '../../Assets/reset.svg'
import Timer from '../Timer/Timer';
import Word from './Word';



const getCloud = () =>  `India is a land of various cultures and a rich heritage. It is the seventh-largest country by area and the second-most populous country globally. The peacock is India’s national bird, and the Bengal tiger is the country’s national animal. The national song is named Vande Matram (written by Bankimchandra Chatterji). The Indian national song was first performed at the Indian National Congress in 1896. ‘Jana Gana Mana,’ India’s national anthem, is sung in 52 seconds. The national flag of India is named Tiranga, which is made up of three colours: saffron, white, and green, with the Ashoka Chakra in navy blue in the centre.`.split (" ").sort(() => Math.random() > 0.5 ? 1 : -1);



function Typing() {
  

  const [userInput,setUserInput] = useState('');
  const [activeWordIndex,setActiveWordIndex] = useState(0);
  const [correctWordArray,setCorrectWordArray] = useState([]);
  const [startCounting,setStartCounting] = useState(false);
  const cloud = useRef(getCloud());
  const inputRef = useRef();
  

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
      
      setCorrectWordArray(data => {
        const word = value.trim()
        const newResult = [...data]
        newResult[activeWordIndex]= word === cloud.current[activeWordIndex]
        return newResult
      })
    }
    else{
      setUserInput(value);
    }
  }


  function clickFocus() {
    inputRef.current.focus();
  }


  return (
    <div className='container'>
        <div className='main-container'><Timer 
        startCounting={startCounting}
        correctWords = {correctWordArray.filter(Boolean).length}
        />
        <p className='display'>{cloud.current.map((word,index) => {
          return (
                <Word
                text = {word}
                active={index === activeWordIndex} 
                correct = {correctWordArray[index]}
                />
                )                 
        })}
        </p>
        </div>


        <div>
        <input
        ref={inputRef}
        type='text'
        value={userInput}
        onChange={(e) => processInput(e.target.value)}
        />
        <button onClick={clickFocus} autoFocus className='reset-btn'>Start</button>
        </div>
    </div>
  );
}

export default Typing