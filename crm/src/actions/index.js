//every action will be passed to a reducer 
//and then the reducer will create a new state based on the info that we're passing to it

//first action
export const selectPerson = (peopleId) => {
    return {
        type: 'SELECTED_PERSON',
        payload: peopleId,   
    };
};

//second action
export const noneSelected = () => {
    return {
        type: 'NONE_SELECTED',
    };
};