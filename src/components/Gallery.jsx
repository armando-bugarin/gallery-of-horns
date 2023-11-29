
import HornedBeast from "./HornedBeast";
import Container from'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from'react-bootstrap/Col';

function Gallery(props) {
    return (
        <>
            <h2>{props.message}</h2>
            <Container>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}

export default Gallery;
