import styled from 'styled-components'
import { NavLink } from '../../NavLink'
import { Link } from 'react-router-dom'

// background-color: red;

export const HeaderContainerStyles = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 6.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors['base-white']};
  border-bottom: 0.08rem solid #ddd;

  z-index: 99;

  .containerLogo {
    width: 18.4rem;
    min-width: 14rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;

    color: #eee;

    img {
      width: 100%;
      height: auto;
    }
  }

  .containerMenu {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 2rem;

    .containerTop {
      display: flex;
      flex-direction: row;
      align-items: center;

      border-bottom: 0.06rem solid
        ${({ theme }) => theme.colors['base-border-gray']};

      .containerLeft {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 0 0.4rem 0;

        p {
          font-size: 0.9rem;
          font-weight: 400;
          line-height: 1.2rem;
        }

        .baseInfo {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-right: 2rem;
          gap: 1.6rem;

          .containerEmail {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.6rem;

            span {
              color: ${({ theme }) => theme.colors['base-text']};
              font-size: 0.86rem;
            }

            @media (max-width: 756px) {
              display: none;
            }
          }

          .containerTime {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.6rem;

            span {
              font-size: 0.86rem;
            }

            @media (max-width: 948px) {
              display: none;
            }
          }
        }
      }
      .containerRight {
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2.6rem;
        background-color: #eee;
        padding: 0.8rem 4rem;

        svg {
          color: ${({ theme }) => theme.colors['base-black']};
          font-size: 1rem;
          transition: 0.2s;

          :hover {
            color: ${({ theme }) => theme.colors['brand-primary']};
          }
        }

        @media (max-width: 1249px) {
          gap: 2rem;
          padding: 0.8rem 2rem;
          /* display: none; */
        }

        @media (max-width: 1140px) {
          display: none;
        }
      }

      @media (max-width: 492px) {
        display: none;
      }
    }

    .containerButton {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      nav {
        span {
          position: relative;
          font-size: 1rem;
          color: ${({ theme }) => theme.colors['base-text']};

          display: flex;
          align-items: center;
          gap: 0.8rem;

          padding: 1rem 0rem;

          transition: ease 0.4s;

          cursor: pointer;

          ::before {
            content: '';
            position: absolute;
            width: 0%;
            height: 0.2rem;
            bottom: 0;
            left: 0;
            background-color: ${({ theme }) => theme.colors['brand-primary']};

            transition: 0.4s ease;
          }

          :hover {
            ::before {
              width: 100%;
            }
          }
        }
        span.text-primary {
          position: relative;
          font-size: 1rem;
          color: ${({ theme }) => theme.colors['brand-primary']};

          display: flex;
          align-items: center;
          gap: 0.8rem;

          padding: 1rem 0rem;

          transition: ease 0.4s;

          cursor: pointer;

          ::before {
            content: '';
            position: absolute;
            width: 0%;
            height: 0.2rem;
            bottom: 0;
            left: 0;
            background-color: ${({ theme }) => theme.colors['base-text']};

            transition: 0.4s ease;
          }

          :hover {
            ::before {
              width: 100%;
            }
          }
        }
        .dropdown {
          position: relative;

          display: inline-block;

          .dropbtn {
            padding: 1.8rem auto;
          }
          .dropdown-content {
            background-color: #f1f1f1;
            min-width: 160px;
            background-color: ${({ theme }) => theme.colors['base-white']};

            border-radius: 0.4rem;
            display: block;
            opacity: 0;
            visibility: hidden;

            margin-top: 1.7rem;

            position: absolute;
            top: 4rem;
            border-top: 0.2rem solid
              ${({ theme }) => theme.colors['brand-primary']};
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            transition: 0.6s ease;
            z-index: 1;

            a {
              padding: 0.8rem 1rem;
              text-decoration: none;
              display: block;
              background-color: ${({ theme }) => theme.colors['base-white']};
              align-items: center;
              color: ${({ theme }) => theme.colors['base-text']};
              font-size: 1rem;
              border-radius: 0.4rem;
              transition: 0.2s ease;

              :hover {
                color: ${({ theme }) => theme.colors['base-white']};
                background-color: ${({ theme }) =>
                  theme.colors['brand-primary']};
              }
            }
          }
          .dropdown-content-tab {
            display: flex;
            opacity: 0;
            visibility: hidden;

            margin-top: 1.7rem;

            flex-direction: row;
            justify-content: center;

            position: absolute;
            top: 4rem;

            left: 50%;
            transform: translateX(-50%);

            background-color: ${({ theme }) => theme.colors['base-white']};

            border-radius: 0.4rem;
            border-top: 0.2rem solid
              ${({ theme }) => theme.colors['brand-primary']};

            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            transition: 0.6s ease;
            z-index: 1;

            .dropdown-content-tab-column {
              width: 100%;
              flex: 1;
              display: flex;
              align-items: flex-start;
              justify-content: start;
              flex-direction: column;
              padding: 1rem 1.4rem 1.6rem 1.4rem;

              min-width: 290px;

              h3 {
                font-size: 1rem;
                color: ${({ theme }) => theme.colors['brand-primary']};
                font-weight: 600;
                padding: 0.8rem 0.8rem;
              }
              span {
                width: 100%;
                font-size: 0.9rem;
                font-weight: 500;
                padding: 0.8rem 0.8rem;
                border-radius: 0.4rem;
                transition: 0.2s ease;

                ::before {
                  height: 0rem;
                }

                :hover {
                  color: #fff;
                  background-color: ${({ theme }) =>
                    theme.colors['brand-primary']};
                }
              }
            }
          }

          :hover {
            .dropdown-content {
              visibility: visible;
              opacity: 1;
              top: 1.18rem;
            }
            .dropdown-content-tab {
              visibility: visible;
              opacity: 1;
              top: 1.18rem;
            }

            .dropbtn {
              color: ${({ theme }) => theme.colors['brand-primary']};
            }
          }
        }

        @media (max-width: 1044px) {
          display: none;
        }
      }

      .containerOtherInfo {
        display: flex;
        align-items: center;
        flex-direction: row;
        padding: 0.6rem 1rem;
        gap: 1rem;

        svg {
          color: ${({ theme }) => theme.colors['base-black']};
          font-size: 1.8rem;
          transition: 0.3s;

          :hover {
            color: ${({ theme }) => theme.colors['brand-primary']};
          }
        }

        .containerLang {
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .containerContact {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.6rem;
          padding: 0 1.8rem 0 0;

          .contentContact {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.6rem;

            p {
              font-size: 0.8rem;
            }
            span {
              font-size: 1rem;
              font-weight: 500;
              color: ${({ theme }) => theme.colors['base-black']};
            }

            @media (max-width: 1259px) {
              display: none;
            }
          }
        }
      }
    }

    @media (max-width: 1249px) {
      /* display: none; */
    }
  }

  .containerIconMenu {
    padding: 1rem;
    display: none;

    svg {
      font-size: 2.4rem;
    }

    @media (max-width: 1044px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 462px) {
    flex-wrap: wrap;
    justify-content: center;
    height: 10rem;

    .containerLogo {
      height: 3rem;
      padding: 1rem;
      margin-top: 1.2rem;
    }

    .containerMenu {
      padding-left: 2rem;

      .containerTop {
        display: none;
      }

      .containerButton {
        display: flex;
        align-items: center;
        justify-content: center;

        .divEmpty {
          display: none;
        }
      }
    }
  }
`

export const SLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  span {
    font-family: 'Rubik', sans-serif;
  }

  a {
    width: 100%;
    display: inline;
    color: ${({ theme }) => theme.colors['base-text']};
    position: relative;

    :hover {
      color: ${props => props.theme.colors['brand-primary']};
    }
  }

  .inactive {
    color: ${props => props.theme.colors['base-text']};
  }
  .active {
    color: ${props => props.theme.colors['brand-primary']};
  }
`

export const SLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;

  font-size: 1rem;
  /* padding: 0 4rem 0 0; */
  transition: ease 0.4s;
`
