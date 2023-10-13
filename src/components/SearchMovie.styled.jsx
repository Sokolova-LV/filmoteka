import styled from "@emotion/styled";

export const Form = styled.form`
    max-width: 300px;
    margin: 64px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 3px;
`;

export const Button = styled.button`
    background-color: #FF69B4;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;

    :hover,
    :focus {
        background-color: #8A2BE2;
        cursor: pointer;
    };
`;