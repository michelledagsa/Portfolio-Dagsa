import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/Michelle H. Dagsa.pdf";

const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="Michelle H. Dagsa">
        <img
          src={DownloadIcon}
          alt="Resume download button"
        />
        Download Resume
      </a>
    </section>
  );
};

export default DownloadResume;
