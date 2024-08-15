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
    <>

    {/*Vista anterior sin tailwindcss y daiyUi 
        
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

        */}

        <div className = "card w-84 bg-base-100 shadow-xl p-0">
        <figure><img src={product.image} alt="Product" style={{width:'100%', height:'20vh', objectFit:'cover'}} /></figure>
        <div className="card-body">
            <h2 className="card-title line-clamp-2">{product.title}</h2>
            <p className="line-clamp-3">{product.description}</p>
            <div className='flex justify-between'>
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
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>


        </>
  );
}

export default Product