import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deletePer } from '../../actions/personActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const PersonItem = ({ tech: { id, firstName, lastName }, deletePer }) => {
  const onDelete = () => {
    deletePer(id);
    M.toast({ html: 'Person deleted' });
  };

  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

PersonItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deletePer })(PersonItem);
