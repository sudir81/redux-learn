export const GET_ALL_FILMS = `
  query getAllFilms {
    allFilms {
        totalCount
        films {
          created
          id
          director
          title
        }
      }
  }`;

export const GET_FILM_BY_ID = `
    query getFilmById($filmId: ID) {
        film (id: $filmId){
          id
          title
          created
          director
          releaseDate
          episodeID
          openingCrawl
          producers
        }
      }
  `;
