import {Component, OnInit} from '@angular/core';
import {MetalDTO} from '../../../dto/metalDTO';
import {UpdateMetalDTO} from '../../../dto/update-metalDTO';
import {MetalService} from '../../../services/metal.service';
import {NotificationService} from '../../../services/notification.service';

@Component({
  selector: 'app-metal',
  templateUrl: './metal.component.html',
  styleUrls: ['./metal.component.css']
})
export class MetalComponent implements OnInit {
  metals: Array<MetalDTO> = [];
  metalData = new MetalDTO();
  editCardVisible = false;
  updateMetalData = new UpdateMetalDTO();
  selectedMetalType: string;
  selectedMetalCarat: number;
  selectedMetalWeight: number;

  constructor(private  metalService: MetalService, private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.getAllMetal();
  }

  getAllMetal() {
    this.metalService.getAllMetal().subscribe(rst => {
      this.metals = rst;
    });
  }

  saveMetal() {
    this.metalService.saveMetal(this.metalData).subscribe(rst => {
      if (rst) {
        this.getAllMetal();
        this.notificationService.show(1, 'Metal Saved Success...!');
      } else {
        this.notificationService.show(3, 'Metal Saving Failed...!');
      }
    });
  }

  deleteMetal(id: number) {
    this.metalService.deleteMetal(id).subscribe(rst => {
      if (rst) {
        this.getAllMetal();
        this.notificationService.show(1, 'Metal Deleted Success...!');
      } else {
        this.notificationService.show(3, 'Metal Deleting Failed...!');
      }
    });
  }

  editMetal(metal: MetalDTO) {
    this.updateMetalData.metalId = metal.metalId;
    this.selectedMetalType = metal.metalType;
    this.selectedMetalCarat = metal.carat;
    this.selectedMetalWeight = metal.weight;
    this.editCardVisible = !this.editCardVisible;
  }

  saveEditedMetal() {
    this.metalService.updateMetal(this.updateMetalData).subscribe(rst => {
      if (rst) {
        this.getAllMetal();
        this.editCardVisible = false;
        this.notificationService.show(1, 'Metal Updated Success...!');
      } else {
        this.notificationService.show(3, 'Metal Updating Failed...!');
      }
    });
  }
}
