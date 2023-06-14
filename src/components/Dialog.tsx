import styled from "@emotion/styled";
import { Dialog, DialogProps, DialogContent, DialogTitle } from "@mui/material";

import Icon from "./Icon";

const StyledDialog = styled((props: DialogProps) => <Dialog {...props} />)(({ theme }) => ({
  zIndex: 110000,
  "& .MuiPaper-root": {
    margin: 0,
    width: "calc(100% - 40px)",
  },
  "& .MuiBackdrop-root": {
    backgroundColor: "#343434CC",
  },
}));

const StyledDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;

  a {
    color: white;
  }
`;

const CloseButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  cursor: pointer;

  opacity: 0.7;
  transition: opacity 0.1s;

  &:hover {
    opacity: 1;
  }
`;

const CustomDialog = ({
  title,
  children,
  open,
  onClose,
}: {
  title: string;
  children: JSX.Element | JSX.Element[];
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <StyledDialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>{title}</DialogTitle>

      <CloseButtonContainer onClick={onClose}>
        <Icon icon="close" />
      </CloseButtonContainer>

      <StyledDialogContent>{children}</StyledDialogContent>
    </StyledDialog>
  );
};

export default CustomDialog;
