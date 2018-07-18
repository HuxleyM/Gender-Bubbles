<?php


//use Opeldo\Core\Controller;
/**
 * Class Home
 *
 * Please note:
 * Don't use the same name for class and method, as this might trigger an (unintended) __construct of the class.
 * This is really weird behaviour, but documented here: http://php.net/manual/en/language.oop5.decon.php
 *
 */

class DataController extends BaseController
{
    
    public function __construct()
    {
            $this->loadModel('DataModel');
            if($this->model->getData()){

                //kk so logically we need to send this to other space
                $info = $this->model->getData(); 
                // this needs to be modified as not working as should
                echo '<div id="dom-target" >'.
                        json_encode($info).'
                    </div>';
            }
      

	}
    
    
    
    /**
     * PAGE: index
     * This method handles what happens when you move to http://yourproject/home/index (which is the default page btw)
     */
    
    public function index()
    {   
        $pageTitle = 'Gender Survey';

        require APP . 'view/_templates/header.php';
        require APP . 'view/index.php';
        require APP . 'view/_templates/footer.php';
    }

    public function add($x){
    $info = null;
       if($this->model->input($x)){
        $info = $this->model->getData();
       }
       echo json_encode($info);
    }



    
}
