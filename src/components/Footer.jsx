
import Navbar from "react-bootstrap/Navbar";

function Footer(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <p>Tracking things since &copy;{props.copyright}</p>
            </Navbar.Brand>
        </Navbar>
    );
}

export default Footer;
