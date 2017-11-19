const user = (state = {}, action) => {
    switch (action.type) {
        case 'USER__SET_TOKEN':
            return {
                ...state,
                token: action.value,
            };

        default:
            return state;
    }
};

export default user;
