import React, { useEffect } from "react";
import { connect } from "react-redux";
import EventItem from "./EventItem";
import Preloader from "../layouts/Preloader";
import PropTypes from "prop-types";
import { getEvents } from "../../actions/eventActions";

const Events = ({ log: { logs, loading }, getEvents }) => {
  useEffect(() => {
    getEvents();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Events Details</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map((log) => <EventItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Events.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getEvents })(Events);
