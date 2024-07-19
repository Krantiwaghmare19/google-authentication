import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';

const linkStyle = {
    textDecoration: 'none',
    color: 'inherit'
};

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>

                {/* <Button color="inherit">
                    <Link to="/" style={linkStyle}>
                        Home
                    </Link>
                </Button> */}
                <Button color="inherit">
                    <Link to="/login" style={linkStyle}>
                        Login
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;