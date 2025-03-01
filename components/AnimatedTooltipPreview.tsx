import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'

const AnimatedTooltipPreview = ({skills=[]}) => {



  return (
    <div className="flex flex-row items-center justify-center flex-wrap mb-10 w-full">
      <AnimatedTooltip items={skills} />
    </div>
  )
}

export default AnimatedTooltipPreview
