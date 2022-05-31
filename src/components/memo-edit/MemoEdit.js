import {MemoInput} from "../memo-input/MemoInput";

export function MemoEdit({memo, onSubmit, _MemoInput= MemoInput}) {
    return <_MemoInput memo={memo} onSubmit={onSubmit}/>
}