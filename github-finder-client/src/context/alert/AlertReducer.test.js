import alertReducer from './alertReducer';

describe('alertReducer', () => {
    it('should set an alert', () => {
        const initialState = null;
        const action = {
            type: 'SET_ALERT',
            payload: {
                message: 'This is an alert',
                type: 'success',
            },
        };

        const newState = alertReducer(initialState, action);

        expect(newState).toEqual(action.payload);
    });

    it('should remove an alert', () => {
        const initialState = {
            message: 'This is an alert',
            type: 'success',
        };
        const action = {
            type: 'REMOVE_ALERT',
        };

        const newState = alertReducer(initialState, action);

        expect(newState).toBeNull();
    });

    it('should return the current state for an unknown action', () => {
        const initialState = {
            message: 'This is an alert',
            type: 'success',
        };
        const action = {
            type: 'UNKNOWN_ACTION',
        };

        const newState = alertReducer(initialState, action);

        expect(newState).toEqual(initialState);
    });

    it('should return the initial state when no state is provided', () => {
        const action = {
            type: 'SET_ALERT',
            payload: {
                message: 'This is an alert',
                type: 'success',
            },
        };

        const newState = alertReducer(undefined, action);

        expect(newState).toEqual(action.payload);
    });
});
