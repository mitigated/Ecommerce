import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from 'shared/services/order.service';
import { Order } from 'shared/models/order';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

id;
items  = [];


  constructor(
    private orderService : OrderService,
    private route : ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.orderService.getProduct(this.id).subscribe((p)=>{this.items=p
    console.log(this.items,p)});
  }

}
