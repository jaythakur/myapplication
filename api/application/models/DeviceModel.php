<?php

class DeviceModel extends CI_Model
{
	function getAllDeviceTypeModel() {
		
		
			$sql = "select * from tbl_device_type";
			$query = $this->db->query($sql);
			$results = $query->result();
			echo json_encode($results);
		
	}
	
	function createDeviceTypeModel($name) {
		
		$sql = "insert into tbl_device_type set name = '".$name."'";
		$query = $this->db->query($sql);
		$last_insert_id = $this->db->insert_id();
		$result_data = array(
                    'error_code' => '0',
                    'message' => 'Success.',
					'device_type_id' => $last_insert_id
                );
				
		echo json_encode($result_data);
	}
	
	function updateDeviceTypeModel($device_type_id, $name) {
		
		$sql = "update tbl_device_type set name = '".$name."' where device_type_id = '".$device_type_id."'";
		$query = $this->db->query($sql);
		$result_data = array(
                    'error_code' => '0',
                    'message' => 'Success.'
                );
				
		echo json_encode($result_data);
	}
	
	function deleteDeviceTypeModel($id) {
		
		$sql = "delete from tbl_device_type where device_type_id = '".$id."'";
		$query = $this->db->query($sql);
		$result_data = array(
                    'error_code' => '0',
                    'message' => 'Success.'
                );
				
		echo json_encode($result_data);
	}
	
	/* Device */
	
	function createDeviceModel($data) {
		if(empty($data)) {
			
		}
		else {
			$column = '';
			foreach($data as $key => $value) {
				$column .= "$key = '".$value."', ";
			}
			
			$column .= 'status = "Active"';
			
			$sql = "insert into tbl_devices set $column";
			$query = $this->db->query($sql);
			$result_data = array(
                    'error_code' => '0',
                    'message' => 'Success.'
                );
				
			echo json_encode($result_data);
		}
	}
	
	function getAllDevicesModel($filter_dev_type_id) {
		
			$where = '';
			if($filter_dev_type_id) {
				$where .= "where device_type = '".$filter_dev_type_id."'";
			}
			$sql = "select A.*, B.NAME as DEVICE_TYPE_NAME from tbl_devices A LEFT JOIN tbl_device_type B on A.DEVICE_TYPE = B.DEVICE_TYPE_ID $where";
			$query = $this->db->query($sql);
			$results = $query->result();
			
			$result_data = array(
                    'error_code' => '0',
                    'message' => 'Success.',
					'devices' => $results
                );
				
		echo json_encode($result_data);
		
		
	}
	
	function deleteDeviceModel($id) {
		
		$sql = "delete from tbl_devices where device_id = '".$id."'";
		$query = $this->db->query($sql);
		$result_data = array(
                    'error_code' => '0',
                    'message' => 'Success.'
                );
				
		echo json_encode($result_data);
	}
}

?>