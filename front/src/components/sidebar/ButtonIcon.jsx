import PropTypes from 'prop-types';

export default function ButtonIcon({icon}) {
    return (
      <button className="icon-wrapper">
        <img src={icon} alt=""></img>
      </button>
    );
  }

ButtonIcon.propTypes = {
    icon: PropTypes.string.isRequired,
};