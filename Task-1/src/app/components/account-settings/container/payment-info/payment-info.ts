import { Component } from '@angular/core';
import { CommonService } from '../../../../services/common-service';
@Component({
  selector: 'app-payment-info',
  imports: [],
  templateUrl: './payment-info.html',
  styleUrl: './payment-info.css'
})
export class PaymentInfo {
  constructor(private commonService: CommonService) {}

  upgradePlan(){
    this.commonService.updateUser({
      ...this.commonService.getUser(),
      plan: "Premium"
    });
    alert("Plan Upgraded Successfully");
  }
}
