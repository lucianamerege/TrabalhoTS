import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  username:string;
  curtiu:boolean;
  descurtiu:boolean;
  numCurtidas:number;
  numDescurtidas:number;
  texto:string;
  spoiler:boolean;
  
  dadosPost:object[] = [
    {
      username: "chaosIsALadder",
      curtiu: false,
      descurtiu: false,
      numCurtidas: 29,
      numDescurtidas:77,
      texto: "Eles morrem no episódio 12",
      spoiler: true
    },
    {
      username: "teddybear",
      curtiu: false,
      descurtiu: false,
      numCurtidas: 105,
      numDescurtidas:44,
      texto: "Mano, amei o ep 11, q bom q acabou td bem",
      spoiler: false 
    },
    {
      username: "user2000",
      curtiu: false,
      descurtiu: false,
      numCurtidas: 33,
      numDescurtidas:12,
      texto: "Melhor série aaaaaaaaa",
      spoiler: false
    }
  ]
  
    curtida (dadosPost) {
      if (dadosPost['curtiu'] == false){
        dadosPost['numCurtidas']++;
      }
      else{
        dadosPost['numCurtidas']--;
      }
      if (dadosPost.descurtiu == true)
      {
        dadosPost.descurtiu= !dadosPost.descurtiu;
        dadosPost.numDescurtidas--;
      }
      dadosPost.curtiu= !dadosPost.curtiu;
    }
    descurtida (dadosPost) {
      if (dadosPost['descurtiu'] == false){
        dadosPost['numDescurtidas']++;
      }
      else{
        dadosPost['numDescurtidas']--;
      }
      if (dadosPost.curtiu == true)
      {
        dadosPost.curtiu= !dadosPost.curtiu;
        dadosPost.numCurtidas--;
      }
      dadosPost.descurtiu= !dadosPost.descurtiu;
    }

  async alerta() {
    const alert = await this.alertController.create({
      header: 'Irado!',
      message: 'Gostaria de avaliar o filme?',
      buttons: ['Não', 'Sim']
    });
    await alert.present();
  }
  
  async presentToast(){
    const toast = await this.toastController.create({
      message: 'Filme adicionado na sua lista!',
      duration: 2000
    });
    toast.present();
  }


}
