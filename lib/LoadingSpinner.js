import { Spinner } from 'react-bootstrap';
import './LoadingSpinner.css';

const LoadingSpinner = props => {
    return (
        <div className={(!props.hide ? 'loading-spinner-background' : 'd-none') }>
            <Spinner animation="border" variant="primary" className='loading-spinner'/>
        </div>
    )
}

export {LoadingSpinner}