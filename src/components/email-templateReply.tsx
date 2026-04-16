export const EmailTemplateReply = ({ fullName }: { fullName: string }) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      backgroundColor: "#f9f9f9",
    }}
  >
    <h1 style={{ color: "#00b300", marginBottom: "20px" }}>
      Olá, {fullName}! 👋
    </h1>

    <div style={{ marginTop: "20px", lineHeight: "1.8", color: "#333" }}>
      <p>
        Obrigado por entrar em contato! Recebi sua mensagem e responderei em
        breve.
      </p>
      <p>Até logo 🚀</p>
      <p>
        <strong>Luiz Dev</strong>
      </p>
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
      <p>© {new Date().getFullYear()} Luiz Dev. All rights reserved.</p>
    </div>
  </div>
);
