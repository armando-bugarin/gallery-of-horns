
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header.jsx';
import FilterForm from './components/FilterForm.jsx'; // need this later to import the Form from the FilterForm.jsx ???
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';
import SelectedBeast from './components/SelectedBeast.jsx';
import imageUrls from './data.json'; // can change to better variable name later //
import Container from 'react-bootstrap/Container';

function App() {
  const [show, setShow] = React.useState(false);
  const [selectedBeast, setSelectedBeast] = React.useState({});
  const [filteredHorns, setFilteredHorns] = React.useState(imageUrls); // pass into Gallery. Map through data and each instance render a new beast component, pass description, url, title

  function dispayModal(title) {
    const selected = imageUrls.find(beast => beast.title === title); // last title is e.target.value in handleFilter ()
    console.log(selected);
    setSelectedBeast(selected);
    setShow(true);
  }

  function handleCloseModal() {
    setShow(false);
  }

  function handleFilter(event) { // want to target within filter form, make a function. Target value in filter form
    // need if else statement, if select all horns, return all, etc.
    const numOfHorns = parseInt(event.target.value); // parses event
    let filterHornInstance = filteredHorns; // help reset gallery to All Horns and all beasts again
    if (numOfHorns) {
      filterHornInstance = imageUrls.filter(beast => beast.horns === numOfHorns);
      // setSelectedBeast(filterHorn);
      console.log(filterHornInstance);
    } // filter out data from selectedBeast, compare index number horns to e.target, similar to line 18
    setFilteredHorns(filterHornInstance);

  }

  return (
    <Container>
      <Header title="Gallery of Horns" />
      <FilterForm handleFilter={handleFilter} />
      <Gallery message="Gallery of Horns" imageUrls={imageUrls} displayModal={dispayModal} />
      {selectedBeast && <SelectedBeast
        show={show}
        selectedBeast={selectedBeast}
        handleCloseModal={handleCloseModal}
        imageUrls={imageUrls}
      />}
      <Footer copyright="2023 Armando Bugarin" />
    </Container>
  );
}

export default App;
