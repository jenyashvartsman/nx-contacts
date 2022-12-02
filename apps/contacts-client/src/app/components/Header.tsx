import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>Contacts</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
