import React from "react";
import BreakpointProvider from "react-breakpoints";

import {
  MOBILE_WIDTH,
  MOBILE_LANDSCAPE_WIDTH,
  TABLET_WIDTH,
  TABLET_LANDSCAPE_WIDTH,
  DESKTOP_WIDTH,
  DESKTOP_LARGE_WIDTH,
  DESKTOP_WIDE_WIDTH
} from "../../constants";

export const breakpointNames = {
  mobile: "mobile",
  mobileLandscape: "mobileLandscape",
  tablet: "tablet",
  tabletLandscape: "tabletLandscape",
  desktop: "desktop",
  desktopLarge: "desktopLarge",
  desktopWide: "desktopWide"
};

export const breakpoints = {
  mobile: MOBILE_WIDTH,
  mobileLandscape: MOBILE_LANDSCAPE_WIDTH,
  tablet: TABLET_WIDTH,
  tabletLandscape: TABLET_LANDSCAPE_WIDTH,
  desktop: DESKTOP_WIDTH,
  desktopLarge: DESKTOP_LARGE_WIDTH,
  desktopWide: DESKTOP_WIDE_WIDTH
};

const Breakpoints = ({ children }) => (
  <BreakpointProvider breakpoints={breakpoints}>{children}</BreakpointProvider>
);

export default Breakpoints;
