import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {Button} from "react-bootstrap";

export function MemoInput(props) {

    const emptyForm = {
        id: uuidv4(),
        title: '',
        desc: '',
        date: new Date(),
        finished: false
    };

    const {
        onSubmit,
        memo = emptyForm
    } = props

    const [formState, setFormState] = useState(memo);

    function onFormSubmit(event) {
        event.preventDefault();
        console.log(formState);
        onSubmit({...formState});
        setFormState(emptyForm)
    }

    function onTitleChange(event) {
        setFormState({
            ...formState,
            title: event.target.value
        })
    }

    function onDescChange(event) {
        setFormState({
            ...formState,
            desc: event.target.value
        })
    }

    function onDateChange(event) {
        setFormState({
            ...formState,
            date: new Date(event.target.value)
        })
    }

    function onFinishedChange(event) {
        setFormState({
            ...formState,
            finished: event.target.checked
        })
    }

    return <div className={'p-3'}>
        <form onSubmit={onFormSubmit}>
            <input onChange={onTitleChange} value={formState.title} type={'text'} placeholder={"Title"}/>
            <br/>
            <input onChange={onDescChange} value={formState.desc} type={'text'} placeholder={"Description"}/>
            <br/>
            <input onChange={onDateChange} value={formState.date.toISOString().substring(0,10)} type={'date'} placeholder={"Date"}/>
            <br/>
            <label>
                Finished:
                <input onChange={onFinishedChange} checked={formState.finished} type={'checkbox'}/>
            </label>
            <br/>
            <Button variant="primary" type={"submit"}>Submit</Button>{' '}
            <br/>
            <br/>
            <br/>
        </form>
    </div>
}

// onSubmit line under onFormSubmit: //Where new memo is actually created. "Moment of creation", where 'id' needs to be added.
// uuidv = imported f/npm packages online. Add here not above bc initial state is static, need new per memo addition.