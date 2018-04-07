import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from '../_services/device.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  currentUser: any
  deviceType: any
  isLogin: any;
  closeResult: string;
  name: string;
  device_type_id: number
  device: {
    NAME: string
  }
  response: {}
  data: {}

  constructor(
    private router: Router,
    private deviceService: DeviceService,
    private modalService: NgbModal
  ) {
    
  
      
   }

  ngOnInit() {
    this.getAllDeviceType()
  }

  getAllDeviceType() {
    this.deviceService.getAll().subscribe(
      data => { this.deviceType = data; },
      error => { }
    )
  }

  editDeviceType(device) {
    console.log(device)
    this.name = device.NAME
    this.device_type_id = device.DEVICE_TYPE_ID
    this.device = device
  }

  save() {
    if(this.device_type_id) {
      this.deviceService.update(this.device_type_id, this.name).subscribe(
        data => { this.device.NAME = this.name },
        error => { }
      )
    }
    else {
      this.deviceService.create(this.name).subscribe(
        data => { this.response = data; this.pushDeviceType(this.response, this.name) },
        error => { }
      )
    }
  }

  deletDeviceType(index, device) {
    this.deviceService.delete(device.DEVICE_TYPE_ID).subscribe(
      data => { this.deviceType.splice(index, 1); },
      error => { }
    )
  }

  pushDeviceType(response, name) {
    this.deviceType.push({'DEVICE_TYPE_ID': response.device_type_id, 'NAME': name });
    this.name = ''
  }
}
