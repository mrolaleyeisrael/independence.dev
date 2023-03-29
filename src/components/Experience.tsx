import React from 'react'
import Card from './Card/Card'
import Image from 'next/image'

const Experience = () => {
    return (
        <Card>
            <h1>Experiences</h1>

            <div className=' mt-11 space-y-8 '>
                <div className=' flex flex-row '>
                    <div className=' w-[100px] mr-4 md:mr-6 md:w-[150px] shrink-0 pt-4 '>
                        <Image src={'/images/gathpay-logo-blue.svg'} alt="" width={200} height={200} className='' />
                    </div>
                    <div>
                        <p>Dec 2022 - Current</p>
                        <h1 className=' mt-3 font-bold text-[#333333] '>Front-end Developer</h1>
                        <p className=' mt-8 text-[#828282] '>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                    </div>
                </div>

                <div className=' flex flex-row '>
                    <div className=' w-[100px] mr-4 md:mr-6 md:w-[150px] shrink-0 pt-4 '>
                        <Image src={'/images/gathpay-logo-blue.svg'} alt="" width={200} height={200} className='' />
                    </div>
                    <div>
                        <p>Dec 2022 - Current</p>
                        <h1 className=' mt-3 font-bold text-[#333333] '>Front-end Developer</h1>
                        <p className=' mt-8 text-[#828282] '>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                    </div>
                </div>

                <div className=' flex flex-row '>
                    <div className=' w-[100px] mr-4 md:mr-6 md:w-[150px] shrink-0 pt-4 '>
                        <Image src={'/images/gathpay-logo-blue.svg'} alt="" width={200} height={200} className='' />
                    </div>
                    <div>
                        <p>Dec 2022 - Current</p>
                        <h1 className=' mt-3 font-bold text-[#333333] '>Front-end Developer</h1>
                        <p className=' mt-8 text-[#828282] '>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                    </div>
                </div>

                <div className=' flex flex-row '>
                    <div className=' w-[100px] mr-4 md:mr-6 md:w-[150px] shrink-0 pt-4 '>
                        <Image src={'/images/gathpay-logo-blue.svg'} alt="" width={200} height={200} className='' />
                    </div>
                    <div>
                        <p>Dec 2022 - Current</p>
                        <h1 className=' mt-3 font-bold text-[#333333] '>Front-end Developer</h1>
                        <p className=' mt-8 text-[#828282] '>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                    </div>
                </div>

                <div className=' flex flex-row '>
                    <div className=' w-[100px] mr-4 md:mr-6 md:w-[150px] shrink-0 pt-4 '>
                        <Image src={'/images/gathpay-logo-blue.svg'} alt="" width={200} height={200} className='' />
                    </div>
                    <div>
                        <p>Dec 2022 - Current</p>
                        <h1 className=' mt-3 font-bold text-[#333333] '>Front-end Developer</h1>
                        <p className=' mt-8 text-[#828282] '>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                    </div>
                </div>
            </div>

            
        </Card>
    )
}

export default Experience