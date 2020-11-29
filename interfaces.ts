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

export interface CharacterQuery {
  character: Character;
  }


  
 export interface Pages {
    pages: number;
    next: number;
    prev: number;
  }
  
  export interface CharsVars {
    name: string;
  }
  
  export interface CharVars {
    id: string; 
  }
