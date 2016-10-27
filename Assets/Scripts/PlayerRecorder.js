#pragma strict
import System;
import System.IO;
/*
将此脚本挂接给Camera，不能直接挂接给1st person controller，因为他没有tile自由度
*/
var  fileName = "CharacterWay.txt";
var  timeOut = 3*60;//seconds
private var sr:StreamWriter;
private var stayTime:float;

function Start()
{
	sr = File.CreateText("Output/"+fileName);
	sr.WriteLine (name);
	sr.WriteLine ("玩家移动记录");
	sr.WriteLine ("当前时间，玩家位置，玩家朝向");
	stayTime = Time.time;
}
function OnApplicationQuit() {
	sr.Write("游戏运行时间：\t");
	sr.WriteLine(Time.time-stayTime);
	sr.Close();
}
function Update () {
		sr.Write(Time.time);
		sr.Write("\t\t");
		sr.Write(transform.position.x);
		sr.Write("\t");
		sr.Write(transform.position.y);
		sr.Write("\t");
		sr.Write(transform.position.z);
		sr.Write("\t\t\t");
		sr.Write(transform.rotation.eulerAngles.x);
		sr.Write("\t");
		sr.Write(transform.rotation.eulerAngles.y);
		sr.Write("\t");
		sr.WriteLine(transform.rotation.eulerAngles.z);
		if(Time.time > timeOut || Input.GetKeyUp(KeyCode.Escape))
			Application.Quit();
}