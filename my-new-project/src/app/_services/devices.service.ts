import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DevicesService {

  constructor(private http: HttpClient) { }

  getAll(filter_dev_type_id: number) {
    return this.http.post('http://localhost/crm/api/index.php/Device/getAllDevices', JSON.stringify({
      filter_dev_type_id: filter_dev_type_id
}));
}

update(device_type_id, name) {
    return this.http.post('http://localhost/crm/api/index.php/Device/updateDevice', JSON.stringify({
        device_type_id: device_type_id,
        name: name
}));
}

create(data) {
    return this.http.post('http://localhost/crm/api/index.php/Device/createDevice', JSON.stringify({
      data: data
}));
}

delete(id: number) {
    return this.http.post('http://localhost/crm/api/index.php/Device/deleteDevice', JSON.stringify({
        id: id
     }));
}

}
