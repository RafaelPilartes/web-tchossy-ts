import styled, { keyframes } from 'styled-components'

export const CardContainer = styled.div`
  flex: 1;
  position: relative;

  max-width: 28rem;
  min-width: 20rem;

  padding: 2rem 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors['brand-secondary']};

  background-color: ${({ theme }) => theme.colors['base-white']};
  background-image: url('backgrounds/bg-khow-us.png');
  background-repeat: no-repeat;
  background-size: cover;

  transition: 0.5s ease;
  overflow: hidden;

  .containerRenderDomain {
    position: relative;
    padding: 1rem;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    .containerImg {
      position: relative;
      display: block;

      object-fit: cover;
      overflow: hidden;

      img {
        width: 100%;
        max-width: 6rem;
        max-height: 6rem;
      }
    }

    .contentBase {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.4rem;
      flex-wrap: wrap;

      h4 {
        font-size: 1.38rem;
        color: ${props => props.theme.colors['brand-primary']};
        text-transform: capitalize;
        text-align: center;
        transition: ease 0.5s;
      }
      p {
        color: ${props => props.theme.colors['base-title']};
      }
    }

    .contentDomain {
      display: flex;
      flex-direction: row;

      p {
        font-size: 0.9rem;
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
