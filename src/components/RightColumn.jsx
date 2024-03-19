import React from 'react'
import SalesItem from './SalesItem'
import WebSalesAnalytics from './WebSalesAnalytics'
import ScoreList from './ScoreList'

const RightColumn = () => {
  return (
    <div className='w-full p-2'>
        <SalesItem />
        <WebSalesAnalytics />
        <ScoreList />
    </div>
  )
}

export default RightColumn