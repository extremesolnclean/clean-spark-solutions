
import React from 'react';
import { useHeroState } from '../hero/HeroState';
import { useHeroHandlers } from '../hero/HeroHandlers';
import HeroContent from '../hero/HeroContent';
import HeroDialogs from '../hero/HeroDialogs';

const Hero = () => {
  const { state, actions, toast } = useHeroState();
  const handlers = useHeroHandlers({ state, actions, toast });

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-gray-light to-white">
      <div className="container mx-auto px-4">
        <HeroContent 
          state={state} 
          actions={actions} 
          handleSearch={handlers.handleSearch} 
        />
      </div>

      <HeroDialogs
        state={state}
        actions={actions}
        handlers={handlers}
      />
    </div>
  );
};

export default Hero;
