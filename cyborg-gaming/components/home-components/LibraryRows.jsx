import Image from "next/image";
import Button from "../ui/Button";
import { LibraryHomeRows } from "./HomeContent";

import styles from "./LibraryRows.module.scss";

const LibraryRows = (props) => {
  return (
    <div className={styles.rows}>
      {props.items.map((row, index) => (
        <div className={styles.row} key={index}>
          <Image
            className={styles.image}
            src={row.image}
            width={80}
            height={80}
            alt={row.game}
          />
          <ul className={styles.text}>
            <li className={styles.game}>
              <h5>
                {row.game}
                <p>{row.company}</p>
              </h5>
            </li>
            <li className={styles.add}>
              <h5>
                {row.add.added}
                <p>{row.add.date}</p>
              </h5>
            </li>
            <li className={styles.time}>
              <h5>
                {row.time.played}
                <p>{row.time.hours}</p>
              </h5>
            </li>
            <li className={styles.current}>
              <h5>
                {row.current.state}
                <p>{row.current.loaded}</p>
              </h5>
            </li>
            <Button items={LibraryHomeRows} />
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LibraryRows;
