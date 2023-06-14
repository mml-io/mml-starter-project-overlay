import { useState } from "react";
import styled from "@emotion/styled";
import { Stack } from "@mui/material";

import Logo from "./Logo";
import Button from "./Button";
import DiscoverMenu from "./DiscoverMenu";

const Container = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  padding: 6px 8px;

  background-color: #343434;
  border-bottom: 1px solid #242424;
  border-top: 1px solid #242424;

  flex-direction: row;
  justify-content: space-between;
`;

const Bar = ({
  discoverLinks,
  onShareClick,
  onShowcaseClick,
}: {
  discoverLinks: {
    title: string;
    icon: string;
    url: string;
  }[];
  onShareClick: () => void;
  onShowcaseClick: () => void;
}) => {
  const [menuAnchorElem, setMenuAnchorElem] = useState<null | HTMLElement>(null);

  return (
    <Container>
      <Stack direction="row" spacing="10px">
        <Logo />

        <Button
          title="Discover MML"
          endIcon="menu"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setMenuAnchorElem(e.currentTarget);
          }}
        />

        <DiscoverMenu
          links={discoverLinks}
          anchorElem={menuAnchorElem}
          onClose={() => {
            setMenuAnchorElem(null);
          }}
        />
      </Stack>

      <Stack direction="row" spacing="10px">
        <Button primary title="Share" icon="share" onClick={onShareClick} />

        {/* <Button
          primary
          title="Showcase"
          icon="playground"
          onClick={onShowcaseClick}
        /> */}
      </Stack>
    </Container>
  );
};

export default Bar;
