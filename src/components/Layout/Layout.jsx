import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Wrap, List, Item, StyledNavLink, MainTitle, Title } from './Layout.styled';

const Layout = () => {
    return (
        <div>
            <Header>
                <Wrap>
                <MainTitle>Filmoteka</MainTitle>
                    <List>
                    <Item>
                        <StyledNavLink to='/'>
                            <Title>Home</Title>
                        </StyledNavLink>
                    </Item>
                    <Item>
                        <StyledNavLink to='/movies'>
                            <Title>Search</Title>
                        </StyledNavLink>
                    </Item>
                    <Item>
                        <StyledNavLink to='/library'>
                            <Title>My library</Title>
                        </StyledNavLink>
                    </Item>
                    </List>
                </Wrap>
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