import {MemoInput} from "../memo-input/MemoInput";
import {useDispatch, useSelector} from "react-redux";
import {ON_MEMO_EDIT} from "../../modules/memos";

export function MemoEdit({_MemoInput= MemoInput}) {

    const memo = useSelector(state => state.selectedMemo)

    function onSubmit(memo) {
        dispatch({
            type: ON_MEMO_EDIT,
            value: memo
        })
    }

    const dispatch = useDispatch();
    return <_MemoInput memo={memo} onSubmit={onSubmit}/>
}

// Could also be written:
//     return <_MemoInput memo={memo} onSubmit={() => dispatch({type: ON_MEMO_EDIT, value: memo})}/>

// REDUX:
// 1. Make action for MEMO_EDIT in our memos. redux file
// 2. sdf
// 3.  sdf