import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  max-width: 14rem;
  min-height: 13rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 0.8rem;
  box-shadow: 0 0 4px 0 #53535380;

  transition: ease 0.46s;

  svg {
    color: red;
    transition: ease 0.46s;
  }

  .containerIcon {
    position: absolute;
    top: calc(-50% + 30%);
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0 -4px 6px -2px #53535380;

    z-index: 11;
    transition: ease 0.6s;
  }

  .containerInfo {
    position: relative;
    width: 100%;
    margin-top: 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    text-align: center;

    h2 {
      font-size: 1.1rem;
      text-transform: uppercase;
      transition: ease 0.46s;
      z-index: 11;
      transition: ease 0.46s;
    }
    p {
      font-size: 1rem;
      font-weight: 500;
      z-index: 11;
      transition: ease 0.46s;
    }
  }

  .bgInfo {
    width: 100%;
    height: 0%;
    position: absolute;
    background-color: #f00000;
    left: 0;
    transition: ease 0.46s;
  }

  :hover {
    transform: translateY(-12px);
    .bgInfo {
      height: 100%;
      border-radius: 0.8rem;
    }
    svg {
      color: #fff;
    }

    .conteinerIcon {
      background-color: red;
    }
    h2 {
      color: #fff;
    }
    p {
      color: #fff;
    }
    /* height: 100%; */
  }
`
