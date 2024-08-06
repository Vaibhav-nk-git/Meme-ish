import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div>
        <div className='mt-7'>
               
            <footer className="bg-black text-white p-4 text-center">
                <div className='flex justify-center items-center'>
                
            <p className='text-2xl font-md'>Memeish</p>
                </div>
                <div className='flex justify-center mt-5 mx-24 px-5 text-sm'>
                    Thanks for scrolling through the laughs! Memeish is a singly-driven platform where the person&apos;s humour knows no bounds. If you are feeling extra meme-tastic, submit your own creations or share your favorites with me. And remember, if you can&apos;t take a joke, you&apos;re probably a meme waiting to happen
                </div>
            
                <p className='mt-4'>&copy; 2024 Memeish Vaibhav</p>
            </footer>
        </div>
    </div>
  )
}
