import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {
    const { data:images , loading } = useFetchGifs( category );


    
    return (
        <div>
            <h3 className="animate__animated animate__fadeIn animate__delay-3s" >{ category }</h3>
            {loading && <p>Loading</p>}
        <div className="card-grid">
            
                {images.map( img => (
                    <GifGridItem 
                    key={ img.id }
                    { ...img }
                    />
                ))}
        </div>
        </div>
    )
};