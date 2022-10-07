import getPokemonOptions, { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions'

describe('getPokemonOptions helpers', () => {

    test('Debe de regresar un arreglo de numeros', () => {

        const pokemons = getPokemons()

        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[649]).toBe(650)

    })

    test('Debe de retornar un arreglo de 4 elementos con nombres de Pokemon', async() => {

        const pokemons = await getPokemonNames([1, 2, 3, 4])

        expect(pokemons).toStrictEqual([
            { name: 'Bulbasaur', id: 1 },
            { name: 'Ivysaur', id: 2 },
            { name: 'Venusaur', id: 3 },
            { name: 'Charmander', id: 4 }
        ])

    })

    test('getPokemonOptions debe de retornar un arreglo mezclado', async() => {

        const pokemons = await getPokemonOptions()

        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual([{
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            }
        ])

    })

})