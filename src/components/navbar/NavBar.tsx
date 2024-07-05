import React from 'react'

function NavBar() {
    return (
        <div className="bg-pink-100 text-gray-800 py-3 px-8 flex w-screen justify-between overflow-x-hidden sticky-top">
            <div className="container flex justify-between text-lg">
                    <div className='text-2xl font-bold uppercase'>Farmacia Pokemon</div>

                    <div className='flex gap-4'>
                        <div className='hover:underline'>Produtos</div>
                        <div className='hover:underline'>Categorias</div>
                    </div>
                </div>
        </div>
    )
}

export default NavBar