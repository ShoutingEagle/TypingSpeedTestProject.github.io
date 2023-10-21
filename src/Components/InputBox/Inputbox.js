import React, { useState,useEffect } from 'react'
import { ReactComponent as Reset} from '../../Assets/reset.svg'

function Inputbox() {
  const [seconds, setSeconds] = useState(15);
  var timer;
  useEffect(() => {
    if(seconds <= 0) return;
  timer = setInterval(() => {
    setSeconds(seconds-1);
    
  },1000)

  return () => clearInterval(timer);
  },[seconds])

  return (
    <div className='container'>
      <div className='timer'>
        <div className='time'>
            {seconds}
        </div>
        <div className='time-selector'>
            <span className='selector' onClick={() => setSeconds(15)}>15s</span>
            <span className='selector' onClick={() => setSeconds(30)}>30s</span>
            <span className='selector' onClick={() => setSeconds(60)}>60s</span>
        </div>
    </div>
    <div className='typing-text'>
        <p>A Discipline Discipline is an essential part of human beings. It is a unique thing which makes a man successful in every walk of the life. It teaches us how to lead a controlled life. It keeps not only a country but the whole world on the path of progress. It is such a key which makes everybodys life prosperous. Thus discipline plays a great role in every mans life. So we should follow discipline and be great in our lives. b The Role of Newspaper Today is the era of information and technology. Information is conveyed through different channels and newspaper. They play a great and grand role in the field of information. Different types of newspapers are printed by many presses in different parts of the country. They convey news to the public and make them aware of their necessities. Thus we can say the role of the newspaper is an equisite one. c Pollution Pollution is the biggest problems facing the modern man. All advancement becomes useless if man does not get the very basic necessity of life that is fresh air. Pollution is like curse to living being. It is spreading with break neck speed in the world. It is caused by big industries by releasing harmful gases in the air and dirty water and garbage in the river. High pitched songs also create sound pollution. Problem of pollution can became stable by planting trees. We should plant tree in our locality. d The season you like most There are main three seasons in a year. The winter is one of them. It is the season of flowers. In this season there is nothing but flowers everywhere. It is said that Rose is the king of flowers. It adds extra beauty to this season. It is also season of fresh vegetables. A number of poets have composed many poems in praise of this season. This is why I like this season the winter season more than the others.</p>
    </div>
      
      <button className='reset-btn'><Reset/>Reset</button>
      <div className='words-range'>
        <div className='words'>
          <span className='range'>10</span>
          <span className='range'>50</span>
          <span className='range'>80</span>
          <span className='range'>100</span>
        </div>
        Words
      </div>
    </div>
    
  )
}

export default Inputbox