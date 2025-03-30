import { Col } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";

export const ResumeDownload = () => {
  return (
    <Col lg={12}>
      <div className="resume-download-box wow slideInUp">
        <h3>Download My Resume</h3>
        <p>Click the button below to download my latest resume.</p>
        <a href="/resume.pdf" download="Pratik_Sarkar_Resume.pdf" className="download-btn">
          <FaDownload /> Download Resume
        </a>
      </div>
    </Col>
  );
};
