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
	
			// this sql will get every thing we dreamed of 
			// we also need count in order to do scale
			
			$stmt = $this->db->prepare("SELECT identity, count(*) FROM data GROUP BY identity");
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


	public function total(){
		try {
			$stmt = $this->db->prepare("SELECT count(*) FROM data");
			// ok so we still must use execute just remove the stuff in the middle
			$stmt->execute();
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
