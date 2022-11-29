export default function characters({ character }) {
  return (
    <div>
      <img src={character.photoUrl}></img>
      <h1>{character.name}</h1>
      <p> Affiliation: {character.affiliation}</p>
    </div>
  );
}
export async function getStaticProps({ params }) {
  const results = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters?name=${params.characterId}`
  ).then((r) => r.json());
  return {
    props: {
      character: results[0],
    },
  };
}
export async function getStaticPaths() {
  const characters = await fetch(
    "https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=500"
  ).then((r) => r.json());
  return {
    paths: characters.map((character) => {
      const characterId = character.name.toLowerCase();
      return {
        params: {
          characterId,
        },
      };
    }),
    fallback: false,
  };
}
