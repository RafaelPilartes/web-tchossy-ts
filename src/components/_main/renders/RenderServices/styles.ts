import styled, { keyframes } from 'styled-components'

export const CardContainer = styled.div`
  flex: 1;
  flex-basis: calc(100% / 4);
  position: relative;
  max-width: 26rem;
  min-width: 18rem;

  border-radius: 0 0 0.8rem 0.8rem;

  transition: ease 0.46s;

  .containerImg {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    min-height: 20rem;
    object-fit: cover;
    overflow: hidden;

    img.bg-img {
      width: 100%;
      height: auto;
      min-height: 20rem;
      object-fit: cover;
      overflow: hidden;
    }

    .shadow {
      position: absolute;
      left: 0;
      top: 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      opacity: 0;

      width: 100%;
      height: 70%;
      background-color: #0e3121b4;
      transition: ease 0.46s;
    }
    .details {
      position: absolute;
      left: 0;
      top: 0;

      display: flex;
      gap: 1.5rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      opacity: 0;

      width: 100%;
      height: 70%;
      padding: 1rem 1.8rem;
      transition: ease 0.56s;

      color: ${({ theme }) => theme.colors['base-white']};
      font-family: 'Mulish', sans-serif;
      text-align: center;

      span.bgIcon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding: 1rem;
        border-radius: 0.4rem;
        background-color: ${({ theme }) => theme.colors['brand-primary']};

        img {
          width: 3.2rem;
        }
      }
    }
  }

  .containerFloat {
    width: 90%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    position: absolute;
    bottom: -2.6rem;
    left: 0;
    right: 0;
    margin: 0 auto;

    z-index: 20;
    transition: ease 0.46s;

    .containerInfo {
      width: 100%;
      height: auto;
      border-radius: 0.8rem;

      background-color: ${({ theme }) => theme.colors['base-white']};

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 0.9rem;
      padding: 0.9rem 1rem;
      text-align: left;

      transition: ease 0.5s;

      span.normalIcon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
          width: 3.2rem;
        }
      }

      h2 {
        font-size: 1.3rem;
        font-weight: 800;
        transition: ease 0.5s;
        font-family: 'Mulish', sans-serif;
        color: ${props => props.theme.colors['base-title']};

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      -webkit-box-shadow: 0px 9px 31px -11px rgba(0, 0, 0, 0.29);
      -moz-box-shadow: 0px 9px 31px -11px rgba(0, 0, 0, 0.29);
      box-shadow: 0px 9px 31px -11px rgba(0, 0, 0, 0.29);
    }
  }

  :hover {
    .shadow {
      height: calc(100% - 0.2rem);
      opacity: 1;
    }
    .details {
      height: calc(100% - 0.2rem);
      opacity: 1;
    }
    .containerFloat {
      opacity: 0;
      bottom: 2.6rem;
      z-index: -2;
    }
  }
`
