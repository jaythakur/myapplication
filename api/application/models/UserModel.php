<?php

class UserModel extends CI_Model
{
	function registerModel($data) {
		
		
		$column = '';
		if(array_key_exists('firstName',$data)) { $column .= "FIRST_NAME = '".$this->db->escape_str($data['firstName'])."', "; }
		if(array_key_exists('lastName',$data)) { $column .= "LAST_NAME = '".$this->db->escape_str($data['lastName'])."', "; }
		if(array_key_exists('username',$data)) { $column .= "USERNAME = '".$this->db->escape_str($data['username'])."', "; }
		if(array_key_exists('password',$data)) { $column .= "PASSWORD = '".$this->db->escape_str(md5($data['password']))."', "; }
		if(array_key_exists('email',$data)) { $column .= "EMAIL = '".$this->db->escape_str($data['email'])."', "; }
		if(array_key_exists('phoneNumber',$data)) { $column .= "PHONE_NUMBER = '".$this->db->escape_str($data['phoneNumber'])."', "; }
		$column .= "ROLE = 'engineer'";
		
		$column = rtrim($column,', ');
		$sql = "insert into tbl_user set $column";
		$query = $this->db->query($sql);
		
		$result_data = array(
                    'error_code' => '0',
                    'message' => 'Success.'
                );
				
		echo json_encode($result_data);
	}
	
	function loginModel($username, $password) {
		
		$sql = "select * from tbl_user where username = '".$username."' and password = '".md5($password)."'";
		$query = $this->db->query($sql);
		if($query->num_rows() > 0) {
			$user = $query->row();
			$result_data = array(
                    'error_code' => '0',
                    'message' => 'Success.',
					'user'	=> $user
                );
		}
		else {
			$result_data = array(
                    'error_code' => '1',
                    'message' => 'Login and Password does not match.'
                );
		}
		echo json_encode($result_data);
	}
}

?>