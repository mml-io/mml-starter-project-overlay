import {
  LibraryBooksRounded,
  ShareRounded,
  TheaterComedyRounded,
  CloseRounded,
  ContentCopyRounded,
  CodeRounded,
  ExpandMoreRounded,
  SvgIconComponent,
} from "@mui/icons-material";

const ICON_MAP: Record<string, SvgIconComponent> = {
  docs: LibraryBooksRounded,
  github: CodeRounded,
  share: ShareRounded,
  playground: TheaterComedyRounded,
  copy: ContentCopyRounded,
  close: CloseRounded,
  menu: ExpandMoreRounded,
};

const Icon = ({
  icon,
  size,
  color,
  hoverColor,
}: {
  icon: string;
  size?: string;
  color?: string;
  hoverColor?: string;
}) => {
  const Component = ICON_MAP[icon];

  return (
    <Component
      sx={{
        width: size || undefined,
        color: color || "white",
        "&:hover": {
          color: hoverColor || "white",
        },
      }}
    />
  );
};

export default Icon;
