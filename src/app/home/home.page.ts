import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { AlertController, ModalController } from '@ionic/angular';
import { ViewphotosPage } from '../viewphotos/viewphotos.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imageUrl: any = '';
  showdata: any = [];
  isModalOpen = false;


  constructor(private alertController: AlertController,
    public modalController: ModalController) {
  }


  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    // console.log('image',image);


    this.imageUrl = image.webPath;

  };
  ngOnInit() {

 

  }

  ionViewWillEnter() {
    this.getdata();
  }

  async addpicture() {

    this.showdata.push(this.imageUrl)
    console.log(this.imageUrl);
    // return false;

    localStorage.setItem('saveimages', JSON.stringify(this.showdata));
    // console.log('imageUrl',this.imageUrl);
    console.log('saveimage', this.showdata);
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Picture Added Successfully',
      buttons: ['OK'],
    });
    this.imageUrl = '';
    // delete [this.saveimage];
    this.getdata();

    await alert.present();
    
  }

  deletepicture() {
    this.imageUrl = '';
    console.log('delete image url',this.imageUrl);
    console.log('save image array',this.showdata);
  }

  getdata() {
    let getdata: any = localStorage.getItem('saveimages');
    if (getdata != null) {
      this.showdata = JSON.parse(getdata)
    }
    console.log('showdata',this.showdata);
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  async sendimage(item: any, i: any) {
    // console.log('item', item,'index' , i)
    const modal = await this.modalController.create({
      component: ViewphotosPage,
      cssClass: 'stream-class',
      componentProps: {
        image: item,
        index: i
      }
    });
    modal.onDidDismiss().then((data) => {
      this.getdata();
    });
    return await modal.present();
  }


}
