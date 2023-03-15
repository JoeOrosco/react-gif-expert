
// Un hook no es mas que una funcion que regresa algo.

import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFechGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
      const newImages = await getGifs(category)
      setImages(newImages)
      setIsLoading(false)
    }
    
    useEffect( () => {
      getImages()
    }, [])
  
    // Ese algo que retorna el hook es un objeto que en este caso es un return con la propiedades que tiene ahi en dentro.
    return {
        images: images,
        isLoading
    }
}
