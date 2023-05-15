import { Button, Divider } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { CSSProperties } from 'react';
import { NavButton } from './NavButton';
import { Link, useNavigate } from 'react-router-dom';

export function Navigation() {
    const containerStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      };
    const navigate = useNavigate();
    const handleCreatePost = () => {
      navigate('/create-post');
    };
    
    return (
        <div style={containerStyle}>
            <Link to="/create-post">
                <Button leftIcon={<EditIcon />} colorScheme="teal" variant="solid" mt={4} onClick={handleCreatePost}>
                    Create post
                </Button>
            </Link>
            <Divider height='2px' bg='gray.300' my='5' />
            <div>
                <NavButton name="General" />
                <NavButton name="Courses" />
                <NavButton name="Announcements" />
                <NavButton name="Tools" />
                <NavButton name="Career" />
            </div>
        </div>
    )
}