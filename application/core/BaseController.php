<?php



class BaseController
{
    # Protected property for child to assign the model.
    protected $model = null; 

    # Protected method for child to load the model
    protected function loadModel($model_name)
    {
        if (file_exists(APP . 'model/' . $model_name . '.php')) {
       
            require_once APP . 'model/' . $model_name . '.php';
            $this->model = new $model_name();
           
        }
            

    }

  
}
