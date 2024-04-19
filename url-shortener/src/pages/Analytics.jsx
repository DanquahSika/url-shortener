import React from 'react'
import Barchart from '../components/dashboard/analytics/Barchart'
import Charts from '../components/dashboard/analytics/Charts'
import Sidebar from '../components/sidebar/Sidebar'
import SidebarMain from '../components/sidebar/SidebarMain'

const Analytics = () => {
  return (
    <div className='flex  space-around' >
      <SidebarMain/>
      <div className='p-20  h-200px w-1/2'>
        <Barchart />
        <Charts/>
        </div>
        
    </div>
  )
}

export default Analytics