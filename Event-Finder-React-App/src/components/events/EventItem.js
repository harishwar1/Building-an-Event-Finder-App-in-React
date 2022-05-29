import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteEvent, setCurrent } from '../../actions/eventActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const EventItem = ({ log, deleteEvent, setCurrent }) => {
  const onDelete = () => {
    deleteEvent(log.id);
    M.toast({ html: 'Event Deleted' });
  };

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-event-modal"
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> last updated by{' '}
          <span className="black-text">{log.tech}</span> on{' '}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

EventItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteEvent, setCurrent })(EventItem);
