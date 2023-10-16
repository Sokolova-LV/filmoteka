import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
    padding: 24px 64px;
    box-shadow: 0px 4px 4px #E6E6FA;
`;

export const Title = styled.h1`
    font-size: 30px;
    font-weight: 500;
    color: #FF69B4;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
`;

export const Item = styled.li`
    margin: 10px 0;
    padding: 5px 15px;
    background-color: #C0C0C0;
    border: 1px solid #1E90FF;
    border-radius: 5px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: #8000080;
`;