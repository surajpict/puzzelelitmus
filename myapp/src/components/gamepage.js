import React from 'react'



const Gamepage = () => {
    var val = 0;
    const counterfun = () => {
        val = val + 1
        console.log(val)
        window.alert("You Clicked!!!")
        if(val===4){
            window.alert("YOU WON")
            
        }
      }

  return (
    <div onClick={counterfun}>
        <img alt='game'  src={ require('../lp.png') } />
    </div>
  )
}

export default Gamepage
