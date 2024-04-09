import {faSnapchat} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import {Outlet, useNavigate} from 'react-router-dom';

const AppLayout = () => {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();
    const searchByKeyword = (e) => {
        e.preventDefault();
        // url 바꿔주기
        navigate(`/movies?q=${keyword}`);
    };
    return (
        <div>
            <Navbar bg='dark' data-bs-theme='dark' expand='lg' className='bg-body-tertiary'>
                <Container fluid>
                    <Navbar.Brand href='/'>
                        <FontAwesomeIcon icon={faSnapchat} style={{color: '#f50025'}} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbarScroll' />
                    <Navbar.Collapse id='navbarScroll'>
                        <Nav className='me-auto my-2 my-lg-0' style={{maxHeight: '100px'}} navbarScroll>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/movies'>Movies</Nav.Link>
                        </Nav>
                        <Form className='d-flex' onSubmit={searchByKeyword}>
                            <Form.Control
                                type='search'
                                placeholder='Search'
                                className='me-2'
                                aria-label='Search'
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                            <Button variant='outline-danger' type='submit'>
                                Search
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* route 해준 자식들을 보여줄 수 있는 Outlet */}
            <Outlet />
        </div>
    );
};

export default AppLayout;
