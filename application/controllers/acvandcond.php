<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Acvandcond extends CI_Controller {

	public function index()
	{
    $toView['page_content'] = date("H:i:s");
    $toView['title'] = "Apple Cider Vinegar ";
   $data['contents']  = 'index';
     $data['page'] = 1;
     $this->load->view('index');
	}


      }
