import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { Skill } from './GridItem'; 

interface AnimatedTooltipPreviewProps {
  skills: Skill[];
}

const AnimatedTooltipPreview: React.FC<AnimatedTooltipPreviewProps> = ({ skills }) => {



  return (
    <div className="flex flex-row items-center justify-center flex-wrap mb-10 w-full">
      <AnimatedTooltip items={skills} />
    </div>
  )
}

export default AnimatedTooltipPreview
