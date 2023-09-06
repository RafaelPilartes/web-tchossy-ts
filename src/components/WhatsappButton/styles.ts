import styled, { css } from 'styled-components'

export const BaseBtnContainer = styled.a`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 40;

  cursor: pointer;

  img {
    width: 5rem;
    animation: btn-whatsapp 2.6s ease infinite;
  }

  :hover {
    animation: btn-whatsapp 0.6s ease infinite;
  }

  @keyframes btn-whatsapp {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.06);
    }
    100% {
      transform: scale(1);
    }
  }
`
