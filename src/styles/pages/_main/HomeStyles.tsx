import styled from 'styled-components'

export const ContainerHome = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .whatsappButton {
    width: 68px;
    height: 68px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 100px;
    background-color: rgb(5, 212, 5);

    position: fixed;
    bottom: 50px;
    right: 50px;
    z-index: 999;

    animation: btn-whatsapp 2.6s ease infinite;

    transition: 1.6s;

    span {
      font-size: 79px;
      color: #fff;
    }

    :hover {
      transform: scale(1.08);
      animation: btn-whatsapp none;
    }
  }

  @keyframes btn-whatsapp {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.06);
    }
    100% {
      transform: scale(1);
    }
  }

  .containerSwiper {
    /* height: calc(100vh - 6.6rem); */
  }

  .swiper {
    width: 100vw;
    height: 100%;

    overflow: hidden;

    .swiper-button-prev,
    .swiper-button-next {
      width: 1rem;
      height: 1rem;
      padding: 1.3rem;
      border-radius: 0.4rem;
      background-color: ${({ theme }) => theme.colors['brand-primary']};

      ::after {
        color: ${({ theme }) => theme.colors['base-white']};
        font-size: 1.6rem;
      }
    }
  }

  .swiper-slide {
    position: relative;
    text-align: center;
    font-size: 18px;
    background: #fff;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    .containerDescription {
      position: absolute;
      left: 150px;

      padding: 2rem;
      max-width: 700px;

      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      gap: 1.4rem;

      color: ${({ theme }) => theme.colors['base-white']};
      text-align: left;

      z-index: 10;

      .tag {
        background-color: #ffffff1a;
        padding: 1rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        .line {
          height: 0.2rem;
          width: 2.4rem;
          background-color: ${({ theme }) => theme.colors['brand-primary']};
        }

        span {
          font-size: 0.9rem;
          text-transform: uppercase;
          font-weight: 600;
        }
      }

      .title {
        font-size: 4rem;
        font-weight: 800;
        font-family: 'Space Grotesk', sans-serif;
        max-width: 650px;

        strong {
          color: ${({ theme }) => theme.colors['brand-primary']};
        }
      }
      .description {
        font-size: 1.2rem;
        font-weight: 300;
      }

      button {
        border: none;
        border-radius: 0.4rem;

        transform: skew(-20deg);

        padding: 1rem 2rem;
        font-size: 1rem;
        font-weight: 500;

        background-color: ${({ theme }) => theme.colors['brand-primary']};

        span {
          position: relative;
          padding: -0.2rem 0;

          color: ${({ theme }) => theme.colors['base-white']};
          font-size: 1rem;
          font-weight: 500;

          display: inline-block;
          transform: skew(20deg);
        }
      }

      @media (max-width: 945px) {
        left: auto;
      }
      @media (max-width: 780px) {
        left: 50px;

        .description {
          margin-right: 2rem;
        }
      }
      @media (max-width: 830px) {
        .title {
          font-size: 3rem;
        }
        .description {
          font-size: 1rem;
        }
      }

      @media (max-width: 665px) {
        left: 50px;

        .title {
          font-size: 3rem;
        }

        .tag {
          display: none;
        }
      }
      @media (max-width: 665px) {
        .title {
          font-size: 2.6rem;
        }
      }
      @media (max-width: 510px) {
        .title {
          font-size: 2rem;
        }
      }
      @media (max-width: 455px) {
        left: 50px;

        h1 {
          font-size: 1rem;
        }

        .tag {
          display: none;
        }
      }
      @media (max-width: 390px) {
        left: 20px;

        h1 {
          font-size: 0.6rem;
        }

        .tag {
          display: none;
        }
      }
    }

    .shadow {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(34, 36, 41, 0.75);
    }
  }
  .swiper-slide .bgSlide {
    /* position: absolute; */
    display: block;
    width: 100%;
    height: calc(100vh - 6.6rem);
    object-fit: cover;
    overflow: hidden;
  }
  .swiper-slide .shapeSlide {
    position: absolute;
    right: -2.2rem;
    z-index: 9;
  }

  .slide-animation {
    .bgSlide {
      animation: slide-in 1.6s ease;
    }
  }

  @keyframes slide-in {
    from {
      transform: scale(1.1);
    }
    to {
      transform: scale(1);
    }
  }

  section {
    position: relative;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .containerContent {
      width: 85%;
      max-width: 1390px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1.2rem;

      @media (max-width: 1349px) {
        width: 90%;
      }
    }
    .containerRow {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      gap: 4rem 1.2rem;

      padding: 1.6rem 0;

      @media (max-width: 1254px) {
        gap: 8rem 2rem;
        /* display: none; */
      }
    }

    .containerTitleSection {
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 0.4rem;

      span {
        font-size: 120px;
        position: absolute;
        opacity: 1;
        left: 0;
        right: 0;
        top: -4.8rem;
        color: #353542;
        font-weight: 800;
        z-index: 0;
        text-transform: none;
        letter-spacing: 5px;
        -webkit-text-fill-color: #ffffff00;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #0e131721;
        font-family: var(--heading-font);
      }
      h4 {
        position: relative;

        font-size: 1.1rem;
        font-weight: 400;
        color: ${({ theme }) => theme.colors['brand-primary']};

        padding: 0px 0 0px 70px;

        ::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          margin: auto 0;

          height: 4px;
          width: 35px;
          background-color: ${({ theme }) => theme.colors['brand-primary']};
        }
        ::after {
          content: '';
          position: absolute;
          top: 0.6rem;
          bottom: 0;
          left: 0;
          margin: auto 0;

          height: 1px;
          width: 55px;
          background-color: ${({ theme }) => theme.colors['brand-primary']};
        }
      }
      h1 {
        font-size: 2.8rem;
        color: ${({ theme }) => theme.colors['base-title']};
      }
      strong {
        color: ${({ theme }) => theme.colors['brand-primary']};
      }

      @media (max-width: 720px) {
        span {
          font-size: 90px;
          top: -4.2rem;
        }
      }
      @media (max-width: 550px) {
        span {
          font-size: 50px;
          top: -1.8rem;
        }
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
  }

  .section1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2.6rem;

    padding: 0rem 1.4rem;

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
          font-size: 0.9rem;
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
              font-size: 1rem;
              margin-top: 0.4rem;
              color: ${({ theme }) => theme.colors['brand-primary']};
            }
          }
        }
      }

      .btn-background {
        background-color: ${({ theme }) => theme.colors['brand-primary']};
        color: ${({ theme }) => theme.colors['base-white']};
        transition: 0.4s ease;

        a {
          color: ${({ theme }) => theme.colors['base-white']};
        }

        :hover {
          background-color: ${({ theme }) =>
            theme.colors['brand-primary-dark']};
        }

        :active {
          background-color: ${({ theme }) =>
            theme.colors['brand-primary-light']};
        }
      }
    }

    img {
      max-height: 30rem;
      border-radius: 1rem;

      :hover {
        /* animation: vibration 1.6s none; */
      }
    }
  }

  .aboutUs {
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-image: url('backgrounds/bg_about_home.png');

    .containerAboutUs {
      position: relative;

      width: 100%;
      padding: 10rem 0;

      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .contentLeft {
        position: relative;
        width: 50%;
        padding: 0 1.4rem 0 0;

        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;

        .containerImagesTop {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;

          .containerImg1 {
            position: relative;
            display: block;

            width: 90%;
            max-height: 26rem;

            object-fit: cover;
            overflow: hidden;

            img {
              vertical-align: middle;
              display: inline-block;
            }
          }

          .containerImg2 {
            position: absolute;
            top: 2rem;
            right: 3rem;
            display: block;

            object-fit: cover;
            overflow: hidden;

            img {
              vertical-align: middle;
              display: inline-block;

              max-width: 8rem;

              @media (max-width: 662px) {
                width: 6rem;
              }
            }
          }
        }

        .containerImagesBottom {
          position: absolute;
          bottom: 0;
          right: 4rem;
          border: 8px solid #fff;
          filter: drop-shadow(0px 8px 31px rgba(0, 0, 0, 0.15));

          .containerImg {
            position: relative;
            display: block;

            max-height: 18rem;

            object-fit: cover;
            overflow: hidden;

            img {
              vertical-align: middle;
              display: inline-block;
            }
          }
        }
      }

      .contentRight {
        width: 50%;

        display: flex;
        flex-direction: column;
        gap: 2rem;

        p {
          font-size: 1rem;
          color: ${({ theme }) => theme.colors['base-text']};
          font-weight: 400;
          line-height: 2rem;
        }

        .containerIconDescription {
          display: flex;
          flex-direction: row;

          flex-wrap: wrap;
          gap: 1.1rem;

          .iconDescription {
            flex: 1;
            width: 48%;
            display: flex;
            align-items: center;
            flex-direction: row;
            gap: 0.4rem;

            .containerIcon {
              position: relative;
              padding: 0.6rem 0.4rem;

              transition: 0.4s ease;

              ::before {
                content: '';
                position: absolute;
                bottom: 0;
                right: 0;

                width: 2.4rem;
                height: 2.4rem;
                background-color: ${({ theme }) =>
                  theme.colors['brand-secondary']};
                opacity: 0.4;
                border-radius: 100%;
              }

              svg {
                font-size: 3.2rem;
                color: ${({ theme }) => theme.colors['brand-primary']};
              }
            }

            span {
              font-size: 1.2rem;
              font-weight: 500;
              color: ${({ theme }) => theme.colors['base-title']};
            }

            :hover {
              .containerIcon {
                transform: scale(1.1);
              }
            }
          }
        }

        .rowCheck {
          display: flex;
          gap: 1.8rem;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;

          @media only screen and (max-width: 538px) {
            flex-wrap: wrap;
            gap: 1rem;
          }

          ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            min-width: 10rem;

            margin-bottom: 1.6rem;

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

    @media (max-width: 1082px) {
      .containerAboutUs {
        flex-direction: column;

        .contentLeft {
          width: 100%;

          padding-bottom: 8rem;
          margin-bottom: 2rem;
        }
        .contentRight {
          width: 100%;
        }
      }
    }

    @media (max-width: 600px) {
      .containerAboutUs {
        .contentLeft {
          margin-bottom: 0rem;
          gap: 1rem;

          .containerImagesBottom {
            position: relative;
            right: 0rem;

            position: relative;
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            .containerImg {
              position: relative;
              display: block;

              width: 100%;
              max-height: 26rem;

              object-fit: cover;
              overflow: hidden;

              img {
                vertical-align: middle;
                display: inline-block;
              }
            }
          }
        }
      }
    }
  }

  .solutions {
    .contentSolutions {
      position: relative;

      width: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 6rem 2rem;

      z-index: 10;
    }
  }

  .services {
    padding: 10rem 0 6rem 0;
    background-image: url('backgrounds/servicesBg.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    .containerColumnServices {
      padding: 2.6rem 0;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .containerRowServices {
        width: 100%;
        margin-top: 0.28rem;

        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 4rem 1rem;
        flex-flow: row wrap;
      }
    }
  }

  .weAreReady {
    .contentWeAreReady {
      position: relative;

      width: 100%;
      padding: 5rem 4rem;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 5rem;

      background-color: transparent;
      background-image: linear-gradient(
        270deg,
        ${props => props.theme.colors['brand-primary']} 0%,
        ${props => props.theme.colors['brand-secondary']} 100%
      );

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

      .containerImg {
        position: relative;
        display: block;

        width: 10rem;
        height: 10rem;

        border-radius: 100rem;
        object-fit: cover;
        overflow: hidden;

        img {
          height: 100%;
          vertical-align: middle;
          display: inline-block;
        }
      }

      .contentInfo {
        flex: 1;
        min-width: 16rem;

        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;

        z-index: 20;

        h1 {
          color: ${({ theme }) => theme.colors['base-white']};
          font-size: 2.6rem;
          font-weight: 700;
        }

        div {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
          gap: 1.6rem;

          ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            li {
              font-size: 1rem;
              color: ${({ theme }) => theme.colors['base-white']};
              font-weight: 500;

              display: flex;
              flex-direction: row;
              gap: 0.6rem;

              svg {
                color: ${({ theme }) => theme.colors['brand-pink']};
              }
            }
          }
        }
      }
    }
  }

  .ourClients {
    position: relative;
    width: 100%;
    margin: 8rem 0 0rem 0;
    background-color: #0d1525;

    .bgClients {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background-image: url('https://webextheme.com/html/ziptech/v2/images/bg/3.jpg');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 0.04;
    }

    ::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2rem;
      background-color: ${({ theme }) => theme.colors['brand-secondary']};
    }

    .containerClientsRow {
      width: 100%;
      margin: 0 auto;

      display: flex;
      align-items: center;
      margin-top: 2rem;
      padding: 4rem 0rem 0rem 0rem;
      justify-content: center;
      overflow: hidden;

      .alice-carousel__next-btn-item {
        display: none;
      }
      .alice-carousel__prev-btn-item {
        display: none;
      }

      .clients {
        position: relative;
        display: block;

        max-width: 14rem;

        object-fit: cover;
        overflow: hidden;

        transition: 0.4s ease;

        img {
          width: 100%;
          vertical-align: middle;
          display: inline-block;
          pointer-events: none;
          filter: grayscale(100%);
        }

        :hover {
          transform: scale(1.1);

          img {
            filter: grayscale(0%);
          }
        }
      }
    }
  }

  .projects {
    margin: 0 0 0 0;
    padding: 6rem 0 0 0;
    background-repeat: no-repeat;
    background-size: cover;

    .containerProjectsRow {
      width: 100%;
      margin-top: 2.6rem;

      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 2.6rem;
      flex-flow: row wrap;
    }

    .containerBottom {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      padding: 2.8rem 0 5rem 0;
    }
  }

  .freeConsulting {
    position: relative;
    background-color: ${({ theme }) => theme.colors['brand-primary']};

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

    .contentFreeConsulting {
      position: relative;

      width: 100%;
      max-width: 60rem;
      padding: 5rem 0rem;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;

      div {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h1 {
          color: ${({ theme }) => theme.colors['base-white']};
          font-size: 2rem;
          font-weight: 700;
        }
        h3 {
          color: ${({ theme }) => theme.colors['base-white']};
          font-size: 1.1rem;
          font-weight: 400;
        }
      }
    }
  }

  .deponents {
    margin: 6rem 0 0 0;
    padding: 6rem 0 0 0;
    background-repeat: no-repeat;
    background-size: cover;

    .containerDeponentsRow {
      width: 100%;
      margin-top: 2.6rem;

      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 2.6rem;
      flex-flow: row wrap;
    }

    .containerBottom {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      padding: 2.8rem 0 5rem 0;
    }
  }

  .ourExperts {
    position: relative;
    width: 100%;
    padding: 4rem 0;

    .containerImg {
      position: absolute;
      top: 0;
      right: 0;
      display: block;

      /* max-width: 20rem; */

      object-fit: cover;
      overflow: hidden;

      opacity: 0.1;

      img {
        vertical-align: middle;
        display: inline-block;
      }
    }

    .containerOurExperts {
      position: relative;

      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;
    }
    .containerMemberExperts {
      position: relative;

      width: 100%;

      display: flex;
      justify-content: space-between;
      flex-direction: row;
      gap: 2rem 0;
      flex-wrap: wrap;
    }
  }

  .affiliates {
    position: relative;
    width: 100%;
    padding: 4rem 0;

    .containerImg {
      position: absolute;
      top: 0;
      right: 0;
      display: block;

      /* max-width: 20rem; */

      object-fit: cover;
      overflow: hidden;

      opacity: 0.1;

      img {
        vertical-align: middle;
        display: inline-block;
      }
    }

    .containerOurExperts {
      position: relative;

      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;
    }

    .imageSection {
    }
  }

  .messageCustom {
    position: relative;
    width: 100%;
    padding: 4rem 0;

    .containerImg {
      position: absolute;
      top: 0;
      right: 0;
      display: block;

      /* max-width: 20rem; */

      object-fit: cover;
      overflow: hidden;

      opacity: 0.1;

      img {
        vertical-align: middle;
        display: inline-block;
      }
    }

    .containerOurExperts {
      position: relative;

      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;
    }
  }

  .saveTime {
    position: relative;
    padding: 5rem;

    background-color: #1d1729;

    overflow: hidden;

    .coverBackground {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background-color: #121212;
      background-image: url('https://demo.ovatheme.com/infetech/wp-content/uploads/2022/03/bg-attachment-01.jpg');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 0.3;

      mix-blend-mode: luminosity;
    }

    .containerLinesLeft {
      position: absolute;
      left: 4rem;
      top: 0;
      height: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      transform: rotate(30deg);

      .line1 {
        height: calc(100% + 16rem);
        width: 10rem;
        background-color: ${({ theme }) => theme.colors['brand-primary']};
        opacity: 0.5;
      }
    }

    .containerSaveTime {
      display: flex;
      flex-direction: row;
      gap: 1rem;

      z-index: 10;

      .containerLeft {
        width: 60%;

        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        gap: 1rem;

        .containerPlay {
          width: 6rem;
          height: 6rem;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 0.09rem solid
            ${({ theme }) => theme.colors['brand-primary-light']};
          border-radius: 100%;

          span {
            width: 4rem;
            height: 4rem;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 100%;

            background-color: ${({ theme }) => theme.colors['brand-secondary']};
            transition: 0.4s ease;

            svg {
              font-size: 1.2rem;
              color: ${({ theme }) => theme.colors['base-white']};
              border-radius: 100%;
            }
          }

          :hover {
            span {
              background-color: ${({ theme }) => theme.colors['brand-primary']};
            }
          }
        }

        .containerContent {
          h6 {
            font-size: 0.9rem;
            font-weight: 500;
            color: ${({ theme }) => theme.colors['base-white']};
          }
          h1 {
            font-size: 2.6rem;
            font-weight: 600;
            color: ${({ theme }) => theme.colors['base-white']};
          }
        }
      }

      .containerRight {
        width: 40%;

        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        flex-direction: column;
        gap: 1rem;

        .containerCalculations {
          width: 100%;
          max-width: 18rem;
          padding: 1.2rem 2rem;

          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
          gap: 1rem;

          border: 0.1rem solid ${({ theme }) => theme.colors['brand-primary']};

          /* background-color: ${({ theme }) =>
            theme.colors['brand-secondary']}; */

          .containerIcon {
            width: 3rem;
            height: 3rem;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 0.2rem solid ${({ theme }) => theme.colors['brand-primary']};
            border-radius: 100%;

            transition: 0.3s ease;

            svg {
              font-size: 1.4rem;
              color: ${({ theme }) => theme.colors['base-white']};

              transition: 0.3s ease;
            }
          }

          h3 {
            font-size: 1.4rem;
            font-weight: 600;
            color: ${({ theme }) => theme.colors['base-white']};
          }

          p {
            font-size: 1rem;
            font-weight: 400;
            color: ${({ theme }) => theme.colors['base-white']};
          }

          :hover {
            .containerIcon {
              transform: rotateY(160deg);

              svg {
                color: ${({ theme }) => theme.colors['brand-primary']};
              }
            }
          }
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
          align-items: flex-start;
        }
      }
    }
  }

  .ourBlog {
    width: 100%;
    margin: 10rem 0;

    .containerOurBlog {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }

  .prices {
    margin: 3rem 0 6rem 0;
    padding: 3rem 0 6rem 0;
    background-repeat: no-repeat;
    background-size: cover;

    .containerPricesRow {
      width: 100%;
      margin-top: 2.6rem;

      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 2.6rem;
      flex-flow: row wrap;
    }
  }

  .exploreUs {
    width: 90%;
    height: auto;
    height: 16rem;
    margin: 0 auto;
    position: relative;
    background-color: ${({ theme }) => theme.colors['brand-primary']};

    overflow: hidden;

    svg {
      color: ${({ theme }) => theme.colors['base-white']};
      font-size: 4.4rem;
    }

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
      padding: 5rem 0rem;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;

      div.rowExploreUs {
        display: flex;
        flex-direction: row;
        gap: 1.6rem;
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h3 {
          color: ${({ theme }) => theme.colors['base-white']};
          font-size: 1.4rem;
          font-weight: 400;
        }
        h1 {
          color: ${({ theme }) => theme.colors['base-white']};
          font-size: 2.4rem;
          font-weight: 700;
        }
      }
    }
  }
`
