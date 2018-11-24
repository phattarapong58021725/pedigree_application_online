import {Component, OnInit} from '@angular/core';
import { User } from '../../../interfaces/dashboard/user';
import { AuthService } from '../../../services/dashboard/auth.service';
import { UserService } from '../../../services/dashboard/user.service';
import {StorageService} from './../../../shared/storage.service';
import { OrderService } from '../../../services/dashboard/order.service';
import { ConfirmorderService } from '../../../services/dashboard/confirmorder.service';

@Component({
    selector: 'app-association-dashbord',
    templateUrl: './association-dashbord.component.html',
    styleUrls: ['./association-dashbord.component.scss']
})
export class AssociationDashbordComponent {
    user;
    user2;
    imageUrl;
    localStorageUser;
    cards = [
        // { title: 'Total Invoices', cols: 1, rows: 1, type:"card_total_invoices",total:"0",load:false },
        // { title: 'Total Import', cols: 1, rows: 1,type:"card_total_import",total:"0",load:false }
        { title: 'จำนวนรายการที่ลูกค้าสั่งทำทั้งหมด', cols: 1, rows: 1, type: "card_total_confirmorders", total: "0", load: false }
    ];
    constructor(public confirmorderService: ConfirmorderService,private authService: AuthService, private userService: UserService, private storageService: StorageService) {
        this.confirmorderService.getListConfirmorders().subscribe(confirmorders => {
            let datas = confirmorders.map((confirmorder) => {
              return ({ id: confirmorder.payload.doc.id, ...confirmorder.payload.doc.data() })
            })
            datas.map((confirmorders) => {
                this.cards.map((row) => {

                    if (row.type == "card_total_confirmorders") {
                        row.total = datas.length
                        row.load = true
                    }

                    // if(row.type=="card_total_import"){
                    //     let total_money = 0
                    //     total_money +=invoice.import
                    //     row.total = total_money + " $"
                    //     row.load  = true
                    // }

                })
            })
        })
    }
    removeCard(type) {
        this.cards = this.cards.filter(card => card.type != type)
    }
    ngOnInit() {
        this.user = this.authService.getAuthUser();
        this.getUser();
      }

      getUser() {
        console.log(this.user.uid);
        this.localStorageUser = this.userService.getProfileFromLocalStorage();
        return this.userService.getUser(this.user.uid)
          .subscribe( data => {
            console.log('singleUser: ', data);
            this.user = data;
          });
      }
    
      onFileSelection($event) {
        this.storageService.upload($event)
          .then((uploadSnapshot: firebase.storage.UploadTaskSnapshot) => {
            uploadSnapshot.ref.getDownloadURL().then((downloadURL) => {
              console.log(downloadURL);
              this.imageUrl = downloadURL;
              const data: User = {
                id: this.user.uid,
                downloadUrl: downloadURL,
              };
              this.userService.setUser(data);
    
            });
    
        });
    
      }
}
