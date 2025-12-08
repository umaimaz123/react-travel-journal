import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)


/* *** Challenge: USE ARRAY.MAP METHOD TO TURN REGULAR JAVASCRIPT TO JSX ELEMENTS: ***
        
            //  *************************************** //
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
            //  *************************************** //
*/

// *** My solution: *** 
//    ~~~~~~~~~~~~~
// const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

// const pokemonElements = pokemon.map((pokemon) => {
//   return `<p>${pokemon}</p>`
// })

// console.log(pokemonElements);

// *** optimized solution: ***
//    ~~~~~~~~~~~~~~~~~~~~
// const pokemonElementsOptimized = pokemon.map(pokemon => `<p>${pokemon}</p>`)
// console.log(pokemonElementsOptimized); 