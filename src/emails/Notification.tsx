import moment from "moment";

type NotificationProps = {
  name: string;
  email: string;
  message: string;
};

const Notification = ({ name, email, message }: NotificationProps) => {
  return (
    <html>
      <head>
        <title>New message from {name}!</title>
      </head>
      <body className="bg-white">
        <div className="container px-4 m-auto">
          <h1 className="font-sans text-[#333] text-[24px] font-bold my-[40px] mx-0 p-0">
            New message from {name}!
          </h1>

          <div className="text-[#333] mb-[14px] font-sans text-sm my-[24px] mx-0">
            <span className="font-bold">Name:</span> {name}
          </div>

          <br />

          <div className="text-[#333] mb-[14px] font-sans text-sm my-[24px] mx-0">
            Email: <a href={`mailto:${email}`}>{email}</a>
          </div>

          <br />

          <div className="text-[#333] mb-[14px] font-sans text-sm my-[24px] mx-0 flex flex-col">
            <span className="font-bold">Message:</span>
            <div className="">{message}</div>
          </div>

          <br />
          <br />

          <div className="text-[#ababab] font-sans text-sm mt-[14px] mb-[16px] mx-0 leading-[30px]">
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
          </div>
        </div>
      </body>
    </html>
  );
};

export default Notification;
