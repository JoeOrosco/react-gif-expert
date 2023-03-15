// import { useState, useEffect } from "react"
import { GifItem } from "./GifItem"
import { useFechGifs } from "../hooks/useFechGifs"
// import { getGifs } from "../helpers/getGifs"


export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFechGifs( category )

  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && ( <h2>Cargando...</h2>)
        }

        <div className="card-grid">
            {/* {images.map()} */}
            {
                images.map( (image) => ( 
                    <GifItem 
                        key={image.id}
                        { ...image }
                        
                    />
                ))
            }
        </div>
    </>
  )
}
