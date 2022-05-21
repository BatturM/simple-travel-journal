import './App.css';
import Main from './Main';
import Navbar from './Navbar';
import data from './data';

export default function App() {

  const datas = data.map(items => {
    return (
      <Main
        country={items.country}
        img={items.img}
        link={items.link}/>
    )
  })

  return (
    <div className="App">
      <Navbar />
      {datas}
    </div>
  );
}


