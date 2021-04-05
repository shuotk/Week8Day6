const initialState = {
    list: [["App1", "Date1"], ["App2", "Date2"]]
};

// Use the initialState as a default value
export default function appModifier(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case 'ADD': {
            // We need to return a new state object
            let newList = state.list;
            newList.push(action.payload);
            return {
                // that has all the existing state data
                ...state,
                list: newList
            };
        }
        default:
            return state;
    }
}
