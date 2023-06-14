import styled from "@emotion/styled";
import { Menu, MenuProps, MenuItem, Typography, Stack } from "@mui/material";

import Icon from "./Icon";

const StyledMenu = styled((props: MenuProps) => <Menu elevation={8} {...props} />)(({ theme }) => ({
  zIndex: 100000,
  "& .MuiPaper-root": {
    minWidth: "160px",
    backgroundColor: theme.palette.secondary.main,
    backgroundImage: "none",
    marginTop: "4px",
    padding: 0,
  },
}));

const DiscoverMenu = ({
  links,
  anchorElem,
  onClose,
}: {
  links: {
    title: string;
    icon: string;
    url: string;
  }[];
  anchorElem: any;
  onClose: () => void;
}) => {
  return (
    <StyledMenu
      id="discover-menu"
      anchorEl={anchorElem}
      open={Boolean(anchorElem)}
      onClose={onClose}
    >
      {links.map((link) => (
        <MenuItem key={link.title} component="a" href={link.url} target="_blank">
          <Stack direction="row" spacing="6px" alignItems="center">
            <Icon icon={link.icon} size="20px" />
            <Typography fontSize="14px" fontWeight={400}>
              {link.title}
            </Typography>
          </Stack>
        </MenuItem>
      ))}
    </StyledMenu>
  );
};

export default DiscoverMenu;
