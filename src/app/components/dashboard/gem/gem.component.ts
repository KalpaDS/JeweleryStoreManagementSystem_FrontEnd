import {Component, OnInit} from '@angular/core';
import {GemDTO} from '../../../dto/gemDTO';
import {GemService} from '../../../services/gem.service';
import {NotificationService} from '../../../services/notification.service';

@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {
  gems: Array<GemDTO> = [];
  gemData = new GemDTO();

  constructor(private gemService: GemService, private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.getAllGem();
  }

  getAllGem() {
    this.gemService.getAllGem().subscribe(rst => {
      this.gems = rst;
    });
  }

  saveGem() {
    this.gemService.saveGem(this.gemData).subscribe(rst => {
      if (rst) {
        this.getAllGem();
        this.notificationService.show(1, 'Gem Saved Success..!');
      } else {
        this.notificationService.show(3, 'Gem Saving Failed...!');
      }
    });
  }

  deleteGem(id: number) {
    this.gemService.deleteGem(id).subscribe(rst => {
      if (rst) {
        this.getAllGem();
        this.notificationService.show(1, 'Gem Deleted Success..!');
      } else {
        this.notificationService.show(3, 'Gem Deleting Failed...!');
      }
    });
  }
}
