import React from 'react'
import Card from './Card/Card'
import Image from 'next/image'
import { MdEmail, MdCall } from 'react-icons/md'


const Intro = () => {
    return (
        <Card>
            <div className=' flex w-full '>

                <div className=' w-[271px] rounded-[12px] '>
                    <Image src={'/images/me.jpg'} alt='' className="rounded-[12px]" width={500} height={500} />
                </div>
                <div className=' px-[33px] '>
                    <div className=' grow flex flex-row mb-[34px] justify-between '>
                        <div>
                            <h1 className=' text-[#4F4F4F] text-2xl font-bold  '>Israel Olaleye</h1>
                            <p className=' text-lg text-[#828282] '>Front-end developer</p>
                        </div>
                        <div className=' flex flex-col '>

                            <div className=' flex  items-center '>
                                <MdEmail />
                                <p className=' text-[16px] ml-4 text-[#4f4f4f] '>mrolaleyeisrael@gmail.com</p>
                            </div>
                            <div className=' flex  items-center '>
                                <MdCall />
                                <p className=' text-[16px] ml-4 text-[#4f4f4f] '>+234 81 038 74770</p>
                            </div>
                        </div>
                    </div>

                    <p className=' text-[#828282] '>
                        Self-motivated developer, who is willing to learn and create outstanding UI applications.

                        Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
                    </p>
                </div>
            </div>

        </Card>
    )
}

export default Intro