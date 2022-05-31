import './App.css';
import {useState} from "react";
import {Login} from "./components/login/Login";
import {MemoAdd} from "./components/memo-add/MemoAdd";
import {MemoList} from "./components/memo-list/MemoList";
import {MemoEdit} from "./components/memo-edit/MemoEdit";

function App(props) {
    const {
        _isLoggedIn = false,
        _selectedMemo = null,
        _Login = Login,
        _MemoAdd = MemoAdd,
        _MemoList = MemoList,
        _MemoEdit = MemoEdit,

    } = props;

    const [isLoggedIn, setIsLoggedIn] = useState(_isLoggedIn)
    const [memoList, setMemoList] = useState([])
    const [selectedMemo, setSelectedMemo] = useState(_selectedMemo);

    function onLogin(creds) {
        if (creds.username === 'admin' && creds.password === 'pass') {
            setIsLoggedIn(true)
        }
    }

    function onMemoAdd(memo) {
        setMemoList([
            ...memoList,
            memo
        ])
    }

    function onEditSelect(memo) {
        setSelectedMemo(memo)
    }

    function onDelete(memo) {
        setMemoList(
            memoList.filter(cMemo => cMemo.id !== memo.id)
        );
    }

    function onMemoEdit(newMemo) {
        setSelectedMemo(null)
        setMemoList(
            memoList.map((memo) => {
                    if (memo.id !== newMemo.id) {
                        return memo
                    }

                    return newMemo
            })
        )
    }

    if (!isLoggedIn) {
        return <_Login onSubmit={onLogin}/>
    }

    if (selectedMemo) {
        return <_MemoEdit memo={selectedMemo} onSubmit={onMemoEdit}/>
    }

    return <>
        <_MemoAdd onMemoAdd={onMemoAdd}/>
        <_MemoList list={memoList} onEditSelect={onEditSelect} onDelete={onDelete}/>
    </>
}

export default App;


// onEditSelect above:  //This is just setting the selected memo to the memo data being passed as 'memo' here;

// The 'memo' data is passed in onDelete function bc called for in Memo.js. Need to pass this function to memoList,
// to remove the post from the list.

// "onMemoEdit" EXPLANATION: .map is looping over the existing memos, and if the id of the memo that was just edited
// doesn't match, the original memo will be shown. If the ids DO match, it will return newMemo.