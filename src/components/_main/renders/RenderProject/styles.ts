import styled, { keyframes } from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  flex: 1;
  position: relative;

  max-width: 26rem;
  min-width: 20rem;
  height: 28rem;

  cursor: pointer;

  transition: ease 0.46s;

  object-fit: cover;
  overflow: hidden;

  img {
    position: absolute;
    right: -10rem;

    height: 100%;
    margin: auto 0;

    transition: 0.5s ease;

    z-index: 1;
  }

  .mask {
    opacity: 0;
    -webkit-transition: 0.5s;
    transition: 0.44s;

    background: linear-gradient(
      0deg,
      ${props => props.theme.colors['brand-primary']} 0%,
      ${props => props.theme.colors['brand-secondary']} 65%
    );
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;

    width: 100%;
    height: 10%;

    z-index: 3;
  }
  .subMask {
    background: linear-gradient(
      0deg,
      ${props => props.theme.colors['brand-primary']} 0%,
      rgba(104, 255, 167, 0.2) 35%,
      rgba(0, 0, 0, 0.2) 75%
    );
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    transition: 0.5s ease;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  .shadow {
    background: linear-gradient(
      0deg,
      ${props => props.theme.colors['brand-secondary-dark']} 0%,
      rgba(0, 0, 0, 0.2) 65%
    );
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .containerInfoMask {
    bottom: -4rem;
    left: 0;
    opacity: 0;
    transition: 0.1s opacity, 0.5s bottom;

    .containerArrow {
      background-color: ${props => props.theme.colors['base-white']};

      svg {
        color: ${props => props.theme.colors['brand-primary']};
      }
    }
  }
  .containerInfo {
    bottom: 0;
    left: 0;

    transition: 0.6s ease;

    .containerArrow {
      svg {
        color: ${props => props.theme.colors['base-white']};
      }
    }
  }

  .containerInfo,
  .containerInfoMask {
    position: absolute;

    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.4rem;
    padding: 1.4rem 2.4rem;
    text-align: left;

    z-index: 20;

    h3 {
      font-size: 0.9rem;
      text-align: start;
      transition: ease 0.5s;
      font-weight: 400;
      color: ${props => props.theme.colors['base-white']};
      font-family: 'Space Grotesk', sans-serif;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    h2 {
      font-size: 1.6rem;
      text-transform: capitalize;
      text-align: start;
      transition: ease 0.5s;
      color: ${props => props.theme.colors['base-white']};
      font-family: 'Space Grotesk', sans-serif;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .containerArrow {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-top: 2rem;

      width: 3.8rem;
      height: 3.8rem;
      border-radius: 100%;
      border: 0.1rem solid ${props => props.theme.colors['base-white']};

      svg {
        font-size: 1.6rem;
      }
    }
  }

  :hover {
    img {
      transform: scale(1.06);
      filter: blur(0.2rem);
      -webkit-filter: blur(0.2rem);
    }

    .mask {
      opacity: 0.6;

      width: 100%;
      height: 100%;
    }
    .subMask {
      opacity: 0.4;
    }
    .containerInfo {
      opacity: 0;
    }
    .containerInfoMask {
      opacity: 1;
      bottom: 0rem;
      transition-delay: 0.6s;
    }

    h3 {
      color: ${props => props.theme.colors['base-white']};
    }
  }
`
