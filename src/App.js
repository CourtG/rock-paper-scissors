import { useEffect } from 'react';
import {useState} from 'react';

import './App.css';

const App = () => {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [ result, setResult] = useState(null)
  const choices = ['rock', 'paper', 'scissors']

  // const currentUserScore

  const handleClick = (value) =>  {
    setUserChoice(value)
    generateComputerChoice()
  } 

  useEffect(() => {
  {
    switch(userChoice + computerChoice) {
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
        setResult('YOU WIN!')
        // currentUserScore ++
        break
      case 'paperscissors':
      case 'scissorsrock':
      case 'rockpaper':
        setResult('YOU LOSE!')
        //currentComputerScore ++
        break
      case 'rockrock':
      case 'paperpaper':
      case 'scissorsscissors':
        setResult('IT\'S A DRAW!')
        break
    }
  }
  }, [computerChoice, userChoice])

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  const checkResult = () => {

  }

  return (
    <div>
        <h1>user choice is: {userChoice}</h1>
        <h1>computer choice is: {computerChoice}</h1>
        
        {choices.map((choice, index) => 
          <button key={index} onClick={() => handleClick(choice)}>{choice}</button>)}

          <h1>{result}</h1>

    </div>
  )
}

export default App;
