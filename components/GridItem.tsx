import React from 'react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import AnimatedTooltipPreview from './AnimatedTooltipPreview';

export interface Skill {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  items?: Skill[];
}

const GridItem: React.FC<GridItemProps> = ({ area, icon, title, description, items }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          borderWidth={3}
          spread={70}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 shadow-[0px_0px_27px_0px_#212049] md:p-6 bg-transparent">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-emerald-300 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
                md:text-base/[1.375rem] text-neutral-400"
              >
                {description}
              </h2>
              {items && <AnimatedTooltipPreview skills={items}></AnimatedTooltipPreview>}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default GridItem;
