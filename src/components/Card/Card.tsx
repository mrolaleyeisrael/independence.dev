import React from 'react'
type CardProps = {
    children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className='p-[22px] shadow-lg w-full rounded-xl '>
            {children}
        </div>
    )
}

export default Card