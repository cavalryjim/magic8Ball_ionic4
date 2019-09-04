import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public cssClass: string;
  private answers = ['It is certain.', 'It is decidedly so.', 'Without a doubt.',
             'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.',
             'Most likely.', 'Outlook good.', 'Yes.',
             'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.',
             'Better not tell you now.', 'Cannot predict now.',
             'Concentrate and ask again.', "Don't count on it.", 'My reply is no.',
             'My sources say no.', 'Outlook not so good.', 'Very doubtful.']

  constructor(private toastCtrl: ToastController) {}

  giveAnswer() {
    this.cssClass = "animated shake";
    let answer = this.answers[Math.floor(Math.random() * this.answers.length)];
    // this.presentToast(answer);

    var temp = this;
    setTimeout(function(){
      temp.presentToast(answer);
    }, 2000)
  }

  async presentToast(answer) {
    const toast = await this.toastCtrl.create({
      message: answer,
      duration: 5000,
      position: 'top'
    });

    toast.onDidDismiss().then(() => {
      console.log('toast dismissed');
      this.cssClass = "";
    });
    toast.present();
  }

}
