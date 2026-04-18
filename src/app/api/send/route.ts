import { EmailTemplate } from "@/components/email-template";
import { EmailTemplateReply } from "@/components/email-templateReply";
import { Resend } from "resend";

interface ContactRequest {
  fullName: string;
  email: string;
  company?: string;
  message: string;
}

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not defined");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body: ContactRequest = await request.json();
    const { fullName, email, company, message } = body;

    if (!fullName || !email || !message) {
      console.error("Missing required fields:", { fullName, email, message });
      return Response.json(
        {
          error:
            "Missing required fields: fullName, email, and message are required",
        },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email format:", email);
      return Response.json({ error: "Invalid email format" }, { status: 400 });
    }

    const sanitizedEmail = email.toLowerCase().trim();
    const sanitizedFullName = fullName.trim();
    const sanitizedMessage = message.trim();
    const sanitizedCompany = company?.trim() || "Not provided";

    const { data, error } = await resend.batch.send([
      {
        from: "luizdev.com <contato@luizdev.com>",
        to: "luizdeveloper17@gmail.com",
        subject: `Novo contato de ${sanitizedFullName}`,
        replyTo: sanitizedEmail,
        react: EmailTemplate({
          fullName: sanitizedFullName,
          email: sanitizedEmail,
          company: sanitizedCompany,
          message: sanitizedMessage,
        }),
      },
      {
        from: "Luiz Dev <contato@luizdev.com>",
        to: sanitizedEmail,
        subject: `Olá ${sanitizedFullName}, recebi sua mensagem!`,
        react: EmailTemplateReply({
          fullName: sanitizedFullName,
        }),
      },
    ]);

    if (error) {
      console.error("Resend API Error:", error);
      return Response.json(
        {
          error: `Failed to send email: ${error.message || JSON.stringify(error)}`,
          details: error,
        },
        { status: 500 },
      );
    }

    return Response.json(
      {
        success: true,
        message: "Email sent successfully!",
        data,
      },
      { status: 200 },
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("API Route Error:", errorMessage, error);

    return Response.json(
      {
        error: `Server error: ${errorMessage}`,
        details: process.env.NODE_ENV === "development" ? error : undefined,
      },
      { status: 500 },
    );
  }
}
