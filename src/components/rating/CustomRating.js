import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import {
  MdSentimentDissatisfied,
  MdSentimentNeutral,
  MdSentimentSatisfied,
  MdSentimentVeryDissatisfied,
  MdSentimentVerySatisfied,
} from "react-icons/md";
import { BackgroundCustomIcons } from "./CustomRatingStyle";

const customIcons = {
  1: {
    icon: <MdSentimentVeryDissatisfied />,
    label: "Muito ruim",
  },
  2: {
    icon: <MdSentimentDissatisfied />,
    label: "Esperava mais",
  },
  3: {
    icon: <MdSentimentNeutral />,
    label: "Neutro",
  },
  4: {
    icon: <MdSentimentSatisfied />,
    label: "Legais",
  },
  5: {
    icon: <MdSentimentVerySatisfied />,
    label: "Achei incrível",
  },
};

const IconContainer = (props) => {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
};

export const CustomRating = () => {
  const [valueRating, setValueRating] = useState();

  return (
    <BackgroundCustomIcons>
      <Rating
        name="customized-icons"
        getLabelText={(value) => customIcons[value].label}
        IconContainerComponent={IconContainer}
        onChange={(value) => {
          setValueRating(value.target.defaultValue);
        }}
      />
      {valueRating
        ? customIcons[valueRating].label
        : "O que achou das animações?"}
    </BackgroundCustomIcons>
  );
};
