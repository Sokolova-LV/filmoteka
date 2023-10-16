import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, List, Item, StyledNavLink, Title } from './Layout.styled';

const Layout = () => {
    return (
        <div>
            <Header>
                <List>
                    <Item>
                        <StyledNavLink to='/'>
                            <Title>Home</Title>
                        </StyledNavLink>
                    </Item>
                    <Item>
                        <StyledNavLink to='/movies'>
                            <Title>Movies</Title>
                        </StyledNavLink>
                    </Item>
                </List>
            </Header>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    );
};

export default Layout;