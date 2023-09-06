import styled from 'styled-components'
import { NavLink } from '../../../components/NavLink'

export const ServiceDomainStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`

export const ContainerServiceDomain = styled.div`
  width: 100%;
  margin-top: 2.6rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2.6rem;
  flex-flow: row wrap;

  @keyframes float {
    0% {
      transform: translateY(0deg);
    }
    50% {
      transform: rotateY(150deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }

  @keyframes vibration {
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(150deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }

  .containerTitleSection {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.4rem;

    h4 {
      position: relative;

      font-size: 1rem;
      color: ${({ theme }) => theme.colors['brand-primary']};

      padding-left: 2.6rem;
      ::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto 0;

        height: 0.16rem;
        width: 2rem;
        background-color: ${({ theme }) => theme.colors['brand-primary']};
      }
    }
    h1 {
      font-size: 2.8rem;
      color: ${({ theme }) => theme.colors['base-title']};
    }
  }
  .containerHeader {
    width: 100%;

    display: flex;
    justify-content: space-between;
    flex-direction: row;

    .containerLeft {
      width: 50%;
    }

    .containerRight {
      width: 45%;

      p {
        font-size: 0.9rem;
        font-weight: 400;
        color: ${({ theme }) => theme.colors['base-text']};
        line-height: 2rem;
      }
    }

    @media (max-width: 922px) {
      flex-direction: column;
      gap: 2rem;

      .containerLeft {
        width: 100%;
      }

      .containerRight {
        width: 100%;
      }
    }
  }

  .containerSectionMaxWidth {
    max-width: 1210px;

    margin-top: 6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 3.6rem;

    img {
      max-width: 600px;
    }
  }

  .section1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2.6rem;

    @media only screen and (max-width: 1077px) {
      flex-direction: column-reverse;
      img {
        width: 100%;
      }
    }

    .descriptionSection {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      max-width: 700px;

      h1 {
        color: #0a2338;
        font-size: 2.8rem;
        font-weight: 700;

        strong {
          color: ${({ theme }) => theme.colors['brand-primary']};
        }
      }

      .contentDescriptions {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;

        p {
          font-size: 1.06rem;
          font-weight: 500;
          line-height: 1.8rem;
        }
      }
    }

    img {
      max-height: 30rem;

      :hover {
        /* animation: vibration 1.6s none; */
      }
    }
  }

  .weAreReady {
    width: 100%;

    .contentWeAreReady {
      width: 100%;
      position: relative;

      padding: 7rem 4rem;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 5rem;

      background-color: transparent;
      background-image: linear-gradient(270deg, #111111 0%, #111111 100%);

      .coverBackground {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background-image: url('https://assets.entrepreneur.com/content/3x2/2000/20150429160658-website-traffic.jpeg');
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.15;
      }

      .contentInfo {
        flex: 1;
        max-width: 52rem;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;

        z-index: 20;

        .containerIntro {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 0.2rem;

          h2 {
            color: ${({ theme }) => theme.colors['base-white']};
            font-size: 1.8rem;
            font-weight: 300;
            text-transform: uppercase;
          }
          h1 {
            color: ${({ theme }) => theme.colors['base-white']};
            font-size: 1.6rem;
            font-weight: 700;
            text-transform: uppercase;
          }
        }

        p {
          color: ${({ theme }) => theme.colors['base-white']};
          font-weight: 300;
          text-align: center;
          min-width: 6rem;
        }
      }
    }
  }

  .yourBusiness {
    width: 100%;
    background-color: ${({ theme }) => theme.colors['brand-primary']};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2.6rem;

    padding: 2rem 1.4rem 8rem 1.4rem;

    .descriptionSection {
      width: 100%;
      max-width: 1210px;
      display: flex;
      flex-direction: column;
      gap: 2.6rem;

      h1 {
        color: #0a2338;
        font-size: 2.8rem;
        font-weight: 700;

        strong {
          color: ${({ theme }) => theme.colors['base-white']};
        }
      }

      p {
        color: ${({ theme }) => theme.colors['base-white']};
      }

      .containerRowBenefices {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 3.2rem 6.2rem;

        @media only screen and (max-width: 925px) {
          .illustrationW {
            display: none;
          }
        }

        .illustrationW {
          max-height: 30rem;
        }

        .containerBenefits {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 6.2rem 1.2rem;
        }
      }
    }
  }

  .faqs {
    width: 100%;
    max-width: 1210px;
    margin: 0 auto;
    margin-bottom: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0rem;
  }
`
