import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class DeviceService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get('http://localhost/crm/api/index.php/Device/getAllDeviceType');
    }

    update(device_type_id, name) {
        return this.http.post('http://localhost/crm/api/index.php/Device/updateDeviceType', JSON.stringify({
            device_type_id: device_type_id,
            name: name
    }));
    }

    create(name) {
        return this.http.post('http://localhost/crm/api/index.php/Device/createDeviceType', JSON.stringify({
            name: name
    }));
    }

    delete(id: number) {
        return this.http.post('http://localhost/crm/api/index.php/Device/deleteDeviceType', JSON.stringify({
            id: id
         }));
    }
    

   /* getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(user) {
        return this.http.post('http://localhost/crm/api/index.php/User/register', JSON.stringify({
      data:user
    }));
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }*/
}