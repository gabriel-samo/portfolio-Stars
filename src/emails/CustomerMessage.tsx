import * as React from "react";
import moment from "moment";
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

interface Props {
  name: string;
  email: string;
  message: string;
}

export const CustomerMessage = ({ name, email, message }: Props) => (
  <Tailwind>
    <Html>
      <Head />
      <Preview>New message from {name}!</Preview>
      <Body className="bg-white">
        <Container className="px-4 m-auto">
          <Heading className="font-sans text-[#333] text-[24px] font-bold my-[40px] mx-0 p-0">
            New message from {name}!
          </Heading>
          <Text className="text-[#333] mb-[14px] font-sans text-sm my-[24px] mx-0">
            <span className="font-bold">Name:</span>{" "}
            <div className="">{name}</div>
          </Text>
          <Text className="text-[#333] mb-[14px] font-sans text-sm my-[24px] mx-0">
            <span className="font-bold">Email:</span>{" "}
            <a href={`mailto:${email}`}>{email}</a>
          </Text>
          <Text className="text-[#333] mb-[14px] font-sans text-sm my-[24px] mx-0 flex flex-col">
            <span className="font-bold">Message:</span>
            <div className="">{message}</div>
          </Text>

          <Text className="text-[#ababab] font-sans text-sm mt-[14px] mb-[16px] mx-0 leading-[30px]">
            The mail was recieved at{" "}
            <span className="!underline text-gray-500">
              {moment().format("DD/MM/YYYY HH:mm:ss")}
            </span>
            <br />
            You need to reply to the customer until{" "}
            <span className="!underline text-gray-500">
              {moment().add(1, "days").format("DD/MM/YYYY HH:mm:ss")}
            </span>
            .
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

export default CustomerMessage;
