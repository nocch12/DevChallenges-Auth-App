import React from "react";
import {NavLink} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

type PropType = {
  isShow: boolean;
  clicked: () => void
}

const NavItems = React.forwardRef<HTMLDivElement, PropType>(({isShow, clicked}, ref) => {

  let navClasses = [
    'w-48 absolute top-100 right-0 bg-white border border-mygray-400 shadow p-3 rounded-xl'
  ];

  if(!isShow) {
    navClasses.push('hidden');
  }
  return (
    <div ref={ref} className={navClasses.join(" ")}>
      <ul className="list-none flex flex-col">
        <li>
          <NavLink
            className="p-3 flex rounded-lg bg-mygray-600 text-myblack-200"
            to="/user"
            onClick={clicked}
          >
            <AccountCircleIcon />
            <span>MyProfile</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="p-3 flex text-myblack-200" to="/user">
            <SupervisorAccountIcon />
            <span>Chat</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="p-3 flex rounded-lg text-myred" to="/logout">
            <ExitToAppIcon />
            <span>Logout</span>
          </NavLink>
        </li>
      </ul>
      <div></div>
    </div>
  );
});

export default NavItems;
