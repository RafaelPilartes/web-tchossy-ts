import styled, { css } from 'styled-components'

interface IBtn {
  colorBase: string
  colorSecondary: string
  textColor?: string
  textColorSecond?: string
}

export const SButton = styled.button<IBtn>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.4rem;

  transition: 0.6s ease;

  ::before {
    position: absolute;
    content: '';
    right: 0%;
    top: 0;
    width: 3%;
    height: 100%;
    z-index: 1;
    transition: 0.4s ease;
    border-end-end-radius: 0.4rem;
    border-start-end-radius: 0.4rem;

    ${({ colorSecondary }) =>
      css`
        background-color: ${colorSecondary};
      `}
  }

  :hover::before {
    width: 100%;
    border-radius: 0.4rem;
  }

  ${({ colorBase }) =>
    css`
      background-color: ${colorBase};
    `}

  span {
    position: relative;
    padding: 0.2rem 0.5rem;
    ${({ textColor }) =>
      css`
        color: ${textColor ? textColor : '#fff '};
      `}
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6rem;
    letter-spacing: 1px;
    z-index: 1;
  }

  svg {
    font-size: 1.8rem;
    ${({ textColor }) =>
      css`
        color: ${textColor ? textColor : '#fff '};
      `}
    z-index: 1;
  }

  :hover {
    span {
      ${({ textColorSecond }) =>
        css`
          color: ${textColorSecond ? textColorSecond : '#fff '};
        `}
    }
  }
`
