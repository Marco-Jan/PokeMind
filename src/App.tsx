import './App.css';
import { Header } from './Components/Header';
import { CardListContainer } from './Components/CardList.container';
import { Background } from './Components/Background';

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
