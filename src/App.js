import styled from "styled-components";
import CustomCursor from "./components/CustomCursor";

import LoadingPage from "./components/LoadingPage";

import FONTS from './utils/fonts';

const LayoutContainer = styled.div`
  ${FONTS.BARLOW};
  font-family: 'Barlow', sans-serif;
  background-color: #000;
  color: #fff;
  height: 100vh;
  width: 100%;
`;

function App() {

  return (
    <LayoutContainer>
      <CustomCursor/>
      <LoadingPage />
    </LayoutContainer>
  );
}

export default App;
