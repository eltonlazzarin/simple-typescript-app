import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  {
    avatar_url: "https://api.adorable.io/avatars/285/abott@adorable.png",
    name: "Elton Lazzarin",
    email: "elton.lazzarin@outlook.com"
  },
  {
    avatar_url: "https://api.adorable.io/avatars/285/abc@adorable.png",
    name: "Joana da Silva",
    email: "jsilva@gmail.com"
  },
  {
    avatar_url:
      "https://lh6.googleusercontent.com/-X5mhK5OicPM/AAAAAAAAAAI/AAAAAAAAAAA/AKF05nD82q0SG-liP1xim_G6d2HL7HUvNA/photo.jpg",
    name: "Eduardo Shisty",
    email: "edushisty@bol.com.br"
  }
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: "Elton Lazzarin",
        email: "elton.lazzarin@outlook.com"
      },
      message: {
        subject: "Bem-vindo ao sistema",
        body: "Seja bem-vindo"
      }
    });

    return res.send();
  }
};
