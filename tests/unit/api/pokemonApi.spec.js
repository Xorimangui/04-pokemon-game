import pokemonApi from '@/api/pokemonApi'

describe('pokemonApi', () => {

    test('Axios debe de estar configurado en el API de Pokemon', () => {

        expect(pokemonApi.defaults.baseURL)
            .toBe('https://pokeapi.co/api/v2/pokemon')

    })

})