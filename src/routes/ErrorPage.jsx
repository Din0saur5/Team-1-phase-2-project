import React from 'react'
import JSConfetti from 'js-confetti'

const ErrorPage = () => {
  const jsConfetti = new JSConfetti()

  function fireConfetti() {
    jsConfetti.addConfetti({
    confettiRadius: 1,
    confettiNumber: 200,
    emojis: ['💩'],
    emojiSize: 30,
    })


    }
   
      fireConfetti();
   
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems: 'center'}} >
      <h1>You broke it</h1>
      <img style={{width:500}} src='/images/backside.jpg' alt='you mucked up'/>
    </div>
  )
}

export default ErrorPage
