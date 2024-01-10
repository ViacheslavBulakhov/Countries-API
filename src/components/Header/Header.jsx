import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { HeaderEl, Title, SwitcherWrap, Wrapper } from "./HeaderStyled";
import { useEffect, useState } from "react";
import { Container } from "../Container";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where in The world?</Title>
          <SwitcherWrap onClick={toggleTheme}>
            {theme === "light" ? <IoMoonOutline /> : <IoMoon />}

            <span>{`${theme} Theme`}</span>
          </SwitcherWrap>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
