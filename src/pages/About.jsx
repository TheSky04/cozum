import { useTranslation } from "react-i18next";
import MenuBar from "../components/MenuBar";
import styles from "../styles/About.module.css";
import dryer from "../assets/machine/kurutma.webp";
import dishwasher from "../assets/machine/bulasik.webp";
import climate from "../assets/machine/klima.jpg";
import oven from "../assets/machine/firin.jpg";
import refrigerator from "../assets/machine/buzdolabi.webp";
import washingMachine from "../assets/machine/camasir.jpg";

function About() {
  const { t } = useTranslation();
  return (
    <div>
      <MenuBar menu={t("Home")} subMenu={t("About")} />
      <div className="background">
        <div className={styles.aboutFirstTopTitleContainer}>
          <div className={styles.aboutTitle}>
            <p>{t("AboutSubTitle")}</p>
            <h4>{t("AboutMainTitle")}</h4>
          </div>
          <div className={styles.aboutFlexContainer}>
            <img src={refrigerator} alt="Refrigerator" />
            <div className={styles.aboutTopContent}>
              <h4>{t("AboutTitle1")}</h4>
              <p className={styles.aboutText}>{t("AboutText1")} </p>
            </div>
          </div>
        </div>
        <div className={styles.aboutTopContainer}>
          <div className={styles.aboutTopContent}>
            <h4>{t("AboutTitle2")}</h4>
            <p className={styles.aboutText}>{t("AboutText2")} </p>
          </div>
          <img src={washingMachine} alt="washing machine" />
        </div>
        <div className={styles.aboutTopContainer}>
          <img src={dishwasher} alt="Dishwasher" />
          <div className={styles.aboutTopContent}>
            <h4>{t("AboutTitle3")}</h4>
            <p className={styles.aboutText}>{t("AboutText3")} </p>
          </div>
        </div>
        <div className={styles.aboutTopContainer}>
          <div className={styles.aboutTopContent}>
            <h4>{t("AboutTitle4")}</h4>
            <p className={styles.aboutText}>{t("AboutText4")} </p>
          </div>
          <img src={climate} alt="Climate" />
        </div>
        <div className={styles.aboutTopContainer}>
          <img src={oven} alt="oven" />
          <div className={styles.aboutTopContent}>
            <h4>{t("AboutTitle5")}</h4>
            <p className={styles.aboutText}>{t("AboutText5")} </p>
          </div>
        </div>
        <div className={styles.aboutTopContainer}>
          <div className={styles.aboutTopContent}>
            <h4>{t("AboutTitle6")}</h4>
            <p className={styles.aboutText}>{t("AboutText6")} </p>
          </div>
          <img src={dryer} alt="dryer" />
        </div>
      </div>
    </div>
  );
}

export default About;
