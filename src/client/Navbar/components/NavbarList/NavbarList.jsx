import {v4} from 'uuid'

import NavbarMenuItem from "../NavbarMenuItem";
import menuItems from "./menuItems";

import styles from "./NavbarList.module.scss";

const NavbarList = ({ onClose }) => {
    const navbarMenuElements = menuItems.map(item => <NavbarMenuItem key={v4()}{...item} onClick={ onClose }/>)

    return (
        <ul className={styles.nav}>
            {navbarMenuElements}
        </ul>
    )
};

export default NavbarList;
