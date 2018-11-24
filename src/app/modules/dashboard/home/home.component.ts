import {Component, OnInit} from '@angular/core';
import { User } from '../../../interfaces/dashboard/user';
import { AuthService } from '../../../services/dashboard/auth.service';
import { UserService } from '../../../services/dashboard/user.service';
import {StorageService} from './../../../shared/storage.service';
import { ConfirmorderService } from '../../../services/dashboard/confirmorder.service';
import { RecordService } from '../../../services/dashboard/record.service';
import { ApiService } from '../../../services/dashboard/api.service';

@Component({
    selector: 'dashboard-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    data: any;
    user;
    user2;
    imageUrl;
    localStorageUser;
    cards = [
        // { title: 'Total Invoices', cols: 1, rows: 1, type:"card_total_invoices",total:"0",load:false },
        // { title: 'Total Import', cols: 1, rows: 1,type:"card_total_import",total:"0",load:false }
        { title: 'จำนวนที่สั่งทำทั้งหมด', cols: 1, rows: 1, type: "card_total_confirmorders", total: "0", load: false },
        // { title: 'จำนวนที่บันทึก', cols: 1, rows: 1, type: "card_total_records", total: "0", load: false }
    ];
    constructor(private apiService:ApiService,   public recordService: RecordService, public confirmorderService: ConfirmorderService,private authService: AuthService, private userService: UserService, private storageService: StorageService) {
        this.recordService.getListRecords().subscribe(records => {
            let datas = records.map((record) => {
                return ({ id: record.payload.doc.id, ...record.payload.doc.data() })
            })
            datas.map((record) => {
                this.cards.map((row) => {

                    if (row.type == "card_total_records") {
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

        this.apiService.showData().subscribe(data=>{
            this.data = Object.values(data);
        })
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
