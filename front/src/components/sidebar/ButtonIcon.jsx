import PropTypes from 'prop-types';

// Boutons composant la sidebar

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