import {Memo} from "../memo/Memo";
import {Accordion} from "react-bootstrap";
import {useSelector} from "react-redux";

// USESELECTOR: 'state' here in the useSelector function is the current state, and we want it to return the current memoList, which is
// then stores in the 'list' variable to be used and accessed elsewhere in this component.

export function MemoList({onEditSelect, onDelete, _Memo = Memo}) {

    const list = useSelector((state) => {return state.memoList})

    function sortMemoList(a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    }

    const pendingList = list.filter(m => !m.finished)
    const finishedList = list.filter(m => m.finished)

    return <>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Pending</Accordion.Header>
                <Accordion.Body>
                    {
                        pendingList.sort(sortMemoList)
                            .map((memoData, idx) => {
                                return <div key={idx} className={'m-3'}>
                                        <_Memo memo={memoData} onEditSelect={onEditSelect} onDelete={onDelete}/>
                                    </div>
                                }
                            )
                    }
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Finished</Accordion.Header>
                <Accordion.Body>
                    {
                        finishedList.sort(sortMemoList)
                            .map((memoData, idx) => {
                                    return <div key={idx} className={'m-3'}>
                                        <_Memo memo={memoData} onEditSelect={onEditSelect} onDelete={onDelete}/>
                                    </div>
                                }
                            )
                    }
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </>
}

// .map will be looking for 'key' on the first element, which is now <div> instead of within <_Memo...>.

// 1. Add Delete button to Memo.js
// 2. Add onDelete to MemoList component since it's part of the chain up to App.js to tell the onDelete prop what function to execute.
// 3. Create onDelete function in App.js. Add to the MemoList comp called in App.js
// 4. Add onDelete prop to the MemoList component itself, since it's now been defined in App.js return.
// 5. So now, whenever Memo component is rendered (as above), it will look to Memo.js to reference what should be executed by 'onDelete'.