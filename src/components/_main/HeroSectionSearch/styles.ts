import styled, { css } from 'styled-components'
import { NavLink } from '../../NavLink'

interface IHero {
  backgroundImage: string
}

export const HeroContainerStyles = styled.section<IHero>`
  position: relative;
  width: 100%;
  height: 34rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  z-index: 3;

  ${({ backgroundImage }) =>
    css`
      background-image: url(${backgroundImage});
      background-size: cover;
      background-repeat: no-repeat;
    `}

  /* background-image: url('https://themerange.net/wp/montro/wp-content/uploads/2022/05/1.jpg'); */

  .containerMaxWidth {
    width: 95%;
    max-width: 750px;

    color: ${({ theme }) => theme.colors['base-white']};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.6rem;

    z-index: 3;
  }

  .containerTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1,
    h2 {
      font-size: 2.6rem;
      text-transform: uppercase;
    }
    h1 {
      font-weight: 300;
    }
  }

  .containerInput {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.9rem;

    background-color: ${({ theme }) => theme.colors['base-white']};
    border-radius: 10rem;
    padding: 0rem 0.8rem;

    input,
    select,
    button {
      border: none;
      border-radius: 0.6rem;
      background-color: #f3f1f3;
      padding: 0.6rem 0.8rem;
    }

    svg {
      color: #cfcfcf;
      font-size: 4rem;
    }
    input {
      width: 100%;
      font-size: 0.9rem;
    }
    select {
      width: 30%;
      font-size: 0.92rem;
    }
    button {
      width: 4rem;
      height: 3rem;
      border-radius: 10rem;
      background-color: ${({ theme }) => theme.colors['brand-primary']};
      display: flex;
      justify-content: center;
      align-items: center;

      :active {
        background-color: ${({ theme }) => theme.colors['brand-primary-light']};
      }

      svg {
        color: ${({ theme }) => theme.colors['base-white']};
        font-size: 1.4rem;
        border-radius: 10rem;
      }
    }
  }

  .containerTypesDomain {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 2rem;

    .typeDomain {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 0rem;

      p {
        font-size: 1.6rem;
        font-weight: 600;

        span {
          font-size: 3rem;
          font-weight: 700;
        }
        .color1 {
          color: #2090ac;
        }
        .color2 {
          color: #ac0da3;
        }
        .color3 {
          color: #212ebb;
        }
        .color4 {
          color: #46accd;
        }
        .color5 {
          color: #eda814;
        }
      }
      span {
        font-size: 0.9rem;
        font-weight: 300;
      }
    }
  }

  .containerBaseInfo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.4rem;

    p,
    span {
      font-weight: 200;
    }

    p {
      font-size: 1rem;
      font-weight: 300;
    }
    span {
      font-size: 0.8rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors['brand-primary']};
    }
  }

  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(7, 0, 41, 0.8);
  }
`
