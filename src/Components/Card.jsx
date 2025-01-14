import React from 'react'

function Card({ values, cardHandelClik,cardIndex }) {
    const {name,image,characterstic,added} = values
    return (
        <div className='card w-[20vw] h-[25vw] bg-amber-500 p-3 rounded-md overflow-hidden'>
            <div className="image w-full h-[60%] bg-rose-500 rounded-md overflow-hidden">
                <img className='object-cover w-full h-full' src={image} alt="" />
            </div>
            <div className="text leading-none mt-6">
                <h1 className='text-[1.5vw] font-[Naruto] '>{name}</h1>
                <p className='mt-2 text-[1.3vw] font-[Bebas]'>{characterstic}</p>
            </div>
            <button onClick={()=>cardHandelClik(cardIndex)} className={`px-6 text-white font-[Bebas] text-[1.4vw] tracking-wider py-1 ${added?"bg-blue-500":"bg-red-500"} rounded-sm mt-4`}>{added?"Added!":"Add Friend!"}</button>
        </div>
    )
}

export default Card