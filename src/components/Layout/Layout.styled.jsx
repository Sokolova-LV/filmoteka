import styled from "@emotion/styled";
import mobileImage from '../../img/header/mobile-1x.jpg';
import tabletImage from '../../img/header/tablet-1x.jpg';
import desktopImage from '../../img/header/desktop-1x.jpg';
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    height: 230px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${mobileImage});

    @media (min-width: 768px) {
        height: 216px;
        background-image: url(${tabletImage});
    };

    @media (min-width: 1280px) {
        max-width: 1600px;
        height: 216px;
        margin: 0 auto;
        background-image: url(${desktopImage});
    };
`;

export const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 40px;

    @media (min-width: 768px) {
        align-items: baseline;
    }
`;

export const MainTitle = styled.h1`
    display: none;

    @media (min-width: 768px) {
        display: block;
        padding-left: 64px;
        font-family: 'Roboto', sans-serif;
        font-size: 30px;
        font-weigth: 500;
        text-align: center;
        font-style: normal;
        line-height: normal;
        color: #ffffff;
    };
`;

export const List = styled.ul`
    margin: auto;    
    margin-right: 20px;    
    display: flex;
    align-items: baseline;
    list-style: none;
    gap: 40px;
    
    @media (min-width: 768px) {
        margin-right: 64px;
    }
`;

export const Item = styled.li`

`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;

    &.active {
        text-decoration: underline #ff001b 3px;
    };
`;

export const Title = styled.p`
    font-family: 'Roboto', sans-serif;    
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    font-style: normal;
    line-height: normal;
    text-transform: uppercase;
    color: #ffffff; 
    
    :hover,
    :focus {
        text-decoration: underline #ff001b 3px;
`;