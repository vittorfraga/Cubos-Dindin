import nodemailer from "nodemailer";
import HandlebarsMailTemplate from "./HandleBarsMailTemplate";

interface IMailContact {
  name: string;
  email: string;
}

interface ITemplateVairable {
  [key: string]: string | number;
}

interface IParseMailTemplate {
  file: string;
  variables: ITemplateVairable;
}

interface ISendMail {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseMailTemplate;
}

export default class SendRecoverEmail {
  static async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMail): Promise<void> {
    const mailTemplate = new HandlebarsMailTemplate();

    const transporter = await nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "465"),

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    //console.log(transporter);

    const message = await transporter.sendMail({
      from: {
        name: from?.name || "Carlos Fraga",
        address: from?.email || "vittorfraga@outlook.com",
      },
      to: { name: to.name, address: to.email },
      subject,
      html: await mailTemplate.parse(templateData),
    });
  }
}
