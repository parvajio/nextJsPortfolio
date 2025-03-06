import React from 'react'
import { Profile } from './Profile'
import Mail from './Mail'

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-white text-4xl md:text-5xl text-center w-full lg:max-w-[45vw]">
          Ready to take <span className="text-[#CBACF9]">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <Profile></Profile>
        <Mail></Mail>
    </div>
  )
}

export default Contact
