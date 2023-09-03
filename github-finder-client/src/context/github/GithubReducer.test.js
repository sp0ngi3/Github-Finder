import githubReducer from './githubReducer';

describe('githubReducer', () => {
    it('should handle GET_USERS action', () => {
        const initialState = {
            users: [],
            loading: true,
        };

        const action = {
            type: 'GET_USERS',
            payload: [/* Array of users */],
        };

        const newState = githubReducer(initialState, action);

        expect(newState).toEqual({
            users: action.payload,
            loading: false,
        });
    });

    it('should handle SET_LOADING action', () => {
        const initialState = {
            users: [],
            loading: false,
        };

        const action = {
            type: 'SET_LOADING',
        };

        const newState = githubReducer(initialState, action);

        expect(newState).toEqual({
            users: [],
            loading: true,
        });
    });

    it('should handle CLEAR_USERS action', () => {
        const initialState = {
            users: [/* Some initial users */],
            loading: false,
        };

        const action = {
            type: 'CLEAR_USERS',
        };

        const newState = githubReducer(initialState, action);

        expect(newState).toEqual({
            users: [],
            loading: false,
        });
    });

    it('should handle FETCH_USER action', () => {
        const initialState = {
            user: null,
            loading: true,
        };

        const action = {
            type: 'FETCH_USER',
            payload: { /* User data */ },
        };

        const newState = githubReducer(initialState, action);

        expect(newState).toEqual({
            user: action.payload,
            loading: false,
        });
    });

    it('should handle GET_REPOS action', () => {
        const initialState = {
            repos: [],
            loading: true,
        };

        const action = {
            type: 'GET_REPOS',
            payload: [/* Array of repos */],
        };

        const newState = githubReducer(initialState, action);

        expect(newState).toEqual({
            repos: action.payload,
            loading: false,
        });
    });

    it('should return the same state for an unknown action', () => {
        const initialState = {
            users: [],
            loading: false,
        };

        const action = {
            type: 'UNKNOWN_ACTION',
        };

        const newState = githubReducer(initialState, action);

        expect(newState).toEqual(initialState);
    });
});
