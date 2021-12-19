import React from 'react';
import { Button, Container, Menu, MenuHeader, MenuMenu } from 'semantic-ui-react';


export default function NavBar() {
    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt='logo'/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activites'/>
                <Menu.Item>
                    <Button positivie content='Create Actiity'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}