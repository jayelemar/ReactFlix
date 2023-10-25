import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth >= 640);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  const hideMenu = () => {
    setIsMenuOpen(false);
    console.log(isMenuOpen);
  };

  return (
    <header>
      <div className={`${styles.header}`}>
        <span>ReactFlix</span>
        <nav className={isMenuOpen ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`}>
          <div 
            className={ 
              isMenuOpen ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}` 
              : `${styles["nav-wrapper"]}`
              } 
              onClick={hideMenu} 
          ></div>
            
          <ul className={`${isMenuOpen ? styles['menu-open'] : ''}`}>
            <li><NavLink to="/home">Browse</NavLink></li>
            <li><NavLink to="/reg">Login</NavLink></li>
            <li>
                <NavLink className={styles['list-subscribe-button']} onClick={toggleModal}>
                  Subscribe
                </NavLink>
            </li>
            <AiOutlineClose
              className={styles['close-icon']}
              size={30}
              onClick={hideMenu}
            />
          </ul>

          <div className={styles['modal-div']} style={{ marginRight: "3%" }}>
            <NavLink className={styles['subscribe-button']} onClick={toggleModal}>
              Subscribe
            </NavLink>
            {isModalOpen && (
              <div className={styles.modal}>
                <div className={styles['modal-content']}>
                  <button className={styles['close-button']} onClick={toggleModal}>
                    &times;
                  </button>
                  <div className={styles['modal-content-centered']}>
                    <p>Want to Avail 5$ Lifetime No Ads?</p>
                    <div className={styles.line}></div>
                    <p>Or</p>
                    <div className={styles.line}></div>
                    <p>Want to Avail 1$ 1 Month No Ads?</p>
                  </div>
                  <div className={styles.line}></div>
                  <button className={styles['subscribe-modal-button']}>Subscribe Now</button>
                </div>
              </div>
            )}
          </div>
        </nav>
        <AiOutlineMenu
          className={styles['menu-icon']}
          size={30}
          onClick={toggleMenu}
        />
      </div>
    </header>
  );
};

export default Navbar;
