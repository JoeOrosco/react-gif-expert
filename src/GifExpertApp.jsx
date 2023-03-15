
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // Hay varios hooks de react con el que podemos hacer el estado en este usaremos este.
    // nota: podemos tener tantos useState que necesitamos.
    const [ categories, setCategories ] = useState([ 'One Punch' ])

    const onAddCategory = ( newCategory ) => {

      if(categories.includes(newCategory)) return 

      // En riact vamos a tratar de quitarnos ese pensamiento que el metodo push es lo que necesitamos para agregar un elemento a un arreglo -> el metodo push lo que hace es mutar un objeto. Se nos aconseja que dejemos de usarlo hasta saber bien como es que funiciona react.
      // console.log(newCategory)
      setCategories( [ newCategory, ...categories ] )
    }

    // Nota! no poner en condicionales (if) los hooks.

    console.log(categories)


  return (

    <>
        {/* titulo */}
        <h1> GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
          // setCategories={ setCategories } 
          onNewCategory={event => onAddCategory(event) }
        />

        {/* listado de Item/Gifs */}

        {
          categories.map( category => (
                <GifGrid 
                  key={category} 
                  category={category} 
                />
              ))
        }

        {/* <li>123</li> */}
            
        {/* Gif Item */}

    </>
  )
}
