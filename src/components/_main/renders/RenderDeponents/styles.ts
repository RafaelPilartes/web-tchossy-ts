import styled, { keyframes } from 'styled-components'

export const CardContainer = styled.div`
  flex: 1;
  position: relative;

  max-width: 28rem;
  min-width: 20rem;

  padding: 2rem 1rem;

  background-color: ${({ theme }) => theme.colors['base-white']};
  background-image: url('backgrounds/bg-khow-us.png');
  background-repeat: no-repeat;
  background-size: cover;

  box-shadow: 0px 5px 30px 0px rgba(88, 88, 88, 0.092);

  transition: 0.5s ease;
  overflow: hidden;

  .containerRenderDeponents {
    position: relative;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    .containerImg {
      position: relative;
      display: flex;

      width: 8rem;
      max-height: 8rem;

      border-radius: 10rem;
      border: 0.2rem solid ${({ theme }) => theme.colors['brand-primary']};
      object-fit: cover;
      overflow: hidden;

      img {
        width: 100%;
        border-radius: 10rem;
        padding: 0.4rem;
      }
    }

    .contentBase {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;

      h4 {
        font-size: 1.48rem;
        color: ${props => props.theme.colors['base-title']};
        text-transform: capitalize;
        text-align: center;
        transition: ease 0.5s;
      }
    }

    .contentDeponents {
      display: flex;
      flex-direction: row;

      p {
        font-size: 1.12rem;
        font-weight: 400;
        line-height: 2rem;
        color: ${props => props.theme.colors['base-text']};
        transition: ease 0.5s;
      }
    }
  }

  ::before {
    position: absolute;
    content: '';
    left: 0%;
    top: 0;
    width: 0%;
    height: 100%;
    z-index: 1;
    transition: 0.3s ease;

    background-color: ${({ theme }) => theme.colors['brand-primary']};
  }

  :hover {
    transform: scale(1.02);

    ::before {
      width: 2%;
    }
  }
`
