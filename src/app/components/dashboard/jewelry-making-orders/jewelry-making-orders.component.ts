import {Component, OnInit} from '@angular/core';
import {GemDTO} from '../../../dto/gemDTO';
import {MakersDTO} from '../../../dto/makersDTO';
import {MetalDTO} from '../../../dto/metalDTO';
import {JewMakingOrderDTO} from '../../../dto/jew-making-orderDTO';
import {MakingOrderService} from '../../../services/making-order.service';
import {GemService} from '../../../services/gem.service';
import {MetalService} from '../../../services/metal.service';
import {MakersService} from '../../../services/makers.service';
import {NotificationService} from '../../../services/notification.service';

@Component({
  selector: 'app-jewelry-making-orders',
  templateUrl: './jewelry-making-orders.component.html',
  styleUrls: ['./jewelry-making-orders.component.css']
})
export class JewelryMakingOrdersComponent implements OnInit {
  gemData = new GemDTO();
  makersData = new MakersDTO();
  metalData = new MetalDTO();
  jewelryMakingOrderData = new JewMakingOrderDTO();

  gems: Array<GemDTO> = [];
  makers: Array<MakersDTO> = [];
  metals: Array<MetalDTO> = [];
  orders: Array<JewMakingOrderDTO> = [];

  selectedMetalWeight: number;

  constructor(private makingOrderService: MakingOrderService,
              private gemService: GemService,
              private metalService: MetalService,
              private makersService: MakersService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.getAllOrders();
    this.getAllGem();
    this.getAllMetal();
    this.getAllMakers();
  }

  getAllGem() {
    this.gemService.getAllGem().subscribe(rst => {
      this.gems = rst;
    });
  }

  getAllMakers() {
    this.makersService.getAllMakers().subscribe(rst => {
      this.makers = rst;
    });
  }

  getAllMetal() {
    this.metalService.getAllMetal().subscribe(rst => {
      this.metals = rst;
    });
  }

  getAllOrders() {
    this.makingOrderService.getAllJewelryMakingOrders().subscribe(rst => {
      this.orders = rst;
    });
  }

  placeOrder() {
    this.jewelryMakingOrderData.gem = this.gemData;
    this.jewelryMakingOrderData.metal = this.metalData;
    this.jewelryMakingOrderData.jewelryMaker = this.makersData;
    this.makingOrderService.placeOrder(this.jewelryMakingOrderData).subscribe(rst => {
      if (rst) {
        this.getAllOrders();
        this.getAllGem();
        this.getAllMetal();
        this.getAllMakers();
        this.notificationService.show(1, 'Jewelry Making Order Placed Success...!');
      } else {
        this.notificationService.show(3, 'Jewelry Making Order Placing Failed...!');
      }
    });
  }

  setSelectedMetalWeight(weight: number) {
    this.selectedMetalWeight = weight;
  }
}
