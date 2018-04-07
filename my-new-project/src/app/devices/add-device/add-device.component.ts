import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from '../../_services/device.service';
import { DevicesService } from '../../_services/devices.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {

  model: any = {}
  deviceType: any;
  response: any = {}

  constructor(
    private router: Router,
    private deviceService: DeviceService,
    private _service: DevicesService
  ) { }

  ngOnInit() {
    this.getAllDeviceType();
  }

  getAllDeviceType() {
    this.deviceService.getAll().subscribe(
      data => { this.deviceType = data;  },
      error => { }
    )
  }

  save() {
    this._service.create(this.model).subscribe(
      data => { this.response = data; this.setResponse() },
      error => {}
    )
    
  }

  setResponse() {
    this.router.navigate(['/devices']);
  }


}
