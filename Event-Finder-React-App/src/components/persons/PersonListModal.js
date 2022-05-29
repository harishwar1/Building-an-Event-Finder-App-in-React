import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TechItem from './PersonItem';
import { getPers } from '../../actions/personActions';

const PersonListModal = ({ getPers, tech: { techs, loading } }) => {
  useEffect(() => {
    getPers();
    // eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Person List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

PersonListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getPers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getPers })(PersonListModal);
