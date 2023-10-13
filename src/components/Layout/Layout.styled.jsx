import styled from "@emotion/styled";

export const Header = styled.header`
    height: 100px;
    padding: 24px 24px;
    text-align: center;
    box-shadow: 0px 4px 4px #E6E6FA;
`;

export const List = styled.ul`
    display: flex;
    list-style: none;
    gap: 40px;
`;

export const Item = styled.li`
    
`;

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 500;
    color: #FF69B4;

    :hover,
    :focus {
        color: #8A2BE2;
        cursor: pointer;
    };
`;