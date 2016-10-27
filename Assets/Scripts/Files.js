#pragma strict
var sr_0guard:StreamWriter;
var sr_0houseA:StreamWriter;
var sr_0houseB:StreamWriter;
var sr_0houseC:StreamWriter;
var sr_0houseD:StreamWriter;
var sr_0cottage:StreamWriter;
var sr_1atom:StreamWriter;
var sr_1coin:StreamWriter;
var sr_1lamp:StreamWriter;
var sr_1pumpkin:StreamWriter;
var sr_1spike:StreamWriter;
var sr_05army:StreamWriter;
var sr_05bull:StreamWriter;
var sr_05carl:StreamWriter;
var sr_05justin:StreamWriter;
var sr_05npc:StreamWriter;
var sr_05swat:StreamWriter;
var sr_05vincent:StreamWriter;
var sr_025piano:StreamWriter;
var sr_025bed:StreamWriter;
var sr_025book:StreamWriter;
var sr_025clock:StreamWriter;
var sr_025chair:StreamWriter;
var sr_075jonas:StreamWriter;
var sr_075golem:StreamWriter;
var sr_075gorilla:StreamWriter;
var sr_075groucho:StreamWriter;
var sr_075grey:StreamWriter;
var sr_075robot:StreamWriter;
var sr_075skeleton:StreamWriter;

var sr_Unknow:StreamWriter;


function Start()
{
	Debug.Log("Player Start!");
	sr_0guard = File.CreateText("Output/sr_0guard");
	sr_0houseA=File.CreateText("Output/sr_0houseA");	
	sr_0houseB=File.CreateText("Output/sr_0houseB");
	sr_0houseC=File.CreateText("Output/sr_0houseC");	
	sr_0houseD=File.CreateText("Output/sr_0houseD");		
	sr_0cottage=File.CreateText("Output/sr_0cottage");			
	sr_1atom=File.CreateText("Output/sr_1atom");				
	sr_1coin=File.CreateText("Output/sr_1coin");					
	sr_1lamp=File.CreateText("Output/sr_1lamp");						
	sr_1pumpkin=File.CreateText("Output/sr_1pumpkin");							
	sr_1spike=File.CreateText("Output/sr_1spike");								
	sr_05army=File.CreateText("Output/sr_05army");									
	sr_05bull=File.CreateText("Output/sr_05bull");										
	sr_05carl=File.CreateText("Output/sr_05carl");											
	sr_05justin=File.CreateText("Output/sr_05justin");												
	sr_05npc=File.CreateText("Output/sr_05npc");													
	sr_05swat=File.CreateText("Output/sr_05swat");														
	sr_05vincent=File.CreateText("Output/sr_05vincent");															
	sr_025piano=File.CreateText("Output/sr_025piano");																
	sr_025bed=File.CreateText("Output/sr_025bed");																	
	sr_025book=File.CreateText("Output/sr_025book");																		
	sr_025clock=File.CreateText("Output/sr_025clock");																			
	sr_025chair=File.CreateText("Output/sr_025chair");																				
	sr_075jonas=File.CreateText("Output/sr_075jonas");																					
	sr_075golem=File.CreateText("Output/sr_075golem");																						
	sr_075gorilla=File.CreateText("Output/sr_075gorilla");																							
	sr_075groucho=File.CreateText("Output/sr_075groucho");																								
	sr_075grey=File.CreateText("Output/sr_075grey");																									
	sr_075robot=File.CreateText("Output/sr_075robot");																										
	sr_075skeleton=File.CreateText("Output/sr_075skeleton");
//	sr_Unknow = File.CreateText("Output/sr_Unknow");
	
}
function OnDestroy () {
	Debug.Log(sr_0guard);
	sr_0guard.Close();
	sr_0houseA.Close();	
	sr_0houseB.Close();
	sr_0houseC.Close();
	sr_0houseD.Close();			
	sr_0cottage.Close();			
	sr_1atom.Close();				
	sr_1coin.Close();					
	sr_1lamp.Close();						
	sr_1pumpkin.Close();							
	sr_1spike.Close();								
	sr_05army.Close();									
	sr_05bull.Close();										
	sr_05carl.Close();											
	sr_05justin.Close();												
	sr_05npc.Close();													
	sr_05swat.Close();														
	sr_05vincent.Close();															
	sr_025piano.Close();																
	sr_025bed.Close();																	
	sr_025book.Close();																		
	sr_025clock.Close();																			
	sr_025chair.Close();																				
	sr_075jonas.Close();																					
	sr_075golem.Close();																						
	sr_075gorilla.Close();																							
	sr_075groucho.Close();																								
	sr_075grey.Close();																									
	sr_075robot.Close();																										
	sr_075skeleton.Close();
//	sr_Unknow.Close();
	Debug.Log("Player was destroyed");
}
function OnApplicationQuit() {
	yield WaitForEndOfFrame();
	Debug.Log("Player Quit!");
}
function Update () {

}