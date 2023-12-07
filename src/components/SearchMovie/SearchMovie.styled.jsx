import styled from "@emotion/styled";

export const Form = styled.form`
    display: flex;
    justify-content: center;
    margin: 40px auto;
    border-bottom: 1px solid #fff;
    width: 160px;

    @media (min-width: 768px) {
        min-width: 336px;
    };

    @media (min-width: 1280px) {
        min-width: 394px;
    };
`;

export const Input = styled.input`
    font-size: 16px;
    margin-right: 10px;
    min-width: 160px;
    border: 1px solid red;
    background-color: transparent;
    color: #000;

    @media (min-width: 768px) {
        min-width: 336px;
    }

    @media (min-width: 1280px) {
        min-width: 394px;
    }

    &::placeholder {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 400;
        font-style: normal;
        line-height: normal;
        color: #fff;
    };
`;

export const Button = styled.button`
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