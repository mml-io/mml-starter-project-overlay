import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

import Icon from "./Icon";

const IconContainer = styled(Box)`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const CustomButton = ({
  title,
  primary,
  onClick,
  href,
  icon,
  startIcon,
  endIcon,
  height,
  fullWidth,
}: {
  title?: string;
  primary?: boolean;
  onClick?: (e: any) => void;
  href?: string;
  icon?: string;
  startIcon?: string;
  endIcon?: string;
  height?: string;
  fullWidth?: boolean;
}) => {
  startIcon = startIcon || icon;

  return (
    <Button
      fullWidth={fullWidth}
      variant="contained"
      color={primary ? "primary" : "secondary"}
      sx={{
        minWidth: "32px",
        height: height || "28px",
      }}
      href={href || ""}
      target="_blank"
      onClick={onClick}
    >
      {startIcon && (
        <IconContainer
          sx={{
            marginLeft: "-4px",
            marginRight: title ? "6px" : "-4px",
          }}
        >
          <Icon icon={startIcon} size="20px" />
        </IconContainer>
      )}

      {title}

      {endIcon && (
        <IconContainer
          sx={{
            marginRight: "-4px",
            marginLeft: title ? "6px" : "-4px",
          }}
        >
          <Icon icon={endIcon} size="20px" />
        </IconContainer>
      )}
    </Button>
  );
};

export default CustomButton;
