import React from "react";
import BackToTop from "react-back-to-top-button";
import { FaArrowUp } from "react-icons/fa";

export const ButtonBTT = () => {
  return (
    <BackToTop showOnScrollUp easing="easeInOutQuint">
      <span>
        Voltar ao topo <FaArrowUp />
      </span>
    </BackToTop>
  );
};
