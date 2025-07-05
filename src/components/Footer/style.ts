import styled from "styled-components";

export const FooterContainer = styled.footer`
  border-style: solid;
  border-width: 1px 0px 1px 0px;
  border-color: ${({ theme }) => theme.colors.footerDivider};
  display: flex;
  margin: 0 auto;
  max-width: 1366px;

  padding: 48px 0px;

  img {
    margin-right: 119px;
  }

  nav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 110px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    
    width: 90%;
    padding-top: 24px;

    img {
      display: none;
    }

    nav {
      display: grid;
      grid-gap: 16px;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export const UlLink = styled.ul`

  h2 {
    font-family: ${({ theme }) => theme.headline.family};
    font-size: ${({ theme }) => theme.roboto.large};
    color: ${({ theme }) => theme.colors.black};
    font-weight: 700;

    margin-bottom: 24px;
  }

  li {
    margin-right: 24px;
    margin-bottom: 20px;

    a {
      text-decoration: none;
      font-family: ${({ theme }) => theme.headline.family};
      font-size: ${({ theme }) => theme.roboto.smallMd};
      color: ${({ theme }) => theme.colors.footerBlack};
      font-weight: 400;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    h2 {
      font-size: ${({ theme }) => theme.roboto.base};
    }

    a {
      text-decoration: none;
      font-size: ${({ theme }) => theme.roboto.small};
    }
  }
`;

export const FooterCopy = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  padding-top: 48px;

  p {
    font-family: ${({ theme }) => theme.headline.family};
    font-size: ${({ theme }) => theme.roboto.small};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.footerCopyGray};
    padding-bottom: 8px;
  }

  .copy {
    padding-top: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {

    width: 90%;
    padding-top: 24px;

    p {
      font-size: ${({ theme }) => theme.roboto.small};
      font-weight: 400;
      max-width:326px;
    }

    .copy{
        padding-top:24px;
    }
  }
`;
