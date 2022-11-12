import Image from "next/image";

import { FaStar, FaDownload } from "react-icons/fa";

import styles from "./PopularCard.module.scss";

const PopularCard = (props) => {
  return (
    <div className={styles.cards}>
      {props.cards.map((card, index) => (
        <div className={styles.card} key={index}>
          <Image
            className={styles.image}
            src={card.image}
            width={200}
            height={150}
          />
          <div className={styles.text}>
            <div className={styles.left}>
              <h5>
                {card.game}
                <p>{card.company}</p>
              </h5>
            </div>
            <div className={styles.right}>
              <p>
                <FaStar className={styles.star} />
                {card.rating}
              </p>
              <p>
                <FaDownload className={styles.load} />
                {card.downloads}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularCard;
