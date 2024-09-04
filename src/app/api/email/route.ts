import { Resend } from "resend";
import { NextResponse } from "next/server";

import Welcome from "@/emails/Welcome";
import CustomerMessage from "@/emails/CustomerMessage";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const { data: toCustomer, error: toCustomerError } =
      await resend.emails.send({
        from: "samo@gabrielsamo.com",
        to: email,
        subject: "Your message was sent! | gabrielsamo.com",
        react: Welcome({ name, email })
      });

    const { data: toMe, error: toMeError } = await resend.emails.send({
      from: "samo@gabrielsamo.com",
      to: "gsamo122@gmail.com",
      subject: "New message from customer | gabrielsamo.com",
      react: CustomerMessage({ name, email, message })
    });

    if (toCustomerError) {
      return NextResponse.json(
        { error: toCustomerError.message },
        { status: 500 }
      );
    }

    if (toMeError) {
      return NextResponse.json({ error: toMeError.message }, { status: 500 });
    }

    return NextResponse.json({ status: 200, toCustomer, toMe });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
