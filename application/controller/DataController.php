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
                // this displays data on load
                /*echo '<div id="dom-target" >'.
                        print_r($info)
                    .'</div>';*/
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


    public function add($x = null){
        //im still cautious that one may complete befor the other? 
        if($x != null){
            $this->model->input($x);
        }
        echo $this->retrieveData();
    }

    public function retrieveData(){
        $info = $this->model->getData();
        $info = json_decode(json_encode($info), True); 
        $finalArray =[];
        for ($row = 0; $row < count($info, COUNT_NORMAL); $row++)
        {
             array_push($finalArray, array($info[$row]["identity"],$info[$row]["count(*)"]));
        }
        return json_encode($finalArray); // may have to be return as opposed to echo 
      
    }


    //making total get total function

    public function total(){
        $total = $this->model->total();
        $total =  json_decode(json_encode($total), TRUE);
        $total = json_encode((int)$total[0]['count(*)']);// going into first array grabbing this value.

        echo $total; 
    
    }
    
    



    
}
