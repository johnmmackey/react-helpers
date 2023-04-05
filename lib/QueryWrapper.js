import { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { LoadingSpinner } from './LoadingSpinner';
import { useUserStore } from '../../CustomHooks/useUserStore';

const QueryWrapper = props => {
    const clearUser = useUserStore(state => state.clearUser);

    useEffect( () => {
        if(props.error && props.error.unauthenticated) {
            console.log('Unaauthed');
            clearUser();
        }
    })

    return (
        <>
            {props.status === 'idle' &&
                props.children
            }
            {props.status === 'loading' &&
                <LoadingSpinner />
            }
            {props.status === 'error' &&
                <Error error={props.error} onClose={props.resetError} />
            }
            {props.status === 'success' && props.onSuccessShowChildren &&
                props.children
            }
            {props.status === 'success' && props.onSuccessShowLoading &&
                <LoadingSpinner />
            }
        </>
    )
}


const Error = (props) =>
    <Modal show={true} onHide={props.onClose} centered size="lg">
        <Modal.Header >
            <Modal.Title className="text-danger">Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.error.severe &&
                <>
                    Oops...something went wrong - please reload the page and try again.<br />
                    Error message from server:&nbsp;
                </>
            }
            {props.error.message}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onClose}>
                {props.error.severe ? 'Reload' : 'Try Again'}
            </Button>
        </Modal.Footer>
    </Modal>



export { QueryWrapper }

