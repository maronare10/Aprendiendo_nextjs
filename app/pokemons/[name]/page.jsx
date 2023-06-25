import Image from "next/image"

const getPokemon = async (name) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

  const response = await fetch(url)
  const data = await response.json()
  return data
}


export default async function Pokemon( { params }) {
  const pokemon = await getPokemon(params.name)
  return (
    <>
    <div>Pokemon page {params.name} </div>
    {/* <img src={pokemon.sprites.other['official-artwork']['front_default']}/> */}
    <Image
      src={pokemon.sprites.other['official-artwork']['front_default']}
      width={300}
      height={300}
    />
    </>

  )
}
