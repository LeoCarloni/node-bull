import { Queues } from '../enums';
import BaseQueue from './base.queue';
import Tranport from '../email';
import configs from '../configs';

export default class EmailQueue extends BaseQueue {
  private static instance: EmailQueue;
  public static getInstance(): EmailQueue {
    if (!EmailQueue.instance) {
      EmailQueue.instance = new EmailQueue();
    }
    return EmailQueue.instance;
  }

  private constructor() {
    super(Queues.email);
    this.queue.process(this.process);
  }
  private async process({ data }){
    console.log(data);
    await Tranport.sendMail({
      to: configs.mail.default.to,
      from: configs.mail.default.from,
      subject: 'Assunto do email', 
      text: JSON.stringify(data),
    })
    console.log('E-mail enviado com sucesso');
  }
}