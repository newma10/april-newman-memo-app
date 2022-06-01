import {MemoInput} from "../memo-input/MemoInput";
import {useDispatch} from "react-redux";
import {ON_MEMO_ADD} from "../../modules/memos";

export function MemoAdd({_MemoInput = MemoInput}) {
    const dispatch = useDispatch();
    function onSubmitFunc(memoData) {
        dispatch( {
            type: ON_MEMO_ADD,
            memo: memoData
        })
    }

    return <_MemoInput onSubmit={onSubmitFunc}/>
}

// useDispatch() is a built-in function in redux that gives access to the reducer
// 'memo' in line 11 is the value property for the reducer. Could be any name, but named memo here for consistency.