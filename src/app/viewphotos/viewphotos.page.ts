import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-viewphotos',
  templateUrl: './viewphotos.page.html',
  styleUrls: ['./viewphotos.page.scss'],
})
export class ViewphotosPage implements OnInit {

  image: any = [];
  index: any = [];
  showimage: any = [];

  constructor(public modalController: ModalController,
    public alertController: AlertController) { }

  ngOnInit() {
    let getitem: any = localStorage.getItem('saveimages');
    this.showimage = JSON.parse(getitem);

  }

  ionViewWillEnter() {
    // console.log('viewpage' , this.image, 'index' ,this.index);
  }

  modeldismis() {
    this.modalController.dismiss();
  }


  async deleteimage(index: any) {
    const alert = await this.alertController.create({
      header: 'Alert!',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("Cancel");
          },
        },
        {
          text: 'YES',
          role: 'confirm',
          handler: () => {
            //customcode

            this.showimage.splice(index, 1);
            localStorage.setItem('saveimages', JSON.stringify(this.showimage))
            this.modalController.dismiss();
          },
        },
      ],
    });

    await alert.present();
  }

}
