import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { NavigationLinks } from "./NavigationLinks";
import { CgMenuLeft, CgClose } from "react-icons/cg";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const menuHandler = () => {
    setIsResponsive(true);
  };

  const closeHandler = () => {
    setIsResponsive(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/images/logo.png"
                width={191}
                height={50.73}
                alt="Company Logo"
              />
            </Link>
          </div>
          <div className={styles.search}>
            <input placeholder="Type Something"></input>
          </div>
        </div>
        <nav
          className={
            isResponsive ? [styles.nav, styles.active].join(" ") : [styles.nav]
          }
        >
          <ul>
            {NavigationLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Link href={link.url} onClick={closeHandler}>
                    {link.title}
                  </Link>
                  {link.image ? (
                    <Image
                      className={styles.profile}
                      src={link.image}
                      width={30}
                      height={30}
                    />
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <button className={styles.menu}>
        {!isResponsive ? (
          <CgMenuLeft size={35} onClick={menuHandler} />
        ) : (
          <CgClose size={35} onClick={closeHandler} />
        )}
      </button>
    </header>
  );
};

export default Navigation;
