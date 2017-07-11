import people from './people.json';

const initialState = {
    people,
    detailView: false,
    personSelected: null,
};
//accept initialState as default if there is no state
//so if there is a current state, it will use that state
//otherwise it will load the constant that we just created
export default (state = initialState, action) => {
    switch (action.type) {
        case 'SELECTED_PERSON':
            return {
                ...state, //current state and combine with others
                detailView: true,
                personSelected: action.payload
            }
            
        case 'NONE_SELECTED':
            return {
                ...state,
                detailView: false,
                personSelected: null,
            }

        default:
            return state;
    }
}