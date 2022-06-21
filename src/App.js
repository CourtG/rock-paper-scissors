import './App.css';
import firebase from './firebase.js';
import { getDatabase, ref, onValue, update, get } from 'firebase/database';
import { useEffect, useState } from 'react';

import Header from './Header';
import Footer from './Footer';

const App = () => {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const [userValue, setUserValue] = useState(0)
  const [computerValue, setComputerValue] = useState(0)
  // const [drawValue, setDrawValue] = useState(0)


  const choices = ['rock', 'paper', 'scissors']

  useEffect( () => {
    const database = getDatabase(firebase)
    const dbRef = ref(database)
    onValue(dbRef, (response) => {
      const data = response.val()
      const {userScore, computerScore} = data
      setUserValue(userScore)
      // setDrawValue(drawScore)
      setComputerValue(computerScore)
    })
  },[])

  const increaseUserScore = () => {
    const database = getDatabase(firebase)
    const dbRef = ref(database)
    get(dbRef).then((data) => { 
      const oldData = data.val()
      const newData = {
        userScore: oldData.userScore +1,
        drawScore: oldData.drawScore,
        computerScore: oldData.computerScore
      }
      update(dbRef, newData)
    }).catch((error) => {
      console.log(error);
    })
  
  }

    const increaseComputerScore = () => {
    const database = getDatabase(firebase)
    const dbRef = ref(database)
    get(dbRef).then((data) => { 
      const oldData = data.val()
      const newData = {
        computerScore: oldData.computerScore +1,
        drawScore: oldData.drawScore,
        userScore: oldData.userScore
      }
      update(dbRef, newData)
    }).catch((error) => {
      console.log(error);
    })
  
  }  
  
    const increaseDrawScore = () => {
    const database = getDatabase(firebase)
    const dbRef = ref(database)
    get(dbRef).then((data) => { 
      const oldData = data.val()
      const newData = {
        drawScore: oldData.drawScore +1,
        userScore: oldData.userScore,
        computerScore: oldData.computerScore
      }
      update(dbRef, newData)
    }).catch((error) => {
      console.log(error);
    })
  
  }

  // function handleHover() {
  //   setUserChoice('scissors');
  // }
  


  const handleClick = (value) =>  {
    setUserChoice(value)
    generateComputerChoice()
  } 

  useEffect(() => {
  
    switch(userChoice + computerChoice) {
      default:
        setResult('Choose your weapon')
        break

      case 'scissorspaper':
        setResult('YOU WIN!')
        increaseUserScore()
        break

      case 'rockscissors':
        setResult('YOU WIN!')
        increaseUserScore()
        break

      case 'paperrock':
        setResult('YOU WIN!')
        increaseUserScore()
        break

      case 'paperscissors':
        setResult('YOU LOSE!')
        increaseComputerScore()
        break

      case 'scissorsrock':
        setResult('YOU LOSE!')
        increaseComputerScore()
        break

      case 'rockpaper':
        setResult('YOU LOSE!')
        increaseComputerScore()
        break

      case 'rockrock':
        setResult('IT\'S A DRAW!')
        increaseDrawScore()
        break

      case 'paperpaper':
        setResult('IT\'S A DRAW!')
        increaseDrawScore()
        break

      case 'scissorsscissors':
        setResult('IT\'S A DRAW!')
        increaseDrawScore()
        break
    }
  
  }, [computerChoice, userChoice])

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }


  return (
  <>  
    <div className="wrapper">

        <Header />
        
          <div className="text">
            <h2>your choice: {userChoice}</h2>
            <h2>computer choice: {computerChoice}</h2>
          </div>

          <div className="result">
            {/* <div className="userChoice">
              <img src= {
                userChoice !== ''
                  ? `./assets/${userChoice}.png`
                  : 
                } alt="image of choice (rock, paper, or scissors)" />
            </div> */}


            <h2>{result}</h2>

            {/* <div className="userChoice">
              <img src= {
                userChoice !== null
                  ? `./assets/${userChoice}.png`
                  : 
                } alt="image of choice (rock, paper, or scissors)" />
            </div> */}

          </div>
          
          <div className="buttons">
            {choices.map((choice, index) => 
              <button key={index} onClick={() => handleClick(choice)}>{choice}</button>)}
          </div>

          <p>SCORES</p>
          
          <div className="scores">
            <p>Humans:{userValue} </p>
            <p>Machine:{computerValue}</p>
          </div>

    </div>

    <Footer />  
  </>  

  )
}

export default App;
