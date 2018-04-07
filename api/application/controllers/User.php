<?php

class User extends CI_Controller
{

    function __construct()
    {
        parent::__construct();
        $this->load->model('UserModel');
    }
	
    public function register()
    {
		header("Access-Control-Allow-Origin: *");
		
        $postJson = json_decode(trim(file_get_contents('php://input')), true);
		
        if (array_key_exists('data', $postJson)) {
            $data = $postJson['data'];
        } else {
            $data = "";
        }
		
        $this->UserModel->registerModel($data);
    }
	
	public function login() {
		header("Access-Control-Allow-Origin: *");
		$postJson = json_decode(trim(file_get_contents('php://input')), true);
		
		if (array_key_exists('username', $postJson)) {
            $username = $postJson['username'];
        } else {
            $username = "";
        }
		
		if (array_key_exists('password', $postJson)) {
            $password = $postJson['password'];
        } else {
            $password = "";
        }
		
		$this->UserModel->loginModel($username, $password);
	}

    
}

?>