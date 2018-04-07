import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../_services/devices.service';
import { DeviceService } from '../_services/device.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  response: any = {}
  allDevices: any;
  deviceType: any;
  filter_dev_type_id: number;
  closeResult: string;

  
  constructor(
    private _service: DevicesService,
    private deviceTypeService: DeviceService,
    private modalService: NgbModal 
  ) { }

  ngOnInit() {
    this.getAllDevices() 
    this.getAllDeviceType();
  }

  getAllDevices() {

    this._service.getAll(this.filter_dev_type_id).subscribe(
      data => { this.response = data; if(this.response.error_code == 0) { this.allDevices = this.response.devices}}
    )
    
  }

  getAllDeviceType() {
    this.deviceTypeService.getAll().subscribe(
      data => { this.deviceType = data;  },
      error => { }
    )
  }

  deleteDevice(index, device) {
    this._service.delete(device.DEVICE_ID).subscribe(
      data => { this.allDevices.splice(index, 1); },
      error => { }
    )
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
