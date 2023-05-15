import { Input, Button, GridItem } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom';

export function Header() {
    const topBarStyle = {
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
    const searchbarStyle = {
        padding: '10px',
        borderRadius: '50px'
    }
    const textStyle = {
        fontFamily: "'Inter', sans-serif",
        fontSize: "40px"
      };
    const navigate = useNavigate();
    const handleLogin = () => {
      navigate('/login');
    };
    return (
        <div className="topBar" style={topBarStyle}>
            <p style={textStyle}>uniBlind</p>
            <div style={{ width: '30px' }}></div>
            <Input placeholder='Search' style={searchbarStyle}/>
            <div style={{ width: '30px' }}></div>
            <Link to={'/login'}>
                <Button colorScheme='teal' variant='outline' onClick={handleLogin}>
                    Login
                </Button>
            </Link>
        </div>
    )
}