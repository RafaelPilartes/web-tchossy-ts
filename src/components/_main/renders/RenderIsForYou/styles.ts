import styled, { keyframes } from 'styled-components'

export const CardContainer = styled.div`
  flex: 1;
  position: relative;
  max-width: 26rem;
  min-width: 18rem;

  cursor: pointer;

  border-radius: 0 0 0.8rem 0.8rem;

  transition: ease 0.46s;

  .containerContent {
    width: 90%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    z-index: 20;

    span {
      width: 3rem;
      height: 3rem;

      position: relative;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      background-color: ${({ theme }) => theme.colors['brand-primary']};

      svg {
        color: ${({ theme }) => theme.colors['base-white']};
      }
    }

    .containerInfo {
      width: 100%;
      height: auto;

      background-color: ${({ theme }) => theme.colors['base-white']};

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 0.6rem;
      padding: 1.4rem 2rem;
      text-align: left;

      transition: ease 0.5s;

      h2 {
        font-size: 1rem;
        text-transform: capitalize;
        text-align: center;
        transition: ease 0.5s;
        color: ${props => props.theme.colors['base-title']};

        margin-top: 0.8rem;

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p {
        font-size: 0.9rem;
        transition: ease 0.5s;
        color: ${props => props.theme.colors['base-title']};
      }

      -webkit-box-shadow: 0px 9px 31px -11px rgba(0, 0, 0, 0.29);
      -moz-box-shadow: 0px 9px 31px -11px rgba(0, 0, 0, 0.29);
      box-shadow: 0px 9px 31px -11px rgba(0, 0, 0, 0.29);
    }
  }

  :hover {
    .shadow {
      height: calc(100% - 0.2rem);
    }
  }
`
