<template>
    <div class="pokemon-container">

        <img v-if="!showPokemon" 
            :src="imgSrc" 
            class="hidden-pokemon" 
            alt="pokemon">

        <img v-else 
            :src="imgSrc" 
            class="fade-in" 
            alt="pokemon">
        <!-- Para bindear atributos HTML usamos v-bind, para bindear CONTENIDO html usamos {{}} -->
    </div>    
</template>

<script>

export default {
    props: {
        pokemonId: {
            type: Number,
            required: true
        },
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    computed: {
        imgSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }

}

</script>

<style scoped>

.pokemon-container {
    height: 200px;
}
img {
    margin: auto;
    height: 200px;
    position: absolute;
    left: 0;
    right: 0;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}

</style>