import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { eventslogs } from '../../actions/eventActions';

const SearchBar = ({ eventslogs }) => {
  const text = useRef('');

  const onChange = (e) => {
    eventslogs(text.current.value);
  };

  return (
    <nav style={{ marginBottom: '30px' }} className="red">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Event Finder..."
              ref={text}
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  eventsLogs: PropTypes.func.isRequired,
};

export default connect(null, { eventslogs })(SearchBar);
