import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { EditMenuPage } from '../edit-menu/edit-menu';

import { Parse } from 'parse';



@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

	items =[];
	

  constructor(public navParams: NavParams, public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
 	
  	  this.items = this.dataService.getDataMenu();
      console.log(this.items.length);
      console.log("get it");



  }


  ionViewDidLoad() {
   
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  addItem(){
  	this.navCtrl.push(AddItemPage);
  }
  editItem(item){
    console.log("will edit");
    this.navCtrl.push(EditMenuPage, {
      item: item
    });
  }

  deleteItem(item){
    var Menu = Parse.Object.extend("Menu");
    var menuid = item.id;
    var menu = new Menu();
    menu.id = menuid;

    console.log("will delete");
    menu.destroy({
    success: function(menu) {
      // The object was deleted from the Parse Cloud.
      
      alert(' object deleted with objectId: ' + menuid);
  },
  error: function(menu, error) {
    // The delete failed.
    // error is a Parse.Error with an error code and message.
    console.log("failed to delete object:" + menuid);
  }
  });

    

  }
 


  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });


  }



}