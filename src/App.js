import './App.css';
import {Login} from "./components/login/Login";
import {MemoAdd} from "./components/memo-add/MemoAdd";
import {MemoList} from "./components/memo-list/MemoList";
import {MemoEdit} from "./components/memo-edit/MemoEdit";
import {useSelector} from "react-redux";

function App(props) {
    const {
        _Login = Login,
        _MemoAdd = MemoAdd,
        _MemoList = MemoList,
        _MemoEdit = MemoEdit,

    } = props;

    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const selectedMemo = useSelector((state) => state.selectedMemo);


        if (!isLoggedIn) {
            return <div className={'d-flex justify-content-center p-5'}>
                <_Login/>
            </div>
        }

        if (selectedMemo) {
            return <_MemoEdit/>
        }

        return <>
            <_MemoAdd/>
            <_MemoList/>
        </>
}

export default App;


// onEditSelect above:  //This is just setting the selected memo to the memo data being passed as 'memo' here;

// The 'memo' data is passed in onDelete function bc called for in Memo.js. Need to pass this function to memoList,
// to remove the post from the list.

// "onMemoEdit" EXPLANATION: .map is looping over the existing memos, and if the id of the memo that was just edited
// doesn't match, the original memo will be shown. If the ids DO match, it will return newMemo.