import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BackgroundInput,
  BackgroundPage,
  ButtonStyle,
  InputStyle,
} from "./InputNameStyle";
import { UserContext } from "../../contexts/UserContext";
import { Messages } from "./FunnyMensagens";
import ReCaptcha from "react-google-recaptcha";

export const InputName = () => {
  const [inputValue, setInputValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState("");
  const [funnyMensage, setFunnyMensage] = useState("");
  const { newUser } = useContext(UserContext);
  const history = useHistory();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const captchaChange = () => {
    if (!checkboxValue) {
      alert(
        "Você precisa realizar a validação ''Não sou um robô''. Tente novamente marcando esta opção!"
      );
    }
  };

  useEffect(() => {
    if (inputValue === "") {
      mensagens();
    }
  }, [inputValue]);

  const mensagens = () => {
    for (let i = 0; i < Messages.length; i++) {
      if (Messages[i].title !== funnyMensage) {
        setFunnyMensage(Messages[i].title);
      }
    }
  };

  return (
    <BackgroundPage>
      <motion.div
        initial={{ opacity: -1 }}
        animate={{ y: 300, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1.5 }}
      >
        <BackgroundInput>
          <h2>Bem vindo ao app de animações</h2>
          <InputStyle
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            value={inputValue}
            onChange={handleChange}
            required
            minLength="3"
          />

          <ButtonStyle
            onClick={() => {
              newUser(inputValue);
              captchaChange();
              if (checkboxValue && inputValue.length >= 3) {
                history.push("/home");
              }
            }}
          >
            {checkboxValue && inputValue.length >= 3
              ? "Entrar no App"
              : funnyMensage}
          </ButtonStyle>
          <ReCaptcha
            sitekey="6Lc0SQIaAAAAAFKN8cO2r5tlLSaDm2mqayx2tiVe"
            onChange={(value) => {
              setCheckboxValue(value);
            }}
          />
        </BackgroundInput>
      </motion.div>
    </BackgroundPage>
  );
};
