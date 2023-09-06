import styled from 'styled-components'

export const FooterContainerStyles = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;

  p,
  a,
  span {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.1rem;
  }

  .containerTop {
    flex: 1;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    padding: 8rem 2rem;

    /* background-image: url('/backgrounds/lines-footer1.png'); */
    background-color: #121212;
    background-image: url('/backgrounds/footer_bg.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    background-color: ${({ theme }) => theme.colors['brand-base-dark']};

    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 1rem 2rem;
      gap: 1.4rem;

      h3 {
        color: ${({ theme }) => theme.colors['base-white']};
        padding: 0 0 1.1rem 0;
        position: relative;

        ::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 1.8rem;
          height: 0.16rem;
          background-color: ${({ theme }) => theme.colors['brand-primary']};
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;

        a {
          color: ${({ theme }) => theme.colors['base-text-gray']};
          font-size: 1rem;
          list-style: none;
          padding: 0 0 0.6rem 0;
          position: relative;

          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 0.6rem;

          ::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 0.11rem;
            background-color: ${({ theme }) => theme.colors['brand-primary']};

            transition: 0.4s ease;
          }

          :hover {
            ::before {
              width: 100%;
            }
          }

          svg {
            color: ${({ theme }) => theme.colors['brand-primary']};
          }
        }
      }

      p {
        color: ${({ theme }) => theme.colors['base-text-gray']};
        font-size: 1rem;
        position: relative;
      }
    }

    .containerInfoTchossy {
      gap: 2rem;
      max-width: 24rem;

      p {
        color: ${({ theme }) => theme.colors['base-white']};
      }
      img {
        width: 80%;
        height: auto;
      }

      .containerSocialMedia {
        display: flex;
        flex-direction: row;
        gap: 1.2rem;

        span {
          width: 2.4rem;
          height: 2.4rem;
          background-color: red;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 100%;

          background-color: ${({ theme }) => theme.colors['base-white']};

          transition: 0.3s ease;

          svg {
            color: #15191e;
            font-size: 1rem;
            transition: 0.3s;
          }

          :hover {
            background-color: ${({ theme }) => theme.colors['brand-primary']};

            svg {
              color: ${({ theme }) => theme.colors['base-white']};
            }
          }
        }
      }
    }
    .containerLinks {
      max-width: 18rem;

      a {
        color: ${({ theme }) => theme.colors['base-white']};
      }
    }
    .containerNewsletter {
      max-width: 20rem;

      p {
        font-size: 0.9rem;
        color: ${({ theme }) => theme.colors['base-white']};
      }

      .containerSendNewsletter {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;

        input {
          width: 100%;
          height: 100%;
          font-size: 0.8rem;
          padding: 0.9rem 0.9rem;

          border: none;

          ::placeholder {
            font-size: 0.8rem;
          }
        }

        button {
          height: 100%;
          padding: 0.9rem 0.9rem;
          display: flex;
          flex-direction: row;
          justify-content: center;

          background-color: ${({ theme }) => theme.colors['brand-primary']};
          border: none;

          svg {
            color: ${({ theme }) => theme.colors['base-white']};
          }
        }
      }
      .containerConcordTerms {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 0.6rem;
      }
    }
    .containerContact {
      max-width: 18rem;

      a {
        color: ${({ theme }) => theme.colors['base-white']};
      }
    }
  }

  .containerBottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;

    z-index: 1;

    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    padding: 1.6rem 2rem;

    background-color: #232429;

    p {
      font-size: 1.1rem;
      font-weight: 300;
      color: ${({ theme }) => theme.colors['base-white']};
    }
  }
`
