import React from 'react';
import { Navbar, Card, Button, Container, Nav } from "react-bootstrap";

export default function App() {
    return (
    <>
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">My Application</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <h1 className="mt-4 text-center">Title</h1>
                <Card className="mt-4" id="home">
                    <Card.Body>
                        <Card.Title>Home</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Bibendum arcu vitae elementum curabitur vitae nunc. Aliquam eleifend mi in nulla posuere sollicitudin. Quis lectus nulla at volutpat diam. Lectus nulla at volutpat diam ut venenatis. Eu scelerisque felis imperdiet proin fermentum. Dignissim sodales ut eu sem integer vitae justo. Aliquet nec ullamcorper sit amet risus nullam eget. Elementum eu facilisis sed odio morbi. Blandit libero volutpat sed cras. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Vulputate sapien nec sagittis aliquam malesuada bibendum. Velit sed ullamcorper morbi tincidunt ornare. Scelerisque varius morbi enim nunc faucibus a pellentesque. Malesuada pellentesque elit eget gravida cum. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique.
                        </Card.Text>
                        <Button variant="primary">En savoir plus</Button>
                    </Card.Body>
                </Card>
                <Card className="mt-4" id="about">
                    <Card.Body>
                        <Card.Title>About</Card.Title>
                        <Card.Text>
                        Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Ut faucibus pulvinar elementum integer enim. Vitae et leo duis ut diam quam nulla. Aliquet porttitor lacus luctus accumsan tortor. Quis varius quam quisque id diam vel quam elementum pulvinar. Vel eros donec ac odio tempor orci. Scelerisque purus semper eget duis at tellus at urna. Id semper risus in hendrerit. Nibh tortor id aliquet lectus proin. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Vulputate eu scelerisque felis imperdiet. Lorem ipsum dolor sit amet. Arcu ac tortor dignissim convallis aenean. Rhoncus aenean vel elit scelerisque mauris pellentesque. Sociis natoque penatibus et magnis.
                        </Card.Text>
                        <Button variant="primary">En savoir plus</Button>
                    </Card.Body>
                </Card>
                <Card className="mt-4" id="contact">
                    <Card.Body >
                        <Card.Title>Contat</Card.Title>
                        <Card.Text>
                        Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Turpis cursus in hac habitasse platea dictumst. Libero enim sed faucibus turpis in eu. Interdum posuere lorem ipsum dolor sit amet consectetur. Ut consequat semper viverra nam libero justo laoreet sit amet. Duis ultricies lacus sed turpis tincidunt id aliquet. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Quam lacus suspendisse faucibus interdum posuere lorem. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Sit amet dictum sit amet justo donec enim diam vulputate. Amet facilisis magna etiam tempor orci eu lobortis elementum. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Id porta nibh venenatis cras sed felis eget. Imperdiet sed euismod nisi porta lorem mollis. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. In egestas erat imperdiet sed euismod nisi porta. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Ornare quam viverra orci sagittis eu volutpat odio facilisis. Odio eu feugiat pretium nibh ipsum consequat.
                        </Card.Text>
                        <Button variant="primary">En savoir plus</Button>
                    </Card.Body>
                </Card>

            </Container>
        </div>
    </>
    );
}