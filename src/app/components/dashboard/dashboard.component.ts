import {Component, OnInit} from '@angular/core';
import {MakingOrderService} from '../../services/making-order.service';
import {GemService} from '../../services/gem.service';
import {MetalService} from '../../services/metal.service';
import {MakersService} from '../../services/makers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loadedDate = new Date();
  private orderCount: number;
  private gemCount: number;
  private metalCount: number;
  private makersCount: number;

  constructor(private makingOrderService: MakingOrderService, private gemService: GemService, private metalService: MetalService, private makersService: MakersService) {
  }

  ngOnInit(): void {
    this.makingOrderService.getOrdersCount().subscribe(rst => {
      this.orderCount = rst;
    });

    this.gemService.getGemCount().subscribe(rst => {
      this.gemCount = rst;
    });

    this.metalService.getMetalCount().subscribe(rst => {
      this.metalCount = rst;
    });

    this.makersService.getMakersCount().subscribe(rst => {
      this.makersCount = rst;
    });
  }

}
