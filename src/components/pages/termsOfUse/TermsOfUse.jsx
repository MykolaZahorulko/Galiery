import React from "react";
import styles from "./TermsOfUse.module.scss";
import { useTranslation } from "react-i18next";
import "../../../i18n";

const TermsOfUse = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.terms}>
      <div className={`${styles.terms__container} ${styles.container}`}>
        <h2 className={`${styles.terms__title} ${styles.title}`}>
          {t("termsOfUse.title")}
        </h2>
        <div className={styles.terms__text}>
          <p className={styles.terms__paragraph}>{t("termsOfUse.agreement")}</p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.publicAgreement")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.byEntering")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.readCarefully")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.agreementCompletion")}
          </p>

          <p
            className={`${styles.terms__paragraph} ${styles.terms__mainParagraph}`}
          >
            {t("termsOfUse.termsAndDefinitions")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.productDefinition")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.onlineStoreDefinition")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.buyerDefinition")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.sellerDefinition")}
          </p>

          <p
            className={`${styles.terms__paragraph} ${styles.terms__mainParagraph}`}
          >
            {t("termsOfUse.contractSubjectAndProcedure")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.sellerObligations")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.notDiscloseInformation")}
          </p>

          <p
            className={`${styles.terms__paragraph} ${styles.terms__mainParagraph}`}
          >
            {t("termsOfUse.orderingProcedure")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.buyerPlacesOrder")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.sellerCanRefuse")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.inCaseOfProductAbsence")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.buyerCanReplace")}
          </p>

          <p
            className={`${styles.terms__paragraph} ${styles.terms__mainParagraph}`}
          >
            {t("termsOfUse.productPrice")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.pricesDeterminedBySeller")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.pricesCanChange")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.deliveryCostDependsOnAddress")}
          </p>

          <p
            className={`${styles.terms__paragraph} ${styles.terms__mainParagraph}`}
          >
            {t("termsOfUse.rightsAndObligations")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.sellerCommitsTo")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.sellerHasRight")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.buyerAgreement")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.buyerAgreementDetails1")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.buyerAgreementDetails2")}
          </p>

          <p
            className={`${styles.terms__paragraph} ${styles.terms__mainParagraph}`}
          >
            {t("termsOfUse.returnConditions")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.returnGuarantee")}
          </p>

          <p className={styles.terms__paragraph}>{t("termsOfUse.noRefund")}</p>

          <p
            className={`${styles.terms__paragraph} ${styles.terms__mainParagraph}`}
          >
            {t("termsOfUse.responsibility")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.responsibilityClause1")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.responsibilityClause2")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.forceMajeure")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.forceMajeureDetails")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.preliminaryConditions")}
          </p>

          <p
            className={`${styles.terms__paragraph} ${styles.terms__mainParagraph}`}
          >
            {t("termsOfUse.confidentialityAndDataProtection")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.dataProcessingConsent")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.noDisclosure")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.dataTransmission")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.buyerResponsibility")}
          </p>

          <p
            className={`${styles.terms__paragraph} ${styles.terms__mainParagraph}`}
          >
            {t("termsOfUse.informationNotifications")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.informationConsent")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.optOutInstructions")}
          </p>

          <p
            className={`${styles.terms__paragraph} ${styles.terms__mainParagraph}`}
          >
            {t("termsOfUse.useOfMaterials")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.materialsProtection")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.contentProtection")}
          </p>

          <p className={styles.terms__paragraph}>{t("termsOfUse.noRights")}</p>

          <p
            className={`${styles.terms__paragraph} ${styles.terms__mainParagraph}`}
          >
            {t("termsOfUse.otherConditions")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.agreementTerritory")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.disputeResolution")}
          </p>

          <p className={styles.terms__paragraph}>
            {t("termsOfUse.contractChanges")}
          </p>
        </div>
      </div>
    </section>
  );
};
export default TermsOfUse;
