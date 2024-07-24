import { useMediaQuery } from "react-responsive";

export const useResponsiveHeader = () => {
  const Header_large = useMediaQuery({ minWidth: 1102 });
  const Header_800 = useMediaQuery({ minWidth: 800 });
  const Header_900 = useMediaQuery({ minWidth: 900 });
  const Header_medium = useMediaQuery({ minWidth: 700 });
  const Header_small = useMediaQuery({ minWidth: 500 });
  return { Header_large, Header_800, Header_900, Header_medium, Header_small };
};
