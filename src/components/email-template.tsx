export const EmailTemplate = ({
  fullName,
  email,
  company,
  message,
}: {
  fullName: string;
  email: string;
  company?: string;
  message: string;
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      backgroundColor: "#f9f9f9",
    }}
  >
    <h1 style={{ color: "#00b300", marginBottom: "20px" }}>
      New Contact from {fullName}
    </h1>

    <div style={{ marginTop: "20px", lineHeight: "1.8", color: "#333" }}>
      <p style={{ marginBottom: "10px" }}>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${email}`} style={{ color: "#00b300" }}>
          {email}
        </a>
      </p>

      <p style={{ marginBottom: "10px" }}>
        <strong>Company:</strong> {company || "Not provided"}
      </p>

      <p style={{ marginBottom: "10px" }}>
        <strong>Message:</strong>
      </p>

      <div
        style={{
          whiteSpace: "pre-wrap",
          backgroundColor: "#f5f5f5",
          padding: "15px",
          borderLeft: "4px solid #00FF00",
          marginTop: "10px",
        }}
      >
        {message}
      </div>
    </div>

    <div
      style={{
        marginTop: "30px",
        color: "#999",
        fontSize: "12px",
        borderTop: "1px solid #ddd",
        paddingTop: "20px",
      }}
    >
      <p>This message was sent from your portfolio contact form.</p>
      <p>© {new Date().getFullYear()} Luiz Dev. All rights reserved.</p>
    </div>
  </div>
);
