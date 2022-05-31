import {Memo} from "../memo/Memo";


// list.map((memoData) => {
//     return <Memo memo={memoData}/>
// })

export function MemoList({list, onEditSelect, onDelete, _Memo = Memo}) {

    function sortMemoList(a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    }

    const pendingList = list.filter(m => !m.finished)
    const finishedList = list.filter(m => m.finished)

    return <>
        <h1>Pending</h1>
        {
            pendingList.sort(sortMemoList)
            .map((memoData, idx) => <_Memo key={idx} memo={memoData} onEditSelect={onEditSelect} onDelete={onDelete}/>)
        }
        <h1>Finished</h1>
        {
            finishedList.sort(sortMemoList)
                .map((memoData, idx) => <_Memo key={idx} memo={memoData} onEditSelect={onEditSelect} onDelete={onDelete}/>)
        }

    </>
}


// 1. Add Delete button to Memo.js
// 2.
// 3. Create onDelete function in App.js. Add to the MemoList comp called in App.js
// 4. Add onDelete prop to the MemoList component itself, since it's now been defined in App.js return.
// 5. So now, whenever Memo component is rendered (as above), it will look to Memo.js to reference what should be executed by 'onDelete'.