import { useState } from 'react'

import Hamburger from 'hamburger-react'
import BurgerMenu from './components/BurgerMenu'

import NavbarList from './components/NavbarList'



import styles from './Navbar.module.scss'

const Navbar = () => {
    const [openBurger, setOpenBurger] = useState(false)

    const toggleBurger = () => {
        setOpenBurger(!openBurger)
    }

    return (
        <>
            <div className={styles.navbarWrapper}>
                <NavbarList />
            </div>
            <div className={styles.burger}>
                <Hamburger toggled={openBurger} toggle={setOpenBurger} size={20} />
            </div>
            {openBurger && <BurgerMenu><NavbarList onClose={toggleBurger} /></BurgerMenu>}
        </>
    )
};

export default Navbar
