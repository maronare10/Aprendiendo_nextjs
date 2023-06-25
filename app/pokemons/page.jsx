import Link from "next/link";
import Buttons from "../components/Buttons";

const fetchPokemons = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon'
  const response =  await fetch(url)
  const data = await response.json()
  console.log(data);
  return data.results
}

export default async function Pokemons() {
  const pokemons = await fetchPokemons()
  console.log(pokemons)
  return (
    <>
      <div>Pokemons page</div>
      <Buttons/>
      <ol>
        {pokemons.map(pokemon => {
          return <li key={pokemon.name}>
            <Link href= {`/pokemons/${pokemon.name}`} >{pokemon.name}</Link>
          </li>
        })}
      </ol>
    </>
  )
}
