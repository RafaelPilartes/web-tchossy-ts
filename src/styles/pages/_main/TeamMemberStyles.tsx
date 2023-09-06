import styled from 'styled-components'
import { NavLink } from '../../../components/NavLink'

export const ContainerBlog = styled.div`
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

  .contentContact {
    width: 100%;
    padding: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.4rem;

    background-color: ${({ theme }) => theme.colors['brand-base-dark']};
    background-image: url('https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/bg-contact.png');
    background-repeat: no-repeat;
    background-size: cover;

    .containerTitleSection {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 0.4rem;
      margin-bottom: 1.6rem;

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

    .limiteArea {
      width: 100%;
      max-width: 50rem;
      display: flex;
      flex-direction: column;
      gap: 1.4rem;

      .containerRowInput {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 1.4rem;

        input {
          width: 100%;
          font-size: 0.9rem;
          color: ${({ theme }) => theme.colors['base-text']};
          border: none;
          padding: 1rem;
        }
      }

      textarea {
        width: 100%;
        font-size: 0.9rem;
        color: ${({ theme }) => theme.colors['base-text']};
        border: none;
        padding: 1rem;
      }
    }
  }
`

export const ContainerTeamMember = styled.div`
  margin: 1rem 0;
  background-color: white;
  border-radius: 0.4rem;
  border-top: 0.4rem solid ${props => props.theme.colors['brand-primary']};

  .member {
    box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.13);
    padding: 0 0 1.6rem 0;

    .containerRowImg {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      gap: 2rem;
      padding: 0 1.6rem;

      .containerImg {
        position: relative;
        width: 100%;
        max-width: 31rem;
        height: 100%;
        max-height: 20rem;
        margin-top: 3.6rem;

        img {
          position: absolute;
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 1rem;
        }

        .containerOtherInfo {
          position: absolute;
          bottom: -2rem;

          width: 100%;
          max-width: 10rem;
          background-color: ${props => props.theme.colors['brand-primary']};
          padding: 0.8rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: row;
          flex-wrap: wrap;

          gap: 0.6rem;

          strong {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            gap: 0.6rem;

            line-height: 2rem;
            font-size: 0.9rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            color: #fff;
          }
        }
      }

      .containerInfTeamMember {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        margin: 2rem 1rem 1rem 1rem;

        .headerName {
          position: relative;
          width: 100%;
          padding: 1rem 0;

          border-bottom: 0.1rem solid #ddd;

          strong {
            line-height: 2rem;
            font-size: 1.4rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            color: #111;

            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;

            transition: 0.5s ease;

            :hover {
              color: ${props => props.theme.colors['brand-primary']};
            }
          }
          ::after {
            position: absolute;
            content: '';
            left: 0;
            bottom: -2px;
            width: 20%;
            height: 0.2rem;
            background-color: ${props => props.theme.colors['brand-primary']};
          }
        }

        .containerSocialMedia {
          display: flex;
          flex-direction: row;
          gap: 1.2rem;
          margin-top: 1.4rem;

          a {
            width: 2.4rem;
            height: 2.4rem;
            background-color: #15191e;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 100%;
            transition: 0.4s ease;

            svg {
              color: ${({ theme }) => theme.colors['base-white']};
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

        .containerAllSectionMember {
          display: flex;
          flex-direction: column;
          gap: 4.4rem;

          .descriptionMember {
            border-bottom: 0.1rem solid #ddd;

            h3 {
              font-size: 1rem;
              font-family: 'Montserrat', sans-serif;
              font-weight: 400;
              color: #111;
              line-height: 1.8rem;
            }

            p {
              margin: 1.6rem 0;
              font-size: 1rem;
              font-family: 'Montserrat', sans-serif;
              font-weight: 400;
              color: #111;
              line-height: 1.8rem;
            }
            p {
              margin: 1.6rem 0;
              font-size: 1rem;
              font-family: 'Montserrat', sans-serif;
              font-weight: 400;
              color: #111;
              line-height: 1.8rem;
            }

            .descriptionMemberList {
              display: flex;
              flex-direction: column;
              gap: 1rem;

              margin-left: 1.6rem;

              li {
                font-size: 1.01rem;
                color: ${({ theme }) => theme.colors['base-text']};
                font-weight: 400;

                display: flex;
                flex-direction: row;
                gap: 0.6rem;

                svg {
                  color: ${({ theme }) => theme.colors['brand-primary']};
                }
              }
            }
          }
        }
      }
    }
  }
`

export const SLink = styled.span`
  padding: 0.7rem 0;
  color: #111;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Montserrat', sans-serif;

  cursor: pointer;
  transition: 0.4s ease;

  :hover {
    color: ${props => props.theme.colors['brand-primary']};
    transform: translateX(0.4rem);
  }
`
