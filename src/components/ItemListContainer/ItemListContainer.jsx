import 'ItemListContainer.css'
export const saludar = () => console.log('saludo')
const ItemListContainer = ({greeting}) => {
  return (

    <div>
        Desafío 01
        <br/>
        <h1>{greeting.saludo}</h1>
    </div>
  )
}

export default ItemListContainer