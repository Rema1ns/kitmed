import Header from '../header/Header';
import Title from '../Title/Title';
import Content from '../content/Content';

import { GlobalStyled } from './AppStyled';

function App() {
  return (
    <GlobalStyled>
      <Header />
      <Title />
      <Content />
    </GlobalStyled>
  );
}

export default App;
