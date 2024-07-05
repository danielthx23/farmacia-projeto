import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="bg-pink-100 text-gray-800 py-3 px-8 flex w-full justify-between overflow-x-hidden sticky-top">
            <div className="container flex justify-between text-lg">
                    <Link to='/home' className='text-2xl font-bold uppercase'>Farmacia Pokemon</Link>

                    <div className='flex gap-4'>
                        <div className='hover:underline'>Produtos</div>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarCategoria' className='hover:underline'>Cadastrar categoria</Link>
                    </div>
                </div>
        </div>
    )
}

export default NavBar