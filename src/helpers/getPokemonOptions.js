import pokemonApi from "@/api/pokemonApi"

// Creamos el array vacío, le indicamos que tiene 650 de tamaño
// Con .map simplemente recorremos todas las posiciones de un array 
// y en este caso le estamos asignando un número a cada posicion (1 a 650).
// Ese número lo sacamos gracias al indice del array, pero luego lo devolvemos como valor
// al nuevo array.
export const getPokemons = () => {
    const pokemonsArr = Array.from(Array(650))

    return pokemonsArr.map((_, index) => index + 1)

}

// Guardamos el array en un nuevo array en el que los índices están mezclados
// y lo cortamos en solo 4 posiciones para enviarselo a getPokemonNames
// getPokemonNames a su vez nos devuelve un array con pareja name/id
// por ultimo devolvemos ese array que ya contiene 4 pokemons(nombre/id) aleatorios.
const getPokemonOptions = async() => {

    const mixedPokemons = getPokemons()
        .sort(() => Math.random() - 0.5)

    const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4))

    return pokemons

}

// Recibimos el array con 4 números aleatorios del 1 al 650.
// Preparamos la peticion añadiendole una '/' seguida del número a la petición axios (pokemonApi.js)
// lanzamos la petición y guardamos el resultado en un nuevo array que devolvemos.
// Este array contiene 4 parejas de nombre e id de Pokemons al azar entre 1 y 650 de ID.
export const getPokemonNames = async([a, b, c, d] = []) => {

    const promiseArr = [
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`)
    ]

    const [p1, p2, p3, p4] = await Promise.all(promiseArr)

    return [
        { name: p1.data.name.charAt(0).toUpperCase() + p1.data.name.slice(1), id: p1.data.id },
        { name: p2.data.name.charAt(0).toUpperCase() + p2.data.name.slice(1), id: p2.data.id },
        { name: p3.data.name.charAt(0).toUpperCase() + p3.data.name.slice(1), id: p3.data.id },
        { name: p4.data.name.charAt(0).toUpperCase() + p4.data.name.slice(1), id: p4.data.id }
    ]

}

export default getPokemonOptions