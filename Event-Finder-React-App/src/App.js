import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layouts/SearchBar';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Events from './components/events/Events';
import AddBtn from './components/layouts/AddBtn';
import AddEventModal from './components/events/AddEventModal';
import EditEventModal from './components/events/EditEventModal';
import AddPersonModal from './components/persons/AddPersonModal';
import PersonListModal from './components/persons/PersonListModal';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddEventModal />
          <EditEventModal />
          <AddPersonModal />
          <PersonListModal />
          <Events />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
