import "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    primaryColor: string;
    secundaryColor?: string;
    backgroundColor: string;
    drawerBackgroundColor: string;
    placeholderTextColor: string;
  }
}
