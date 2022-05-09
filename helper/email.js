import nodemailer from "nodemailer";

export const registerEmail = async (data) => {
  console.log(data);

  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "27f9db4dd2556d",
      pass: "b6ddec9aaf769e",
    },
  });

  const message = {
    from: "development@gmail.com",
    to: data,
    subject: "Validate your Email",
    text: "here",
    html: `
        <h1>please click link bellow</h1>
        <a href="#">click here please</a>
        `,
  };

  try {
    await transport.sendMail(message);
  } catch (error) {
    console.log("aqui en error");
    console.log(error);
  }
};
