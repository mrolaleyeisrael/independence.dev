import React from 'react'
import Card from './Card/Card'
import Image from 'next/image'

const Experience = () => {
    return (
        <Card>
            <h1 className=' font-bold '>Experiences</h1>

            <div className=' mt-11 space-y-8 '>

                <div className=' flex flex-row '>
                    <div className=' w-[100px] mr-4 md:mr-6 md:w-[100px] shrink-0 pt-4 '>
                        <Image src={'/images/kodeCamp.jpg'} alt="" width={200} height={200} className='' />
                    </div>
                    <div>
                        <p>Mar 2022 - July 2022</p>
                        <h1 className=' mt-3 font-bold text-[#333333] '>Front-end Developer Intern</h1>
                        <p className=' mt-4 text-[#828282] '>Created a scalable progressive web app with ReactJS that allowed
                            cross-platform accessibility to the website on any device with primary use on
                            mobile.</p>
                    </div>
                </div>

                <div className=' flex flex-row '>
                    <div className=' w-[100px] mr-4 md:mr-6 shrink-0 pt-4 '>
                        <Image src={'/images/Zuri-Team-Logo.svg'} alt="" width={200} height={200} className='' />
                    </div>
                    <div>
                        <p>May 2022 - Aug 2022</p>
                        <h1 className=' mt-3 font-bold text-[#333333] '>Front-end Developer Intern</h1>
                        <p className=' mt-4 text-[#828282] '>I worked hand-in-hand with the Backend and the UI team to build a platform that
                            splits, CSV and JSON files into chunks. I also worked on several responsive
                            and pixel-perfect sites (using ReactJS, Styled Components, TailwindCSS) which
                            were templated by other backend interns. I learnt a lot during the process.</p>
                    </div>
                </div>

                <div className=' flex flex-row '>
                    <div className=' w-[100px] mr-4 md:mr-6  shrink-0 pt-4 '>
                        <Image src={'/images/gathpay-logo-blue.svg'} alt="" width={200} height={200} className='' />
                    </div>
                    <div>
                        <p>Dec 2022 - Current</p>
                        <h1 className=' mt-3 font-bold text-[#333333] '>Front-end Developer</h1>
                        <p className=' mt-4 text-[#828282] '>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                    </div>
                </div>




            </div>


        </Card>
    )
}

export default Experience