interface IMailTo{
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}

// Data Transfer Object (DDD)
interface IMessageDTO {
    to: IMailTo,
    message: IMailMessage
}

interface IEmailService {
    sendMail(request: IMessageDTO): void;
}


class EmailService implements IEmailService{
    sendMail({ to, message }: IMessageDTO) {
        console.log(`Email enviado para ${to.name}: ${to.email}`);
    }
    
}

export default EmailService;