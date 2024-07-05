import React, { ChangeEvent, useEffect, useState } from 'react'
import { atualizar, buscar, cadastrar } from '../../../service/Service';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';

function FormularioCategoria() {

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria)
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })

        console.log(JSON.stringify(categoria))
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria)

                alert('categoria atualizada, ae rapaiz')
                retornar()

            } catch (error: any) {
                alert('deu ruim, atualizei não')

            }

        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria)

                alert('categoria criada, ae rapaiz')

            } catch (error: any) {
                alert('deu ruim, criei não')
            }

            retornar()
        }
    }

        function retornar() {
            navigate("/categorias")
        }

        return (
            <div className="container flex flex-col items-center justify-center mx-auto my-16">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastre um novo tema' : 'Editar tema'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                <label htmlFor="descricao">Nome do tema</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <label htmlFor="descricao">Descrição do tema</label>
                    <input
                        type="text"
                        placeholder="Descrição"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-pink-400 hover:bg-pink-800 w-1/2 py-2 mx-auto block"
                    type="submit"
                >
                    {id === undefined ? 'Cadastrar' : 'Editar'}
                </button>
            </form>
            <div className='grid grid-cols-4 p-16 gap-8'>
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png' alt="" className='h-full object-contain' />
            <img src='https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/019.png' alt="" className='h-auto object-contain' />
            <img src='https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/283.png' alt="" className='object-contain' />
            <img src='https://img.pokemondb.net/artwork/large/jirachi.jpg' alt="" className='object-contain' />
            </div>

        </div>
        );
    }

    export default FormularioCategoria