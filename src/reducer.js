export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //remove after ebugging change to :null
    // token:
    //    "BQBHzmLFLf2AAqYTKn5dAlfxbyoNjUzNCwQLsqTjrJtohh4qbzXZQG1xujH8_mBVUIlxf6nBvdEDWBYtsdaxewvlNaO8pCmzXXl_LhLhPaEHbPooNhrL9ix_rCcEc0ilNJV1FVVMANvckoxO775PU2AVAnqxU3dwOq-cTc5AwLDWTFQ",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

      case "SET_DAILY_MIX":
          return {
              ...state,
              daily_mix: action.daily_mix,
          }


    default:
      return state;
  }
};

export default reducer;
