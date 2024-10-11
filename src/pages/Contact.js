import React from "react";
import PageHeading from "../common/PageHeading";

const ContactUs = () => {
  return (
    <div>
      <PageHeading home={"home"} pagename={"Contact Us"} />
      <div
        style={{
          width: "90%",
          maxWidth: "1200px",
          margin: "auto",
          padding: "1rem",
        }}
      >
        <div
          style={{
            margin: "2rem 0",
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Contact Us
        </div>

        <section style={{ backgroundColor: "white", padding: "2rem 0" }}>
          <div
            style={{
              padding: "2rem 1rem",
              maxWidth: "800px",
              margin: "auto",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              borderRadius: "0.75rem",
            }}
          >
            <form
              action="#"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "1rem",
                    color: "#1f2937",
                    fontWeight: "bold",
                  }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  style={{
                    padding: "0.75rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #d1d5db",
                    width: "100%",
                    backgroundColor: "#f9fafb",
                    color: "#1f2937",
                    fontSize: "1rem",
                  }}
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "1rem",
                    color: "#1f2937",
                    fontWeight: "bold",
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  style={{
                    padding: "0.75rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #d1d5db",
                    width: "100%",
                    backgroundColor: "#f9fafb",
                    color: "#1f2937",
                    fontSize: "1rem",
                  }}
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "1rem",
                    color: "#1f2937",
                    fontWeight: "bold",
                  }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  style={{
                    padding: "0.75rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #d1d5db",
                    width: "100%",
                    backgroundColor: "#f9fafb",
                    color: "#1f2937",
                    fontSize: "1rem",
                    resize: "vertical",
                  }}
                  placeholder="Leave a comment..."
                ></textarea>
              </div><button
  style={{
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    color: "white",
    borderRadius: "0.5rem",
    backgroundColor: "#ffa832",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    width: "100%",
    maxWidth: "200px",
    alignSelf: "center",
  }}
  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#ffa832")}
  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ffa832")}
>
  <a href="/" >Send Message</a>
</button>

            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
