import styles from "../styles/documentation.module.scss";
import documentation from "../assets/Neev2nd.webp";
import patient from "../assets/patient.webp";
import conversation from "../assets/conversation.webp";
import integration from "../assets/integration.webp";
import head from '../assets/model.webp';
import AI from '../assets/Neev3.webp';
import rag from '../assets/rag.webp';
import privacy from '../assets/privacy.webp';
import { useState, useEffect } from "react";

const Documentation = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const mobileWidth = 768;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.documentationMainContainer}>
      <div className={styles.documentationSecondContainer}>
        <div className={styles.documentationText}>
          <div className={styles.heading}>
            Effortless Documentation For
            <br />
            <div className={styles.colorHeading}>Smarter Healthcare</div>
          </div>
          <div className={styles.secondaryText}>
            Automate your documentation process with Neev -
            {screenWidth > mobileWidth ? <br /> : " "}
            seamless, accurate, and ready for your EMRs.
          </div>
          <div className={styles.listDetails}>
            <div>
              <img src={conversation} className={styles.images} />
            </div>
            <div>
              <span className={styles.extraBold}>
                Transcribe Conversations:
              </span>
              Record and summarise doctor-patient interactions with speaker
              diarisation.
            </div>
          </div>
          <div className={styles.listDetails}>
            <div>
              <img src={patient} className={styles.images} />
            </div>
            <div>
              <span className={styles.extraBold}>Empower Patients:</span>
              Share Patient Visit Summaries (PVS) for continuity in care.
            </div>
          </div>
          <div className={styles.listDetails}>
            <div>
              <img src={integration} className={styles.images} />
            </div>
            <div>
              <span className={styles.extraBold}>Integrate Seamlessly:</span>
              Send summaries directly to EMR.
            </div>
          </div>
        </div>
        <div className={styles.documentationImage}>
          <img src={documentation} className={styles.image2} />
        </div>
      </div>
      <div className={styles.documentationThirdContainer}>
      <div className={styles.documentationImage}>
          <img src={AI} className={styles.image2} />
        </div>
      <div className={styles.documentationText}>
          <div className={styles.heading}>
          Fine-Tuned for
          {screenWidth <= mobileWidth ? <br /> : " "}
            <div className={styles.colorHeading}>Modern Healthcare</div>
          </div>
          <div className={styles.secondaryText}>
          Custom-built intelligence to simplify, secure, and redefine patient care.
          </div>
          <div className={styles.listDetails}>
            <div>
              <img src={head} className={styles.images} />
            </div>
            <div>
              <span className={styles.extraBold}>
              Clinically Optimised Models:
              </span>
              Neev's transcription and summarization models ensure accurate capture of clinical terms, diagnoses, and treatment details.
            </div>
          </div>
          <div className={styles.listDetails}>
            <div>
              <img src={rag} className={styles.images} />
            </div>
            <div>
              <span className={styles.extraBold}>RAG Architecture: </span>
              Neev's Retrieval Augmented Graph (RAG) powered systems enhance accuracy in real-time transcriptions and summaries.
            </div>
          </div>
          <div className={styles.listDetails}>
            <div>
              <img src={privacy} className={styles.images} />
            </div>
            <div>
              <span className={styles.extraBold}>Secure, Grade-A Data Privacy:</span>
              We prioritize patient confidentiality with robust, Grade-A data encryption and storage, safeguarding sensitive information at every step.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
