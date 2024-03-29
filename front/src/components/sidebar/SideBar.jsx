import { ReactComponent as Yoga} from './../../assets/icons/yoga.svg';
import { ReactComponent as Swimming } from './../../assets/icons/swimming.svg';
import { ReactComponent as Cycling } from './../../assets/icons/cycling.svg';
import { ReactComponent as Lifting } from './../../assets/icons/lifting.svg';
export default function SideBar() {
  return (
    <div className="sidebar-wrapper">
      <ul>
        <li><Yoga /></li>
        <li><Swimming /></li>
        <li><Cycling /></li>
        <li><Lifting /></li>
      </ul>
    </div>
  );
}