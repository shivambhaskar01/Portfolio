import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [attachmentNames, setAttachmentNames] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("contact") === "sent") {
      setStatus("Thanks. Your message has been sent.");
      window.history.replaceState({}, "", `${window.location.pathname}#contact`);
    }
  }, []);

  const handleAttachmentChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.currentTarget.files ?? []);
    const totalSize = files.reduce((total, file) => total + file.size, 0);

    if (files.length > 3) {
      event.currentTarget.value = "";
      setAttachmentNames("");
      setStatus("Choose up to 3 files.");
      return;
    }

    if (totalSize > 10 * 1024 * 1024) {
      event.currentTarget.value = "";
      setAttachmentNames("");
      setStatus("Attachments must total 10 MB or less.");
      return;
    }

    setStatus("");
    setAttachmentNames(files.map((file) => file.name).join(", "));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const nextField = event.currentTarget.elements.namedItem("_next") as HTMLInputElement;
    nextField.value = `${window.location.origin}${window.location.pathname}?contact=sent#contact`;
  };

  return (
    <section className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <p className="contact-eyebrow">OPEN TO GOOD CONVERSATIONS</p>
          <h2>Get in <span>touch</span></h2>
          <p className="contact-intro">
            Have a platform, reliability, or engineering leadership challenge
            in mind? Send me a note.
          </p>
        </div>

        <div className="contact-layout">
          <form
            className="contact-form"
            action="https://formsubmit.co/shivambhaskar95@gmail.com"
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_subject" value="Portfolio contact" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="" />
            <label className="contact-honeypot" aria-hidden="true">
              Leave this field empty
              <input name="_honey" tabIndex={-1} autoComplete="off" />
            </label>

            <div className="contact-field-row">
              <label className="contact-field">
                <span>Name</span>
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label className="contact-field">
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
            </div>

            <label className="contact-field">
              <span>Message</span>
              <textarea name="message" rows={5} required />
            </label>

            <label className="contact-field contact-attachment">
              <span>Attachments</span>
              <input
                name="attachment"
                type="file"
                accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                multiple
                onChange={handleAttachmentChange}
              />
              <small>{attachmentNames || "Up to 3 files · 10 MB total"}</small>
            </label>

            <div className="contact-submit-row">
              <button type="submit">
                Send message <MdArrowOutward aria-hidden="true" />
              </button>
              <p className="contact-status" aria-live="polite">{status}</p>
            </div>
          </form>

          <aside className="contact-aside">
            <div className="contact-box">
              <h3>Email</h3>
              <a href="mailto:shivambhaskar95@gmail.com" data-cursor="disable">
                shivambhaskar95@gmail.com
              </a>
            </div>
            <div className="contact-box">
              <h3>Elsewhere</h3>
            <a
              href="https://github.com/shivambhaskar01"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/shivambhaskar01"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://medium.com/@shivambhaskar95"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Medium <MdArrowOutward />
            </a>
            </div>
          </aside>
          </div>
        <footer className="contact-footer">
          <p>Designed and developed by <span>Shivam Bhaskar</span></p>
          <p><MdCopyright aria-hidden="true" /> 2026</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
