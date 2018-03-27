import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { OrderDetailPage} from '../order-detail/order-detail';
import { Events } from 'ionic-angular';


@Component({
  selector: 'page-my-order',
  templateUrl: 'my-order.html'
})
export class MyOrderPage {

orders =[];
	

  constructor(public events:Events,public navParams: NavParams, public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
 	
  	  this.orders = this.dataService.getDataOrder();

events.subscribe('neworder', (neworder) => {
    console.log('Welcome new neworder');
    // this.saveItem(newitem);
    console.log("Todo");

}); 



  }


  ionViewDidLoad() {
   
  }

  

  viewOrder(order) {
    this.navCtrl.push(OrderDetailPage, {
      order: order
    });


  }
}