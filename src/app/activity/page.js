"use client"

import NavBar from '../../components/NavBar'
import Meter from '../../components/Meter'
import Feed from '../../components/Feed'
import items from '../../items.json'
import { useState } from 'react'

export default function Home() {
  let [points, setPoints] = useState(0)
  let initialFeed = new Array(items.length).fill(-1)


  let [feedSelection,setFeedSelection] = useState(initialFeed)

  let setFeed = (feedIndex,choiceIndex) => {
    let newFeedSelection = [...feedSelection]
    newFeedSelection[feedIndex] = choiceIndex
    console.log(newFeedSelection)
    setFeedSelection(newFeedSelection)
  }

  let calcPoints = (feedSelection) => {
    let total = 0
    feedSelection.forEach((val, i ) => {
      if(val !== -1){
        total += 5
      }
    })
    console.log(total)
    return total
  }
 

  return (
    <div>
      <Meter points={calcPoints(feedSelection)}/>
      <div className='mt-20'>
        Activity
      </div>
      
      <NavBar />
    </div>
  )
}
