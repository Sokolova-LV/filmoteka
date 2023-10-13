import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Header, List, Item, Title } from './Layout.styled';

const Layout = () => {
    return (
        <div>
            <Header>
                <List>
                    <Item>
                        <NavLink to='/'>
                            <Title>Home</Title>
                        </NavLink>
                    </Item>
                    <Item>
                        <NavLink to='/movies'>
                            <Title>Movies</Title>
                        </NavLink>
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