import React from 'react'

export default function PrevOrNextButtons(props) {
  

    function handlePrevMonth(){
     console.log(props)
        props.setMonthIndex(props.monthIndex - 1)
        console.log(props.monthIndex)
      }
      function handleNextMonth(){
        
        props.setMonthIndex(props.monthIndex + 1)
        console.log(props.monthIndex)
      }
  return (
    <div>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2" >
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2" >
          chevron_right
        </span>
      </button>
    </div>
  )
}
