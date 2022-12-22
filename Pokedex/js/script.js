var pokemon = document.getElementById("buscar");
var botaoProcura = document.getElementById("procurar");

botaoProcura.addEventListener("click", (e) => {
  e.preventDefault();
  buscarPokemon(pokemon.value.toLowerCase());
  pokemon.value = "";
});

async function buscarPokemon(pokemon) {
  try {
    var consultaPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    var converteConsulta = await consultaPokemon.json();

    if (converteConsulta.error) {
      throw Error("O Pokémon não existe!");
    } else {
      var imagem = document.getElementById("pokemon");
      var numero = document.getElementById("numero-pokemon");
      var nome = document.getElementById("nome-pokemon");

      imagem.src =
        converteConsulta["sprites"]["versions"]["generation-v"]["black-white"][
          "animated"
        ]["front_default"];
      numero.innerHTML = converteConsulta.id;
      nome.innerHTML = converteConsulta.name;
    }
  } catch (error) {
    console.log("O Pokémon não existe!");
  }
}
