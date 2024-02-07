// import React, { useEffect, useState } from "react";

// interface IPokemonImage {
//     imageUrl: string;
// }

// export const DynamicBackground: React.FC = () => {

//     const [pokemonImages, setPokemonImages] = useState<IPokemonImage[]>([])

//     useEffect(() => {
//         const fetchPokemonImages = async () => {
//             try {
//                 const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20');
//                 const dataImages = await response.json();
//                 const loadedImages = dataImages.results.map((pokemon: any) => {
//                     const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.toString().split("/")[6]}.png`;
//                     return { imageUrl };
//                 });
//                 setPokemonImages(loadedImages);
//             } catch (error) {
//                 console.error('Failed to fetch...')
//             }
//         };

//         fetchPokemonImages();
//     }, []);

//     return (
//         <div className="dynamic-background">
//             {pokemonImages.map((pokemon, index) => (
//                 <img key={index} src={pokemon.imageUrl} alt="Pokemon" className="floating-pokemon" style={{
//                     // Generiere Stile hier, oder besser: Definiere sie in deiner CSS-Datei
//                 }} />
//             ))}
//         </div>
//     );
// };
