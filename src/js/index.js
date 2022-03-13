const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idCartaoPokemon = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idCartaoPokemon)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoListagem = document.querySelector('.ativo');
        pokemonAtivoListagem.classList.remove('ativo');

        const PokemonSelecionadoListagem = document.getElementById(idPokemonSelecionado);
        PokemonSelecionadoListagem.classList.add('ativo')
    })
})