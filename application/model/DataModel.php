<?php

class DataModel extends BaseModel
{

	public function input($x){
		try{
			$stmt =$this->db->prepare("INSERT INTO data(identity) VALUES (:identity)");
			$stmt-> execute(array(':identity'=>$x,));
		}
		catch(PDOException $e){
			echo $e->getMessage();
		}
		
	}

	public function getData(){
		try {
	
		
			$stmt = $this->db->prepare("SELECT identity FROM data");
			// ok so we still must use execute just remove the stuff in the middle
			$stmt->execute();
			// we use fetchAll() instead of fetch assoc to gather all the 
			// the rows of data available from the table
			$row = $stmt->fetchAll();
							
						
			if($row) {
			return $row;
			} else {
				return false;
			}
	
	   } catch(PDOException $e) {
			echo $e->getMessage();
		}
	
	}




	
	
}
