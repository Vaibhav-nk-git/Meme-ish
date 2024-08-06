import React from 'react'
import ThreeDCardDemo from '@/components/MemeCards'

export default function ClassicMemes() {
  return (
    <div >
        <p className='flex justify-center mt-28 pt-10 text-lg sm:text-3xl md:text-4xl uppercase'>🧑‍💼Classic Memes🧑‍💼</p>
        <div className='mt-2 mx-9 grid grid-cols-1 sm:grid-cols-2'>
        <ThreeDCardDemo
            imageSrc="/media/classic/classic_meme1.jpeg"
            imageHeight={700}
            imageWidth={700}
            imageAlt="Image 1"
            />
            <ThreeDCardDemo
            imageSrc="/media/classic/classic_meme2.jpeg"
            imageHeight={700}
            imageWidth={700}
            imageAlt="Image 1"
            />
            <div >
            <ThreeDCardDemo
            imageSrc="/media/classic/classic_meme3.jpeg"
            imageHeight={700}
            imageWidth={700}
            imageAlt="Image 1"
            /></div>
    </div>
    </div>
   
  )
}
