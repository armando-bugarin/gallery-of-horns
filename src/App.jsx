import './App.css';
import Header from './components/Header.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header title="Gallery of Horns" />
      <main>
        <Gallery title="Gallery of Horns" />
      </main>
      <Footer copyright="2023 Armando Bugarin" />
    </div>
  );
}

export default App;
