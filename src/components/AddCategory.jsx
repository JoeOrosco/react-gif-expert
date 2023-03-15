import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    // Cada componente puede tener su propio estado, oh sus propios hooks. en este caso necesito manejar el estado de este input.
    const [inputValue, setInputValue] = useState('One Punch')
    
    const onInputChange = (event) => {
        // console.log(event.target.value)
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        
        if(inputValue.trim().length <= 1) return
        // console.log(inputValue)
        // setCategories( categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }


  return (
    <form onSubmit={(event) => onSubmit(event)}>
        <input 
            type="text" 
            placeholder="Buscar gifs" 
            value={inputValue} 
            onChange={ onInputChange }
        />
    </form>
  )
}
