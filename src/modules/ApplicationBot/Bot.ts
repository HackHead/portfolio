
class BotHandler {
  public TOKEN: string;
  public CHAT_ID: string;
  
  constructor(){
    this.TOKEN = '5887182940:AAEW4_P4z3UcD8sAjiZfcE58SztEHjxMFHo';
    this.CHAT_ID = '314759874';
  }

  public async sendMessage(message: string): Promise<void> {
    const url = `https://api.telegram.org/bot${this.TOKEN}/sendMessage`;

    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: this.CHAT_ID,
          text: message,
        }),
      });
    } catch (error) {
      throw new Error('An error occured')
    }
  }
}

export default new BotHandler();