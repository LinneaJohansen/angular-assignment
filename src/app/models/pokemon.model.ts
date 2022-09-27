//Interfaces for elements in Pokemon database
export interface Pokemon {
    id: number;
    name: string;
    url: string;
}


export interface PokemonInfo {
    
    sprites: PokemonSprites;
}
export interface PokemonSprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}