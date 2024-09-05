type CustomerProps = {
  name: string;
  email: string;
};

const Customer = ({ name, email }: CustomerProps) => {
  return (
    <html>
      <head>
        <title>Hi, I got your message!</title>
      </head>
      <body>
        <div className="container">
          <h1>Hi 👋, Your message was sent!</h1>

          <div className="text-[#333] mb-[14px] font-sans text-sm my-[24px] mx-0">
            Dear {name},
            <br />
            <br />
            Your message was sent successfully and I will get back to you as
            soon as possible.
            <br />
            Usually it takes 24 hours or less.
            <br />
            Thank you for contacting me.
            <br />
            <br />
          </div>

          <div className="text-[#ababab] font-sans text-sm mt-[14px] mb-[16px] mx-0">
            Please make sure that the email you used to send the message is
            correct.
            <br />
            {email}
          </div>

          <div className="text-[#ababab] font-sans text-sm mt-[14px] mb-[16px] mx-0">
            If you didn&apos;t send a message, you can safely ignore this email.
          </div>

          <br />
          <br />

          <div className="text-[#898989] font-sans text-[12px] leading-[22px] mt-[12px] mb-[24px]">
            <a
              href="https://www.gabrielsamo.com"
              target="_blank"
              className="text-[#898989] font-sans text-sm !underline"
            >
              Gabriel Samoylov
            </a>
            , Web Developer.
            <br />
            All it takes to have a great website.
          </div>
        </div>
      </body>
    </html>
  );
};

export default Customer;
