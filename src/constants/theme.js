import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
require("typeface-lato")

const colors = {
  brandColor: "#1b2f43",
  accentColor: "#b7c7d9",
  white: "#f0f4f5",
  light1: "#45586e",
  light2: "#e9faff",
  gray: "#acb0b4",
  darkGray: "#9d9d9d",
  dark1: "#00051c",
  dark2: "#8796a8",
  black: "#111417",
  blackTranslucent: "rgba(17, 20, 23, .9)",
}

const fonts = {
  heading: '"Lato", Helvetica, sans-serif',
  sans: "Helvetica, Arial, sans-serif",
  serif: '"adobe-garamond-pro", Georgia, serif',
}

const fontSizes = [12, 14, 16, 24, 32, 48, 64, 96, 128]

export const Global = createGlobalStyle`
  body {
    font-size: ${fontSizes[0]};
    font-family: ${fonts.sans};
  }
`

export function Provider({ children, theme }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Global />
        {children}
      </>
    </ThemeProvider>
  )
}

export const theme = {
  colors,
  fonts,
  fontSizes,
}
