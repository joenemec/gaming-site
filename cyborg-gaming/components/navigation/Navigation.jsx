import Image from "next/image";

import Link from "next/link";

import { NavigationLinks } from "./NavigationLinks";
import { TbSearch } from "react-icons/tb";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image src="/images/logo.png" width={191} height={50.73} />
        </div>
        <div className={styles.search}>
          <input placeholder="Type Something"></input>
        </div>
      </div>
      <nav className={styles.nav}>
        <ul>
          {NavigationLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.url}>{link.title}</Link>
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
    </header>
  );
};

export default Navigation;
