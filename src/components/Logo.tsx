import styled from "@emotion/styled";

import LogoImage from "~/images/logo.svg";

const Container = styled.a`
  height: 100%;
  aspect-ratio: 1 / 1;
  background-image: url("${LogoImage}");
`;

const Logo = () => {
  return <Container href="https://mml.io" />;
};

export default Logo;