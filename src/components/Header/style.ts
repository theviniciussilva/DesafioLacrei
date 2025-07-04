import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.gradient};
  padding: 24px;
  /* position: sticky; */

  .headerWrapper {
    margin: 0 auto;
    max-width: 1366px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .buttonWrapper {
    display: flex;

    li {
      margin-right: 24px;
    }
    .button_mobile {
        display: none;
      }
  }

  .tokenWrapper {
    position: absolute;
    top: 65px;
    left: 0;

    display: flex;
    justify-content: flex-end;

    margin-top: 24px;
    width: 100%;
    height: 148px;

    .token {
      position: relative;
      top: 0;
      right: 354px;

      width: 240px;
      padding: 16px;

      border: 1px solid ${({ theme }) => theme.colors.grayBorder};
      border-radius: 8px;

      .label {
        display: grid;
        height: 100%;

        .divider {
          height: 1px;
          padding: 10px;
          border-bottom: solid 1px ${({ theme }) => theme.colors.grayBorder};
        }

        &_container {
          border: none;
          border-left: solid 4px transparent;
          display: flex;
          align-items: center;
          background-color: transparent;

          &:focus {
            outline: 3px solid ${({ theme }) => theme.colors.buttonFocus};
          }

          font-family: ${({ theme }) => theme.roboto.family};
          font-weight: 400;

          img {
            margin-right: 12px;
            margin-left: 8px;
          }

          &:hover {
            cursor: pointer;
            border-left: solid 4px ${({ theme }) => theme.colors.greenHovered};
            background-color: ${({ theme }) => theme.colors.popoverHover};
          }
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .buttonWrapper {
      .button_one {
        display: none;
      }
      .button_two {
        display: none;
      }
       .button_three {
        display: none;
      }
      .button_mobile {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;

        button{
          img{
            margin: 0;
          }
        }
      }
    }

    .tokenWrapper {
      .token {
        right: 20px;
        width: 212px;
        height: 150px
      }
    }
  }
`;
