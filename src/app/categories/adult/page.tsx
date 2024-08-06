import CompareDemo from '@/components/CompareSlider'
import ThreeDCardDemo from '@/components/MemeCards'
import React from 'react'

export default function Adultmemes() {
  return (
    <div>
        <p className='flex justify-center mt-28 text-lg sm:text-xl md:text-3xl'>Really bro!!! </p>
        <p className='flex justify-center mt-2 text-lg sm:text-xl md:text-3xl'>Adult memes?</p>
    <div className='mt-5 max-w-6xl flex justify-center items-center'>
    <CompareDemo
            firstImage="/media/adult/chachi1.jpeg"
            secondImage="/media/adult/chachi2.jpeg"
/>   </div>
</div>
  )
}
