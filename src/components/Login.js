import React, { useState } from 'react';
import { TextField, Button, Container, Box, Card, Typography, CssBaseline, IconButton, InputAdornment } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SignIn from './SignIn';

const theme = createTheme();

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if ((email === 'krantiwaghmare@gmail.com' || email === 'krantiwaghmare@navgurukul.org') && password === 'kranti@123') {
            setError('');
            alert('Login successful!');
            navigate('/home'); // Navigate to the home page
        } else {
            setError('Invalid email or password');
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3, mt: 10 }}>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>

                            <Link to="/forgot-password" style={{ textDecoration: 'none' }}>
                                <Typography
                                    variant="body2"
                                    sx={{ mt: 2, textDecoration: 'underline' }}
                                >
                                    Forgot Password?
                                </Typography>
                            </Link>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mt: 3
                        }}
                    >
                        <Typography variant="body1" sx={{ mt: 2, mb: 2, fontWeight: 'bold' }}>
                            Or Continue With
                        </Typography>
                        <SignIn />
                    </Box>
                </Card>
            </Container>
        </ThemeProvider>
    );
};

export default Login;

