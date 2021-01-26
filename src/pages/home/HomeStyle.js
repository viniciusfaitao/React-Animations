import styled from "styled-components";
import { motion } from "framer-motion";

export const BackgroundNavbarColor = styled.div`
  background: rgb(0, 0, 0, 0.8);
  height: 70px;
`;

export const ApresentationText = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 200px;

  h2 {
    width: 40%;
  }
`;

export const FirstText = styled.div`
  display: flex;
  color: white;
  position: absolute;
  left: 25%;
  bottom: 60%;
`;

export const Main = styled.main`
  .first {
    overflow: hidden;

    .offset {
      width: 100%;
      height: 100%;
    }

    .a {
      background: linear-gradient(180deg, #05f, #09f);
      height: 100%;
      display: flex;
      align-items: flex-end;

      .left-side {
        width: 50%;
        height: 100%;
        background: rgb(0, 0, 0, 0.8);
      }

      .right-side {
        width: 50%;
        height: 100%;

        .right-image {
          background-image: url("https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          width: 100%;
          height: 100%;
        }
      }
    }

    .b {
      width: 100%;
      height: 100%;
      background-image: url("https://wonderfulengineering.com/wp-content/uploads/2014/10/wallpaper-photos-31.jpg");
      background-position: center;
      background-size: cover;
    }

    .c {
      width: 100%;
      height: 100%;
      background-image: url("https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg");
      background-position: center;
      background-size: cover;
    }
  }

  .second {
    background: transparent;
  }

  .third {
    overflow: hidden;

    .next,
    .prev {
      top: calc(50% - 20px);
      position: absolute;
      background: white;
      border-radius: 30px;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      cursor: pointer;
      font-weight: bold;
      font-size: 18px;
      z-index: 2;
    }

    .next {
      right: 10px;
    }

    .prev {
      left: 10px;
      transform: scale(-1);
    }

    img {
      position: absolute;
      width: 100vw;
      height: 100vh;
    }
  }

  .fourth {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      position: absolute;
      width: 60vw;
      height: 50vh;
    }
  }

  .fifth {
    overflow: hidden;
  }
`;

export const BackgroundFourth = styled.div`
  width: 100vw;
  height: 100vh;

  h2 {
    align-self: end;
  }
`;

export const BackgroundFifth = styled.div`
  display: flex;
  justify-content: center;
`;

export const Section = styled.div`
  position: relative;
`;

export const Sticky = styled(motion.div)`
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;
