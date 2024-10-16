const initialFetching = {
    loading: '',
};

export const makeFetchingReducer = actions => (state = initialFetching, action) => {
    switch(action.type) {
        case actions[0]:
            return {
                ...state,
                loading: 'pending',
            }
        case actions[1]:
            return {
                ...state,
                loading: 'succeded',
            }
        case actions[2]:
            return {
                error: action.error,
                loading: 'rejected',
            }
        default:
            return state;
    };
};

export const makeSetReducer = actions => (state = 'all', action) => {
    switch(action.type) {
        case actions[0]:
            return action.payload;
        default:
            return state;
    }
};