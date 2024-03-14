import { forwardRef } from 'react'
import './index.css'

function Card(
    {
        image,
        name, 
        minFoat, 
        maxFoat,
        rarity,
    }
) {   
    return(
        <div className='card-weapon text-white rounded-md'>
            <article className='font-bold flex flex-col justify-center items-center'>
                <h3 className='h-12 font-medium mt-4'>{name}</h3>
                <figure className='w-60 h-44 flex justify-center items-center'>
                    <img src={image} alt={name} className='animation-img '/>
                </figure>
                <div className='mb-4 w-44 font-normal text-left'>
                    <p>➖ Min-Float: <span>{minFoat}</span></p>
                    <p>➕ Max-Float: <span>{maxFoat}</span></p>
                    <span>⭐ Rareza: {rarity}</span>
                </div>    
            </article>            
        </div>
    )
}

export { Card }