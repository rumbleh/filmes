const lista = require('../../assets/filmes.json');

const FilmeReducer = (state = lista, action) => {
  let data = [...state.data];
  let index;

  switch (action.type) {
    case 'SET_RATING':
      index = action.payload.index;
      const stars = action.payload.stars;
      data[index].Rating = stars;
      return {data};

    case 'TOGGLE_FAVORITE':
      index = action.payload.index;
      data[index].Favorite = !data[index].Favorite;
      return {data};
  }

  return state;
};

export default FilmeReducer;
