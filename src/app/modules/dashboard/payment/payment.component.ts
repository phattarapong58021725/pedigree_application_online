import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/dashboard/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
length;
blood_type_1=0;
blood_type_2=0
  constructor( private orderService:OrderService,private router :ActivatedRoute) { }
check=0;
  ngOnInit() {
    console.log('key: '+this.router.snapshot.paramMap.get('key'));
    this.orderService.getListOrders().subscribe(orders => {
      let datas = orders.map((order) => {
        return ({ id: order.payload.doc.id, ...order.payload.doc.data() })
      });
    this.length = datas.length;
    datas.forEach(element => {
      if(element.blood_type == 'พันธุ์แท้'){
        this.blood_type_1++;
      }
      else {
        this.blood_type_2++;
      }
  });
    });
  }


  popup(a){
    this.check=a;
  
  }

}
