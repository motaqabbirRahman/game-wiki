import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  //not a plaform array rather an array of objects
  //each object has a property called platform
  parent_platforms: { platform: Platform }[];
  // [{platform : {id: , name: , slug: } }]
  metacritic: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = () => {
  return useData<Game>("/games");
};

export default useGames;
