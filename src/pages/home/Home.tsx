import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'
import ListaCategoria from '../../components/categoria/listaCategorias/ListaCategorias'

function Home() {
    return (
        <>
         <div className="bg-white flex flex-col justify-center items-center">
                <div className='container grid grid-cols-2 text-gray-800 p-16'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Pukemun</h2>
                        <p className='text-xl'>Pukemano</p>
                    </div>

                    <div className="flex justify-center">
                        <img src='https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/195.png' alt="" className='object-fill' />

                    </div>
                </div>
                <div className='container grid grid-cols-2  text-gray-800 p-16'>
                <div className="flex justify-center">
                        <img src='https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/283.png' alt="" className='object-contain' />

                    </div>

                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>a</h2>
                        <p className='text-xl'>a</p>
                    </div>

                </div>
            </div>
            <ListaCategoria/>
        </>
    )
}

export default Home