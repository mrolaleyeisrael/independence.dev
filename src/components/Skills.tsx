import React from 'react'
import Card from './Card/Card'
import InputRange from 'react-input-range'

const Skills = () => {
    return (
        <Card>
            <h1 className=' capitalize text-lg font-bold mb-4 '>Front End</h1>
            <div className=' flex flex-wrap gap-1 '>

                <p className=' bg-red-300 p-1 text-sm rounded-xl w-fit font-medium text-[#4F4F4F]'>TypeScript</p>
                <p className=' bg-blue-300 p-1 text-sm rounded-xl w-fit font-medium text-[#4F4F4F]'>React</p>
                <p className=' bg-amber-300 p-1 text-sm rounded-xl w-fit font-medium text-[#4F4F4F]'>NextJs</p>
                <p className=' bg-purple-300 p-1 text-sm rounded-xl w-fit font-medium text-[#4F4F4F]'>Tailwind</p>
                <p className=' bg-green-300 p-1 text-sm rounded-xl w-fit font-medium text-[#4F4F4F]'>Redux</p>
                <p className=' bg-gray-300 p-1 text-sm rounded-xl w-fit font-medium text-[#4F4F4F]'>NextJs</p>
                <p className=' bg-yellow-300 p-1 text-sm rounded-xl w-fit font-medium text-[#4F4F4F]'>BootStrap</p>
                <p className=' bg-pink-300 p-1 text-sm rounded-xl w-fit font-medium text-[#4F4F4F]'>Material UI</p>
                <p className=' bg-slate-300 bg- p-1 bg= text-sm rounded-xl w-fit font-medium text-[#4F4F4F]'>NextJs</p>
            </div>
        </Card>
    )
}

export default Skills