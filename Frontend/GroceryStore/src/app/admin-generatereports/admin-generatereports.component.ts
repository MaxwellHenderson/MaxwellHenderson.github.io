import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { OrderService } from '../order.service';
import { OrderReport } from '../shared/order.model';
import { ProductReport} from '../shared/product.model';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-admin-generatereports',
  templateUrl: './admin-generatereports.component.html',
  styleUrls: ['./admin-generatereports.component.css']
})
export class AdminGeneratereportsComponent implements OnInit {

  reports?:Array<OrderReport>
  users!:Array<OrderReport>
  products?:Array<ProductReport>
  dataLoaded:boolean=false
  constructor(public reportSer:OrderService) { }

  ngOnInit(): void {
  }

  dailyReport(){
    this.reportSer.generateReportDaily().subscribe(result=>this.reports=result);
  }
  weeklyReport(){
    this.reportSer.generateReportWeekly().subscribe(result=>this.reports=result);
  }
  monthlyReport(){
    this.reportSer.generateReportMonthly().subscribe(result=>this.reports=result);
  }
  productReports(){
    this.reportSer.generateProductReports().subscribe(result=>this.products=result);
  }
  costumerReports(userRef:any){
    console.log("received")
    this.reportSer.generateCostumerReports(userRef).subscribe((result:any)=>{
      
      this.users=result
      this.dataLoaded=true
      console.log(this.users)
    });
    //console.log(this.users);
    
  }

}
