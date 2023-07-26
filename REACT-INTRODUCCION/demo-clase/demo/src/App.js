import logo from './logo.svg';
import './App.css';
import ListaPersonas from './components/ListaPersonas/ListaPersonas';


const listaPersonas=[
  {name:" Juan Sepulveda",age:19},
  {name:" Martina Sepulveda",age:19},
  {name:" Lionel messi",age:36},
  {name: "Jack Nicolson", age:67}
]
function App() {
  return (
    <div className="App">
      <ListaPersonas lista={listaPersonas}/>
    </div>
  );
}

export default App;
