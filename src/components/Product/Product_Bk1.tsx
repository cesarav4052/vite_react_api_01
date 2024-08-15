import React from 'react'

// Define las interfaces para los productos
interface Rating {
    rate: number;
    count: number;
}

interface Producto {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

interface ProdProps {
    product: Producto;
}



const Product: React.FC<ProdProps> = ({product}) => {
  return (
    <div style={{display:'flex', width:'30%', border: '1px solid white', justifyContent:'center', flexDirection:'column', margin: '1rem',}}>
        <img src={product.image} style={{width:'100%', height:'20vh', objectFit:'contain'}}></img>
        <hr></hr>
        <div style={{height: '30vh'}}>
            <div>
                <h3 style={{overflowX:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', maxHeight:'100%', }}>{product.title}</h3>
            </div>
            <div style={{height: '20vh'}}>
                <p style={{overflow:'hidden', maxHeight:'15vh', textOverflow:'ellipsis'}}>{product.description}</p>
            </div>
        </div>
        <div style={{display:'flex'}}>
            <div>
                Precio: {product.price}
            </div>
            <div>
                Categoria: {product.category}
            </div>
            <div>
                Puntaje: {product.rating['rate']}
            </div>
            <div>
                Cantidad disponible: {product.rating['count']}
            </div>
        </div>        
    </div>
  )
}

export default Product