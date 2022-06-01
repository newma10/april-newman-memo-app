
//State=current state of the component, and take the action to modify the state.
//The state does not exist the first time a reducer is called, so must designate a default initial state.
//Naming convention is important: 'reducerName/actionName';
// ON_MEMO_ADD is stored in an exported variable so it can be imported and used in other components.

export const ON_LOGIN = 'memos/ON_LOGIN';
export const ON_MEMO_ADD = 'memos/ON_MEMO_ADD';
export const ON_MEMO_DELETE = 'memos/ON_MEMO_DELETE';
export const ON_MEMO_SELECT = 'memos/ON_MEMO_SELECT';
export const ON_MEMO_EDIT = 'memos/ON_MEMO_EDIT';

const initState = {
    isLoggedIn: false,
    memoList: [],
    selectedMemo: null
}

// //Example below. Type is required, value us "optional". Value provides any additional info needed for the action.
// const action = {
//     type: ON_MEMO_ADD,
//     value: ''
// }

//A reducer function MUST ALWAYS RETURN THE STATE (since it's purpose is to update the state)
// return: ...state is the current state, and memoList is adding the new action (memo object) TO the current state.
//Default is always the last argument in the switch statement.
// action.creds here is just taking the place of the 'value' property of the action object.

export function reducer(state = initState, action) {
    switch (action.type) {
        case ON_LOGIN:
            return {
                ...state,
                isLoggedIn: action.creds.username === 'admin'
                    && action.creds.password === 'pass'
            }
        case ON_MEMO_ADD:
            return {
                ...state,
                memoList: [
                    ...state.memoList,
                    action.memo
                ]
            }
        case ON_MEMO_DELETE:
            return {
                ...state,
                memoList: state.memoList.filter(cMemo => cMemo.id !== action.value.id)
            }
        case ON_MEMO_SELECT:
            return {
                ...state,
                selectedMemo: action.value,
            }
        case ON_MEMO_EDIT:
            return {
                ...state,
                selectedMemo: null,
                memoList: state.memoList.map((memo) => {
                    if (action.value.id === memo.id) {
                        return action.value
                    }

                    return memo;
                })

            }
        default:
            return {
                ...state
            }
    }
}
// IN SWITCH RETURN: 1. copy the current state
// IN SWITCH RETURN: 2. paste in the change to state desired and any functions necessary.