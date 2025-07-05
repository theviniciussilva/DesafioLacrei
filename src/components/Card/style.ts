import styled from "styled-components";

export const Section = styled.div`
  max-width: 1366px;
  margin: 48px auto;

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    img {
      border-radius: 8px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;

    .image_container {
      display: none;
    }

    .grid {
      display: block;
    }
  }
`;

export const CardAbout = styled.div`
  height: 414px;
  width: 474px;
  padding: 23px 30px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorderGray};
  border-radius: 8px;

  h2 {
    font-family: ${({ theme }) => theme.headline.family};
    font-size: ${({ theme }) => theme.headline.large};
    font-weight: 500;
    max-width: 260px;
    line-height: 100%;
    padding-bottom: 16px;
    border-bottom: 3px solid ${({ theme }) => theme.colors.greenDefault};
  }

  p {
    padding-top: 16px;
    font-family: ${({ theme }) => theme.headline.family};
    font-size: ${({ theme }) => theme.roboto.smallMd};
    color: ${({ theme }) => theme.colors.footerCopyGray};
  }

  button {
    margin-top: 16px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 2px solid;
    border-color: ${({ theme }) => theme.colors.greenDefault};
    color: ${({ theme }) => theme.colors.greenDefault};
    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.greenDefault};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;

    h2 {
      font-size: ${({ theme }) => theme.headline.base};
    }
    p {
      font-size: ${({ theme }) => theme.roboto.small};
    }
    
    button{
        height: 36px;
    }
  }
`;
