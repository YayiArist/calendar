import React, {useState} from 'react'
import CreateEventButton from './CreateEventButton'
import SmallCalendar from './SmallCalendar'
import Month from './Month'
import { getMonth } from '../util'


export default function Sidebar() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  return (
    <aside className='border p-5 w-64'>
      <CreateEventButton/>
      <SmallCalendar/>
    </aside>
  )
}
