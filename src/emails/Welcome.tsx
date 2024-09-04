import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Tailwind,
  Text
} from "@react-email/components";
import * as React from "react";

interface Props {
  name: string;
  email: string;
}

export const Welcome = ({ name, email }: Props) => (
  <Tailwind>
    <Html>
      <Head />
      <Preview>Hi, I got your message!</Preview>
      <Body className="bg-white">
        <Container className="px-4 m-auto">
          <Heading className="font-sans text-[#333] text-[24px] font-bold my-[40px] mx-0 p-0">
            Hi 👋, Your message was sent!
          </Heading>
          <Text className="text-[#333] mb-[14px] font-sans text-sm my-[24px] mx-0">
            Dear {name},
            <br />
            Your message was sent successfully and I will get back to you as
            soon as possible.
            <br />
            Usually it takes 24 hours or less.
            <br />
            Thank you for contacting me.
          </Text>

          <Text className="text-[#ababab] font-sans text-sm mt-[14px] mb-[16px] mx-0">
            Please make sure that the email you used to send the message is
            correct.
            <br />
            {email}
          </Text>
          <Text className="text-[#ababab] font-sans text-sm mt-[14px] mb-[16px] mx-0">
            If you didn&apos;t send a message, you can safely ignore this email.
          </Text>

          <Text className="text-[#898989] font-sans text-[12px] leading-[22px] mt-[12px] mb-[24px]">
            <Link
              href="https://www.gabrielsamo.com"
              target="_blank"
              className="text-[#898989] font-sans text-sm !underline"
            >
              Gabriel Samoylov
            </Link>
            , Web Developer.
            <br />
            All it takes to have a great website.
          </Text>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default Welcome;
