import { TypewriterEffectSmoothDemo } from '@/components/TypeWriterEffect'
import { FlipWordsDemo } from '@/components/WordFlip'
import React from 'react'
export default function AboutCreator() {
return (
    <div>
        <div style={{
                backgroundImage: `url('/media/profile.png')`,
                backgroundSize: '50%',
                backgroundPosition: 'right',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                width: '100vw'
            }}>
            <div className='flex justify-start ml-8'><FlipWordsDemo /></div>
        </div>
        <TypewriterEffectSmoothDemo/>
    </div>
)
}
