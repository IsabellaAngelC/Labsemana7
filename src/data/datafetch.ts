interface character {
   image: string,
   name: string,
   status: string,
   species: string,
   type: string,
   origin:{
   name: string,
   },
   nameoffirstepisode: string,
}

async function getRym(limit:number) {
   try {
   const getData= await fetch ('https://rickandmortyapi.com/api/character/').then((res) => res.json());
   

   const resultCharacters: character[] = getData.results.slice(0, limit);
   return resultCharacters;
   } catch(error) {
      console.log(error);
      
   }
}

   export default getRym;