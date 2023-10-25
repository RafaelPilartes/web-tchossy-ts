import styled from 'styled-components'
import { NavLink } from '../../../components/NavLink'

export const AffiliatesStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  .container {
    width: 95%;
    max-width: 1390px;

    display: flex;
    padding: 3rem 2rem;
    margin: 2rem 0;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;

    @media (max-width: 1349px) {
      width: 100%;
    }

    @media (max-width: 780px) {
      flex-direction: column;
    }
  }
`

export const ContainerAffiliates = styled.div`
  width: 100%;
  margin: 6rem 0rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2.6rem;
  flex-flow: row wrap;

  img {
    max-width: 36rem;
  }

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

  .containerSectionMaxWidth {
    max-width: 1210px;

    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    gap: 2.6rem;

    img {
      max-width: 600px;
    }
  }

  .section1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2.6rem;

    padding: 2rem 1.4rem;

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

        p {
          font-size: 1.06rem;
          font-weight: 400;
          line-height: 1.8rem;
        }

        ul {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          margin-bottom: 1.6rem;

          li {
            font-size: 0.96rem;
            color: ${({ theme }) => theme.colors['base-text']};
            font-weight: 400;

            display: flex;
            flex-direction: row;
            gap: 0.6rem;

            strong {
              color: ${({ theme }) => theme.colors['base-title']};
            }
            svg {
              margin-top: 0.4rem;
              color: ${({ theme }) => theme.colors['brand-primary']};
            }
          }
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

  .section2 {
    width: 100%;
    background-color: #fafafa;

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
          color: ${({ theme }) => theme.colors['brand-primary']};
        }
      }

      .containerBenefits {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1.2rem;
      }
    }
  }

  .exploreUs {
    width: 100%;
    position: relative;
    padding: 1rem 2rem;
    background-image: url('https://media.istockphoto.com/id/1390650720/photo/digital-network-connection-abstract-connection-of-dots-and-lines-technology-background-plexus.jpg?b=1&s=170667a&w=0&k=20&c=SUkUz3EzbbcC25vGSHdV_9MxR0Mun8giVcuHoyOKwDo=');
    background-size: cover;
    background-repeat: no-repeat;
    margin-top: -2.6rem;
    overflow: hidden;

    .containerLinesLeft {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      transform: rotate(30deg);

      .line1 {
        height: calc(100% + 10rem);
        width: 6rem;
        background-color: ${({ theme }) => theme.colors['brand-primary-light']};
        opacity: 0.4;
      }
      .line2 {
        height: calc(100% + 10rem);
        width: 6rem;
        background-color: ${({ theme }) => theme.colors['brand-secondary']};
        opacity: 0.3;
      }
    }

    .containerLinesRight {
      position: absolute;
      right: 10rem;
      top: 2rem;
      height: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      transform: rotate(30deg);

      .line1 {
        height: calc(100% + 14em);
        width: 6rem;
        background-color: ${({ theme }) => theme.colors['brand-primary-light']};
        opacity: 0.4;
      }
      .line2 {
        height: calc(100% + 18rem);
        width: 6rem;
        background-color: ${({ theme }) => theme.colors['brand-secondary']};
        opacity: 0.3;
      }

      @media (max-width: 673px) {
        display: none;
      }
    }

    .containerLinesRightInvert {
      position: absolute;
      right: -6rem;
      top: 2rem;
      height: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      transform: rotate(-30deg);

      .line1 {
        height: calc(100% + 14em);
        width: 10rem;
        background-color: ${({ theme }) => theme.colors['brand-primary-light']};
        opacity: 0.2;
      }

      @media (max-width: 673px) {
        display: none;
      }
    }

    .contentExploreUs {
      position: relative;

      width: 100%;
      max-width: 1210px;
      padding: 5rem 0rem;
      margin: 0 auto;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 5rem;

      div {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h3 {
          color: ${({ theme }) => theme.colors['base-white']};
          font-size: 1rem;
          font-weight: 400;
          max-width: 700px;
        }
        h1 {
          color: ${({ theme }) => theme.colors['base-white']};
          font-size: 2rem;
          font-weight: 700;
        }
      }
    }
  }

  .section3 {
    width: 100%;
    padding: 2rem 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
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
        color: ${({ theme }) => theme.colors['base-title']};
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
          font-weight: 400;
          line-height: 1.8rem;
          color: ${({ theme }) => theme.colors['base-text-bold']};
        }
      }
    }

    img {
      max-width: 38rem;
      max-height: 30rem;

      border-radius: 1rem;
    }
  }

  .section4 {
    width: 100%;
    background-color: #fafafa;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

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
          color: ${({ theme }) => theme.colors['brand-primary']};
        }
      }

      .containerTypesWebsite {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 2.6rem;
      }
    }
  }
`
