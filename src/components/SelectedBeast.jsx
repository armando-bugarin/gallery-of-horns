
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function SelectedBeast(props) {
    return (
        <div>
            <Modal show={props.show} onHide={props.handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.selectedBeast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={props.selectedBeast.imageUrls} alt={props.selectedBeast.title} />
                </Modal.Body>
                <Modal.Footer>{props.selectedBeast.description}
                    <Button onClick={props.handleCloseModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default SelectedBeast;
