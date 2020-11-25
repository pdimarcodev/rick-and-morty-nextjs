export interface Character {
    id: string;
    name: string;
    image: string;
    type: string;
    gender: string;
    species: string;
  }
  
 export interface CharactersQuery {
    characters: {
      results: Character[];
    };
  }
  
 export interface Pages {
    pages: number;
    next: number;
    prev: number;
  }
  
export  interface CharsVars {
    page: Pages;
  }