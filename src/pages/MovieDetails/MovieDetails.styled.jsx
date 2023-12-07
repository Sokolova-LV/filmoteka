import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const Button = styled.button`
    display: block;
    margin: 16px auto;
    background: #fff;
    color: red;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;

    &:hover {
        background: red;
        color: #fff;
    };

    @media (min-width: 768px) {
        padding: 10px 20px;
    };
`;

export const Title = styled.h1`
    text-align: center;
    margin-top: 16px;
    font-family: 'Roboto';
    font-size: 40px;
    font-weight: 700;
    line-height: normal;
    font-style: normal;
    text-transform: uppercase;
    color: #000;
`;