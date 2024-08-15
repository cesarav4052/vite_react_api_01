//import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
//import productos from './demo_productos.tsx'

//Inicio
// Define el tipo para los productos
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

/*
// Datos de productos

const productos: Producto[] = [
    {
        "id": 18,
        "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
        "price": 9.85,
        "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 130
        }
    },
    {
        "id": 19,
        "title": "Opna Women's Short Sleeve Moisture",
        "price": 7.95,
        "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.5,
            "count": 146
        }
    },
    {
        "id": 20,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        "price": 12.99,
        "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "rating": {
            "rate": 3.6,
            "count": 145
        }
    }
];

//Fin
*/

const Gallery = () => {

    const [listaProductos, setListaProductos] = useState<Producto[]>([]);
    const [contador, setContador] = useState<number>(0);

    /*
    const handlerCargarProductos = () => {
        setListaProductos([...productos]);
    }
    */    


    {/*Bloque que solo se ejecuta UNA SOLA VEZ despues de haberse cargado la pagina 
        }, []);*/}
        
            useEffect(() => {
        console.log('Ejecutando useEffect...');
        console.log('Valor contador: '+contador);

        const CargarDatosApi= async () =>{
          const res= await fetch('https://fakestoreapi.com/products');
          const dataProductos = await res.json();
          console.log('listado de productos \n'+dataProductos);
          setListaProductos([...dataProductos]);
        }
  
        CargarDatosApi();
      }, []);    
        
        
        


        {/*Bloque que se ejecuta VARIAS VECES despues de detectar cualquier cambio de alguna 
            variable de estado (tipo useState), en este caso cada que cambia CONTADOR  }); 
            En la consola cambia constantemente ya que desde la api estan actualizandose
            la lista de productos en el backend publico

        useEffect(() => {
            console.log('Ejecutando useEffect...');
            console.log('Valor contador: '+contador);

            const CargarDatosApi= async () =>{
            const res= await fetch('https://fakestoreapi.com/products');
            const dataProductos = await res.json();
            console.log('listado de productos \n'+dataProductos);
            setListaProductos([...dataProductos]);
            }
    
            CargarDatosApi();
        });    

        */}

    

    if(listaProductos.length===0){
        return(
            <>
                <h2>Cargando productos...</h2>

               {/* <h2>No hay productos disponibles</h2>
                <button onClick={handlerCargarProductos}>Cargar productos</button> */}
            </>
            );
    }



  return (
    <>
        <button onClick={()=>setContador(prev=>prev+1)}>Aumentar contador</button>
        {/*<button onClick={()=>setContador(Math.random()*10)}>Aumentar contador</button>*/}
        {/*<button onClick={()=>setListaProductos([])}>Limpiar productos</button>*/}
        <div style={{display:'flex', width:'100%', flexWrap:'wrap'}}>
            {
                listaProductos.map((prod) => {
                    //{return <p>{prod.nombre}</p>}
                    //return <Product product={prod}></Product>
                    return <Product key={prod.id} product={prod}></Product>
                }
                )
            }
        </div>
    </>
  );
}

export default Gallery