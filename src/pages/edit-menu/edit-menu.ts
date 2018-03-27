import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Parse } from 'parse';


/**
 * Generated class for the EditMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-menu',
  templateUrl: 'edit-menu.html',
})
export class EditMenuPage {

  newitemName;
  newprice;
  newdescription;
  newcategory;
  newurl;
  menuid;
  itemName;
  price;
  description;
  category;
  url;



  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditMenuPage');
    
    this.itemName = this.navParams.get('item').itemName;
    this.price = this.navParams.get('item').price;
    this.category = this.navParams.get('item').category;
     this.url = this.navParams.get('item').url;
     this.description = this.navParams.get('item').description;
     this.quantity = this.navParams.get('item').quantity;
     this.menuid = this.navParams.get('item').id;
  }

  saveItem(item) {
var Menu = Parse.Object.extend("Menu");

var menu = new Menu();

menu.id = this.menuid;

 	menu.set("name", this.newitemName);
	menu.set("price", parseFloat(this.newprice));
	menu.set("category", this.newcategory);
	menu.set("imageurl",this.newurl);
	menu.set("description", this.newdescription);
   

menu.save(null, {
  success: function(menu) {
    // Execute any logic that should take place after the object is saved.

    alert('object edited with objectId: ' + menu.id);
  },
  error: function(menu, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  }
});



  this.view.dismiss();

  }

  close() {
    this.view.dismiss();
  }



}
