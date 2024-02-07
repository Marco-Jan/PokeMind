import './App.css';
import { Header } from './Components/header';
import { CardListContainer } from './Components/CardList.container';
import { Background } from './Components/background';

function App() {


  return (
    <>
      <Background />
      <Header/>
      <CardListContainer />
    </>
  );
}

export default App;
