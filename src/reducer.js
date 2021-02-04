export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove after development
   // token: 'BQCBisIPIKTWctZEq4IpFk3Sk-NbA158nc2fsQS-twAUgD6wXtMbCMITQ7SfXADBdEaPVqBb9aheB4ACjSfVG3KXUabYSIFi4rf0i8stW0qP9Y8F8eyvtrKWvzww1dXIdvmptJY21fQ5c-jVQkUHk0RmdPfkaqnUc6hdtQXkHQjoyHALMUiF'
}

const reducer = (state, action) => {
    console.log("AAACCCCTTTTIIIIOOONNN:",action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token,
            };
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,
            }
        default:
            return state;
    }
}

export default reducer;