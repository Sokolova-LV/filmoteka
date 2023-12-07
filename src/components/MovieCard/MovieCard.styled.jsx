import styled from "@emotion/styled";

export const Container = styled.div`
    padding: 0 50px;
`;

export const Image = styled.img`
    display: block;
    margin: auto;
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

export const Title = styled.h1`
    display: block;
    margin: 20px auto;
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 700;
    line-height: normal;
    font-style: normal;
    text-transform: uppercase;
    color: #000;

    @media (min-width: 768px) {
        font-size: 20px;
    };

    @media (min-width: 1280px) {
        font-size: 30px;
    };
`;

export const Text = styled.p`
    margin: 20px 0;
    max-width: 280px;
    text-align: justify;
    font-family: 'Roboto';
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
    font-style: normal;
    color: #000;

    @media (min-width: 768px) {
        max-width: 720px;
        font-size: 16px;
    };

    @media (min-width: 1280px) {
        max-width: 1240px;
        font-size: 28px;
    };
`;

export const Article = styled.h3`
    width: 280px;
    margin: 20px 0;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
    font-style: normal;
    text-transform: uppercase;
    color: red;

    @media (min-width: 768px) {
        width: 336px;
        font-size: 16px;
    };

    @media (min-width: 1280px) {
        width: 395px;
        font-size: 28px;
    };
`;