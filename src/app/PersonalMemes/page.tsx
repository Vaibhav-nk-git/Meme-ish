import React from 'react'
import ThreeDCardDemo from '@/components/MemeCards'

export default function PersonalMEmes() {
    return (
        <div >
            <p className='flex justify-center mt-28 pt-10 text-lg sm:text-3xl md:text-4xl uppercase'>🤍My Favourite Memes🤍</p>
            <div className='mt-2 mx-9 grid grid-cols-1 sm:grid-cols-2'>
            <ThreeDCardDemo
                imageSrc="/media/jiomeme.jpg"
                imageHeight={700}
                imageWidth={700}
                imageAlt="Image 1"
                />
                <ThreeDCardDemo
                imageSrc="/media/meme1.jpg"
                imageHeight={700}
                imageWidth={700}
                imageAlt="Image 1"
                />
                <div >
                <ThreeDCardDemo
                imageSrc="/media/meme2.jpg"
                imageHeight={700}
                imageWidth={700}
                imageAlt="Image 1"
                /></div>
        </div>
        </div>
       
      )
}
