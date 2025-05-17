import cozumLogo from "../assets/machine/cozumLogo.png";
import { useTranslation } from "react-i18next";
import styles from "../styles/Footer.module.css";
import {FaHome, FaPhone } from "react-icons/fa";

function Footer() {
  const { t } = useTranslation();


  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <img src={cozumLogo} alt="Cozum Technical Service Logo"></img>
        <p className={styles.footerLeftText}>{t("FooterLeftText")}</p>
      </div>
      <div className={styles.footerRight}>
        <h2 className={styles.footerTitle}>{t("ContactInformation")}</h2>
        <div className={styles.footerRightIcon}>
          <FaHome size={32} color="#212529" />
          <p>{t("Address")}</p>
        </div>
        <div className={styles.footerRightIcon}>
          <FaPhone size={32} color="#212529" />
          <div className={styles.footerRightPhoneNumbers}>
            <p>{t("PhoneNumber1")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
