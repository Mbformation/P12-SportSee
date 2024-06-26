import PropTypes from 'prop-types';

// Composant représentant les cards de l'utilisateur
// Les données des cartes sont les principaux nutriments consommés et la valeur calorique globale
export default function KeyData(props) {
    const {icon, name, KeyData} = props;
    const pathParts = icon.split('/');
    const className = pathParts[3].split('.')[0];
    return(
        <div className="keydata-container">
            <div className={`icon-container icon-container-${className}`}>
                <img src={icon} alt={name} className={"icon-"+className}></img>
            </div>
            <div className="content">
                <span className="value">{KeyData}</span>
                <span className="name">{name}</span>
            </div>
        </div>
    )
}

// Contrôle avec les proptypes pour le composant 
KeyData.propTypes = {
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    KeyData: PropTypes.string.isRequired,
  };