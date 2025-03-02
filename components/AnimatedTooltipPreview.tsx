import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { Skill } from './GridItem'; 

interface AnimatedTooltipPreviewProps {
  skills: Skill[];
}

const AnimatedTooltipPreview: React.FC<AnimatedTooltipPreviewProps> = ({ skills }) => {



  return (
    <div className="justify-center flex ">
      <AnimatedTooltip items={skills} />
    </div>
  )
}

export default AnimatedTooltipPreview
