import {Component, OnInit} from '@angular/core';
import {MakersDTO} from '../../../dto/makersDTO';
import {MakersService} from '../../../services/makers.service';
import {NotificationService} from '../../../services/notification.service';

@Component({
  selector: 'app-makers',
  templateUrl: './makers.component.html',
  styleUrls: ['./makers.component.css']
})
export class MakersComponent implements OnInit {
  makers: Array<MakersDTO> = [];
  makersData = new MakersDTO();

  constructor(private makersService: MakersService, private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.getAllMakers();
  }

  getAllMakers() {
    this.makersService.getAllMakers().subscribe(rst => {
      this.makers = rst;
    });
  }

  saveMakers() {
    this.makersService.saveMakers(this.makersData).subscribe(rst => {
      if (rst) {
        this.getAllMakers();
        this.notificationService.show(1, 'Jewelry Maker Saved Success...!');
      } else {
        this.notificationService.show(3, 'Jewelry Maker Saving Failed...!');
      }
    });
  }

  deleteMakers(id: number) {
    this.makersService.deleteMakers(id).subscribe(rst => {
      if (rst) {
        this.getAllMakers();
        this.notificationService.show(1, 'Jewelry Maker Deleted Success...!');
      } else {
        this.notificationService.show(3, 'Jewelry Maker Deleting Failed...!');
      }
    });
  }

}
