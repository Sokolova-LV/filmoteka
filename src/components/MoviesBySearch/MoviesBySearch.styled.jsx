import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
    
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px;

    @media (min-width: 768px) {
        margin-top: 60px;
        gap: 32px;
    };

    @media (min-width: 1280px) {
        gap: 16px;
    };
`;

export const Item = styled.li`
    
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const Image = styled.img`
    width: 280px;
    height: 402px;

    @media (min-width: 768px) {
        width: 336px;
        height: 455px;
    };

    @media (min-width: 1280px) {
        width: 395px;
        height: 574px;
    };
`;

export const Title = styled.h3`
    width: 280px;
    margin-top: 8px;
    font-family: 'Roboto';
    font-size: 12px;
    font-weight: 700;
    line-height: normal;
    font-style: normal;
    text-transform: uppercase;
    color: #000;

    @media (min-width: 768px) {
        width: 336px;
        line-height: 16px;
    };

    @media (min-width: 1280px) {
        width: 395px;
        font-size: 20px;
        line-height: 24px;
    };
`;