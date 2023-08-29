import styled from '@emotion/styled';

import Header from './components/header/Header';
import Main from './components/main/Main';
import { theme } from './styles/theme';

function App() {
  return (
    <>
      <Container>
        <Header></Header>
        <Main></Main>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 1200px;
  margin: auto;
  height: 100vh;
  background-color: ${theme.color.G1};
`;
