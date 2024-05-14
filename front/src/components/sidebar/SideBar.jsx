import Yoga from './../../assets/icons/yoga.svg';
import Swimming from './../../assets/icons/swimming.svg';
import Cycling from './../../assets/icons/cycling.svg';
import Lifting from './../../assets/icons/lifting.svg';
import ButtonIcon from './ButtonIcon.jsx';
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="buttons-wrapper">
        <ButtonIcon icon={Yoga}/>
        <ButtonIcon icon={Swimming}/>
        <ButtonIcon icon={Cycling}/>
        <ButtonIcon icon={Lifting}/>
      </div>
      <p>
        Copyright SportSee 2020
      </p>
    </div>
  );
}