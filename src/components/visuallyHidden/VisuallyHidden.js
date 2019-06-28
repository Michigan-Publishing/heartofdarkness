import styled from "styled-components";

const hiddenCss = `
  position: absolute !important;
  clip: rect(1px,1px,1px,1px) !important;
  clip: rect(1px,1px,1px,1px) !important;
  height: 1px !important;
  width: 1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  margin: 0 !important; 
`;

export const visuallyHiddenWrapper = component => styled(component)`
  ${hiddenCss};
`;

const VisuallyHidden = styled.span`
  ${hiddenCss};
`;

export default VisuallyHidden;
