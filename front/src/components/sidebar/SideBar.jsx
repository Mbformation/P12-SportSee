import IconTemplate from './iconTemplate.jsx'
import { Link } from 'react-router-dom';
import Yoga from './../../assets/icons/yoga.svg';
import Swimming from './../../assets/icons/swimming.svg';
import Cycling from './../../assets/icons/cycling.svg';
import Lifting from './../../assets/icons/lifting.svg';
import { ReactComponent as HeaderLogo } from './../../assets/logo.svg';
export default function SideBar() {
  return (
    <div className="sidebar-wrapper">
      <IconTemplate />
      <Link to='/'><HeaderLogo /></Link>
    </div>
  );
}