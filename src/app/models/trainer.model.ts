import { Pokemon } from "./pokemon.model";
//Interfaces for elements in Trainer database
export interface Trainer {
    id: number;
    username: string;
    pokemon: Pokemon[];
}