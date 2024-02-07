import { Score } from "./Score";

interface Pokemon {
    id: number
    name: string;
    url?: URL;
}

interface CardListProps {
    data: Pokemon[];
    points: number;
    handleImageClick: (image: string) => void;
    imageClickedTwice: string | null;
}

export const CardList = ({ data, points, handleImageClick, imageClickedTwice }: CardListProps) => {
    return (
        <>
            <Score score={points} highScore={parseInt(localStorage.getItem('highScore') || '0')} />


            <div className="dataContainer">
                {data.map((pokemon, index) => (
                    <div key={index} className="pokemonCard" style={pokemon.name === imageClickedTwice ? { border: '2px solid rgba(255,0,0,0.65)', backgroundColor: 'rgba(255,0,0,0.65)', boxShadow: '0px 0px 10px 10px rgba(255,0,0,0.65)' } : {}}>
                        {pokemon.url && (
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.toString().split("/")[6]}.png`}
                                alt={pokemon.name}
                                onClick={() => handleImageClick(pokemon.name)} />
                        )}
                        <h3>{pokemon.name}</h3>
                    </div>
                ))}

            </div>
        </>
    );
};