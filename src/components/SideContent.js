import React from 'react'
import Category_names from './Category_names'
import Best_sellers from './Best_sellers'

function SideContent() {
  return (
    <>
    <div className="sidebar has-scrollbar" data-mobile-menu>
              <Category_names/>
              <Best_sellers/>
    </div>
    </>
  )
}

export default SideContent