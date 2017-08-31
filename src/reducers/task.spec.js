import reducer from './task'

describe('Task Reducer',()=>{
    test('returns a state object', ()=>{
        const result = reducer(undefined, {type:'ANYTHING'});
        expect(result).toBeDefined();
    });
    test('adds a task', ()=> {
        const startState ={
            tasks: [
                {id: 1, name: "Render static UI", isComplete: true},
                {id: 2, name: "Render initial state ", isComplete: false},
                {id: 3, name: "Use the State To Render The UI", isComplete: false}
            ]
        };
        const expectedState = {
            tasks: [
                {id: 1, name: "Render static UI", isComplete: true},
                {id: 2, name: "Render initial state ", isComplete: false},
                {id: 3, name: "Use the State To Render The UI", isComplete: false},
                {id: 4, name: "Added task", isComplete: false}
            ]
        };
        const action = {
            type: 'TASK_ADD',
            payload: {id: 4, name: "Added task", isComplete: false}
        };
        const result = reducer(startState, action);
        expect(result).toEqual(expectedState);
    })
});