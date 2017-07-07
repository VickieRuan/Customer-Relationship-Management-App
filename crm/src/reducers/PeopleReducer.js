import people from './people.json';

const initialState = {
    people
};
//accept initialState as default if there is no state
//so if there is a current state, it will use that state
//otherwise it will load the constant that we just created
export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}