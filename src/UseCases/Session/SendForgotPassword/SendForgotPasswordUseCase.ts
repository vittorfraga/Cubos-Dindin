import SendRecoverEmail from "@config/mail/EmailTransporter";
import AppError from "@shared/errors/AppError";
import { IUsersRepository } from "src/repositories/IUsersRepository";
import { IUsertokenRepository } from "src/repositories/IUsertokenRepository";
import path from "path";

interface IRequest {
  email: string;
}

class SendForgotPasswordUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private userTokenRepository: IUsertokenRepository
  ) {}

  async execute({ email }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("User not found!", 404);
    }

    const { token } = await this.userTokenRepository.generate(user.id);

    const forgotPasswordTemplate = path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "views",
      "forgot.hbs"
    );

    await SendRecoverEmail.sendMail({
      to: { name: user.name, email: user.email },
      subject: "teste10",
      templateData: {
        file: forgotPasswordTemplate,
        variables: {
          name: user.name,
          link: `http://localhost:3333/reset_password?token=${token}`,
        },
      },
    });

    console.log(forgotPasswordTemplate);
  }
}

export default SendForgotPasswordUseCase;
