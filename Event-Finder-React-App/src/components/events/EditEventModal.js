import React, { useState, useEffect } from 'react';
import PersonSelectOptions from '../persons/PersonSelectOptions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { updateEvent } from '../../actions/eventActions';

const EditEventModal = ({ current, updateEvent }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [Person, setPerson] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setPerson(current.tech);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || Person === '') {
      M.toast({ html: 'Please enter a event and details' });
    } else {
      const updEve = {
        id: current.id,
        message,
        attention,
        Person,
        date: new Date(),
      };

      updateEvent(updEve);
      M.toast({ html: `Log updated by ${Person}` });

      // Clear Fields
      setMessage('');
      setPerson('');
      setAttention(false);
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter Event</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={Person}
              className="browser-default"
              onChange={(e) => setPerson(e.target.value)}
            >
              <option value="" disabled>
                Select Person
              </option>
              <PersonSelectOptions />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

EditEventModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateEvent })(EditEventModal);
