import {Button, Card} from 'react-bootstrap';
import {BsFillCheckCircleFill, BsFillCircleFill} from "react-icons/bs";
import './Memo.css';

export function Memo({memo, onEditSelect, onDelete}) {
    return <Card style={{ width: '18rem'}}>
        <Card.Header as="h5">
            <span className={'text-lg-start'}><h2>{memo.title}</h2></span>
            <div className={'memo-date'}>{memo.finished ? <BsFillCheckCircleFill size={'2rem'} color={'green'}/>
                : <BsFillCircleFill size={'2rem'} color={'white'}/>}</div><br/>
            <div className={'text-sm-start'}>{memo.date?.toString().substring(0, 15)}</div>
        </Card.Header>
        <div className={'p-3'}>{memo.desc}</div>

        <Card.Footer className={'d-flex justify-content-around'}>
            <Button variant="outline-warning" onClick={() => onEditSelect(memo)}>Edit</Button>{' '}
            <Button variant="outline-danger" onClick={() => onDelete(memo)}>Delete</Button>{' '}
        </Card.Footer>
    </Card>
}


/* Could also be written:  <button onClick={(event) => onDelete(memo)}>Delete</button> note
Button has a capital B because it's a Button component COMING from Bootstrap, not the button element. */