import styled from "styled-components";

export const Section = styled.section`
  height: 400px;
  margin-bottom: 48px;
`;

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const HeroTitle = styled.div`
  position: absolute;
  top: 50px;
  left: 400px;

  h1 {
    font-family: ${({ theme }) => theme.headline.family};
    font-size: ${({ theme }) => theme.headline.xl};
    line-height: 150%;
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.heroTitle};
  }

  p {
    font-family: ${({ theme }) => theme.headline.family};
    font-size: ${({ theme }) => theme.headline.small};
    line-height: 120%;
    max-width: 400px;

    color: ${({ theme }) => theme.colors.heroDescription};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    left: 12px;
    top: 12px;

    h1 {
      font-size: ${({ theme }) => theme.headline.base};
      max-width: 300px;
      line-height: 100%;
      margin-bottom: 12px;
    }
    p {
      font-size: ${({ theme }) => theme.headline.smallMobile};
      max-width: 300px;
    }
  }
`;

export const HeroButton = styled.div`
  position: absolute;
  top: 300px;
  left: 400px;
  display: flex;

  button {
    margin-right: 32px;
    width: 300px;

    &:focus {
      background-color: ${({ theme }) => theme.colors.greenPressed};
      outline-color: ${({ theme }) => theme.colors.heroDescription};
      color: ${({ theme }) => theme.colors.heroDescription};
    }
  }

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 232px;
    left: 12px;

    button{
        width: 150px;
    }
   }
`;
