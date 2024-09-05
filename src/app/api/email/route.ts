import { handle } from "hono/vercel";
import { Resend } from "resend";
import { Hono } from "hono";

// import Welcome from "@/emails/Welcome";
// import CustomerMessage from "@/emails/CustomerMessage";
import Customer from "@/emails/Customer";
import Notification from "@/emails/Notification";

export const runtime = "edge";

const app = new Hono().basePath("/api");
const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/email", async (c) => {
  return c.json({ message: "Hello from email route" });
});

app.post("/email", async (c) => {
  try {
    const { name, email, message } = await c.req.json();

    const { data: toCustomer, error: toCustomerError } =
      await resend.emails.send({
        from: "samo@gabrielsamo.com",
        to: email,
        subject: "Your message was sent! | gabrielsamo.com",
        react: Customer({ name, email })
      });

    const { data: toMe, error: toMeError } = await resend.emails.send({
      from: "samo@gabrielsamo.com",
      to: "gsamo122@gmail.com",
      subject: "New message from customer | gabrielsamo.com",
      react: Notification({ name, email, message })
    });

    if (toCustomerError) {
      return c.json({ error: toCustomerError.message }, { status: 500 });
    }

    if (toMeError) {
      return c.json({ error: toMeError.message }, { status: 500 });
    }

    return c.json({ status: 200, toMe });
  } catch (error: any) {
    return c.json({ error: error.message }, { status: 500 });
  }
});

export const GET = handle(app);
export const POST = handle(app);
