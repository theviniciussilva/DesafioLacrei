import styled from "styled-components";

export const ButtonDefault = styled.button`
    background-color: ${({theme}) => theme.colors.greenDefault};
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.roboto.family};

    font-weight: bold;
    font-size: ${({theme}) => theme.roboto.small};
    line-height: 120%;

    min-width: 112px;
    padding: 12px;
    border-radius: 8px;
    border: transparent;

    display: flex;
    justify-content: center;
    align-items: center;

    img{
        background-color: ${({theme}) => theme.colors.greenDefault};
        border-radius: 8px;
        margin-left: 8px;
    }

    &:hover{
        img{
            background-color: ${({theme}) => theme.colors.greenHovered};
        }
        background-color: ${({theme}) => theme.colors.greenHovered};
        cursor: pointer;
    }

    &:active{
        img{
            background-color: ${({theme}) => theme.colors.greenPressed};
        }
        background-color: ${({theme}) => theme.colors.greenPressed};
        cursor: pointer;
    }
`