import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Typography, Stack } from "@mui/material";

import * as utils from "~/library/utils";
import discoverLinks from "~/discoverLinks";

import Bar from "./Bar";
import Dialog from "./Dialog";
import URLField from "./URLField";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  min-width: 260px;

  flex-direction: column;
  justify-content: space-between;
`;

const TopContentContainer = styled.div`
  width: 100%;
  display: flex;
  pointer-events: auto;
`;

const BottomContentContainer = styled.div`
  width: 100%;
  display: flex;
  pointer-events: auto;
`;

const Divider = styled.hr`
  opacity: 0.2;
`;

const Overlay = () => {
  const [clipboardPermissionMissing, setClipboardPermissionMissing] = useState(false);

  const [shareDialogOpen, setShareDialogOpen] = useState(false);

  useEffect(() => {
    checkClipboardPermission();
  }, []);

  const checkClipboardPermission = async () => {
    const hasPermission = await utils.hasClipboardPermission();
    setClipboardPermissionMissing(!hasPermission);
  };

  return (
    <Container>
      <Dialog
        title="Share Live Document"
        open={shareDialogOpen}
        onClose={() => setShareDialogOpen(false)}
      >
        <Stack spacing={3}>
          <Typography>
            Share the following URL to invite others and interact with your document in real time.
          </Typography>

          <URLField
            url={utils.getClientUrl()}
            enableClipboard={!clipboardPermissionMissing}
            onClipboardClick={() => {
              utils.copyToClipboard(utils.getClientUrl());
            }}
          />

          <Divider />

          <Typography>
            Your document is running at the following web socket URL. Learn more about{" "}
            <a target="_blank" href="https://mml.io" rel="noreferrer">
              MML document networking
            </a>
            .
          </Typography>

          <URLField
            url={utils.getWebsocketUrl()}
            enableClipboard={!clipboardPermissionMissing}
            onClipboardClick={() => {
              utils.copyToClipboard(utils.getWebsocketUrl());
            }}
          />
        </Stack>
      </Dialog>

      <TopContentContainer>
        <Bar
          discoverLinks={discoverLinks}
          onShareClick={() => setShareDialogOpen(true)}
          onShowcaseClick={() => {
            // Currently unused
          }}
        />
      </TopContentContainer>

      {/* Currently unused */}
      <BottomContentContainer></BottomContentContainer>
    </Container>
  );
};

export default Overlay;
