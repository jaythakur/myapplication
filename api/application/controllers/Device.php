<?php

class Device extends CI_Controller
{

    function __construct()
    {
        parent::__construct();
        $this->load->model('DeviceModel');
    }
	
    public function getAllDeviceType()
    {
		header("Access-Control-Allow-Origin: *");
		
        $this->DeviceModel->getAllDeviceTypeModel();
    }
	
	public function createDeviceType()
    {
		header("Access-Control-Allow-Origin: *");
		
		$postJson = json_decode(trim(file_get_contents('php://input')), true);
		
      
		if (array_key_exists('name', $postJson)) {
            $name = $postJson['name'];
        } else {
            $name = "";
        }
		
        $this->DeviceModel->createDeviceTypeModel($name);
    }
	
	public function updateDeviceType()
    {
		header("Access-Control-Allow-Origin: *");
		
		$postJson = json_decode(trim(file_get_contents('php://input')), true);
		
        if (array_key_exists('device_type_id', $postJson)) {
            $device_type_id = $postJson['device_type_id'];
        } else {
            $device_type_id = "";
        }
		
		if (array_key_exists('name', $postJson)) {
            $name = $postJson['name'];
        } else {
            $name = "";
        }
		
        $this->DeviceModel->updateDeviceTypeModel($device_type_id, $name);
    }
	
	public function deleteDeviceType()
    {
		header("Access-Control-Allow-Origin: *");
		
		$postJson = json_decode(trim(file_get_contents('php://input')), true);
		
      
		if (array_key_exists('id', $postJson)) {
            $id = $postJson['id'];
        } else {
            $id = "";
        }
		
        $this->DeviceModel->deleteDeviceTypeModel($id);
    }
	
	/* Device */
	public function createDevice()
    {
		header("Access-Control-Allow-Origin: *");
		
		$postJson = json_decode(trim(file_get_contents('php://input')), true);
		
      
		if (array_key_exists('data', $postJson)) {
            $data = $postJson['data'];
        } else {
            $data = "";
        }
		
        $this->DeviceModel->createDeviceModel($data);
    }
	
	public function getAllDevices()
    {
		header("Access-Control-Allow-Origin: *");
		$postJson = json_decode(trim(file_get_contents('php://input')), true);
		if (array_key_exists('filter_dev_type_id', $postJson)) {
            $filter_dev_type_id = $postJson['filter_dev_type_id'];
        } else {
            $filter_dev_type_id = "";
        }
		
        $this->DeviceModel->getAllDevicesModel($filter_dev_type_id);
    }
	
	public function deleteDevice()
    {
		header("Access-Control-Allow-Origin: *");
		
		$postJson = json_decode(trim(file_get_contents('php://input')), true);
		
      
		if (array_key_exists('id', $postJson)) {
            $id = $postJson['id'];
        } else {
            $id = "";
        }
		
        $this->DeviceModel->deleteDeviceModel($id);
    }
	

    
}

?>