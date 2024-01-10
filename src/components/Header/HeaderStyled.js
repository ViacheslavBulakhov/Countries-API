import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderEl = styled.header`
  //   box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

export const Title = styled(NavLink).attrs({
  to: "/",
})`
  font-weight: var(--fw-bold);
  font-size: var(--fs--sm);

  color: var(--colors-text);
  text-decoration: none;
`;

export const SwitcherWrap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: var(--fw-normal);
  text-transform: capitalize;
`;
