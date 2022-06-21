// import firebase from './firebase';
// import 'firebase/database';

import './App.css';

import { useEffect, useState } from 'react';

import Header from './Header';
import Footer from './Footer';

const App = () => {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)

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

  // const userTable = firebase.database().ref('users');
  // userTable.push(newUser);
  
  return (
  <body>  
    <div class="wrapper">

        <Header />
        
          <div class="text">
            <h2>your choice: {userChoice}</h2>
            <h2>computer choice: {computerChoice}</h2>
          </div>

          <div class="images">
            <a href="/Users/admin/Sites/Personal/Juno/projects/rock-paper-scissors-game/assets/vs.svg"></a>
          </div>
          
          <div class="buttons">
            {choices.map((choice, index) => 
              <button key={index} onClick={() => handleClick(choice)}>{choice}</button>)}
          </div>
        
        <div class="result">
          <h2>{result}</h2>
        </div>

    </div>

    <Footer />  
  </body>  
  )
}

export default App;
