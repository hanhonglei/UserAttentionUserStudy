#pragma strict
import System;
import System.IO;
 /*
 使用方法：
 首先为场景设定一个1st Person Controller
 1、将待统计计算的物体设置碰撞体component（collider）
 2、为这个物体命名一个有意义的名字
 3、将此脚本挂接到物体上
 4、启动游戏，让用户随意浏览
 5、退出游戏，得到每个物体命名的一个文件，文件中将记载统计信息
 */
//private var Main_Camera:Camera;
var  fileName = "MyFile.txt";
var cullDist = 100;
private var sr:StreamWriter = null;
private var stayTime:float;
private var bVisible:boolean;
private var maxside = 0.0;
private var bFirstV = false;
private var preTime = 0.0;	// han
private var stayTime2 = 0.0;	// han
private var files:Files;
function Start()
{
	yield WaitForEndOfFrame();
	Debug.Log(name+"object Start!");
	var controller = GameObject.Find("First Person Controller");
	files = controller.GetComponent(Files);
	if(gameObject.tag == "sr_0guard")
		sr = files.sr_0guard ;
	else if	(gameObject.tag == "sr_0houseA")
		sr = files.sr_0houseA;
	else if	(gameObject.tag == "sr_0houseB")
		sr = files.sr_0houseB;
	else if	(gameObject.tag == "sr_0houseC")
		sr = files.sr_0houseC;
	else if	(gameObject.tag == "sr_0houseD")
		sr = files.sr_0houseD;
	else if	(gameObject.tag == "sr_0cottage")
		sr = files.sr_0cottage;
	else if	(gameObject.tag == "sr_1atom")
		sr = files.sr_1atom;
	else if	(gameObject.tag == "sr_1coin")
		sr = files.sr_1coin;
	else if	(gameObject.tag == "sr_1lamp")
		sr = files.sr_1lamp;
	else if	(gameObject.tag == "sr_1pumpkin")
		sr = files.sr_1pumpkin;
	else if	(gameObject.tag == "sr_1spike")
		sr = files.sr_1spike;
	else if	(gameObject.tag == "sr_05army")
		sr = files.sr_05army;
	else if	(gameObject.tag == "sr_05bull")
		sr = files.sr_05bull;
	else if	(gameObject.tag == "sr_05carl")
		sr = files.sr_05carl;
	else if	(gameObject.tag == "sr_05justin")
		sr = files.sr_05justin;
	else if	(gameObject.tag == "sr_05npc")
		sr = files.sr_05npc;
	else if	(gameObject.tag == "sr_05swat")
		sr = files.sr_05swat;
	else if	(gameObject.tag == "sr_05vincent")
		sr = files.sr_05vincent;
	else if	(gameObject.tag == "sr_025piano")
		sr = files.sr_025piano;
	else if	(gameObject.tag == "sr_025bed")
		sr = files.sr_025bed;
	else if	(gameObject.tag == "sr_025book")
		sr = files.sr_025book;
	else if	(gameObject.tag == "sr_025clock")
		sr = files.sr_025clock;
	else if	(gameObject.tag == "sr_025chair")
		sr = files.sr_025chair;
	else if	(gameObject.tag == "sr_075jonas")
		sr = files.sr_075jonas;
	else if	(gameObject.tag == "sr_075golem")
		sr = files.sr_075golem;
	else if	(gameObject.tag == "sr_075gorilla")
		sr = files.sr_075gorilla;
	else if	(gameObject.tag == "sr_075groucho")
		sr = files.sr_075groucho;
	else if	(gameObject.tag == "sr_075grey")
		sr = files.sr_075grey;
	else if	(gameObject.tag == "sr_075robot")
		sr = files.sr_075robot;
	else if	(gameObject.tag == "sr_075skeleton")
		sr = files.sr_075skeleton;
	else 
	{
	    Debug.Log("Error Unknow:"+name);
		sr = File.CreateText("Output/"+name);
	}

		
	sr.Write(name);
	maxside = (GetComponent.<Collider>().bounds.extents.x > GetComponent.<Collider>().bounds.extents.y ) ? GetComponent.<Collider>().bounds.extents.x  : GetComponent.<Collider>().bounds.extents.y;// -xcc 12.22
	maxside = ( maxside >GetComponent.<Collider>().bounds.extents.z) ?  maxside : GetComponent.<Collider>().bounds.extents.z;// -xcc 12.22
	sr.Write("\t最大边长：\t"+ maxside); // -xcc 12.22
	sr.Write(GetComponent.<Collider>().bounds.size);
	sr.Write("\t物体包围体尺寸：\t");// -xcc 12.22
	sr.Write(GetComponent.<Collider>().bounds.extents.x+"\t"+GetComponent.<Collider>().bounds.extents.y+"\t"+GetComponent.<Collider>().bounds.extents.z);// -xcc 12.22
	sr.Write("\t包围体中心：\t");
	sr.Write(GetComponent.<Collider>().bounds.center.x+"\t"+GetComponent.<Collider>().bounds.center.y+"\t"+GetComponent.<Collider>().bounds.center.z);  // -xcc 12.22
	sr.Write("\t物体中心：\t");
	sr.Write(transform.position.x+"\t"+transform.position.y+"\t"+transform.position.z);// -xcc 12.22
	sr.Write("\t关注度记录文件信息：\t");
	sr.WriteLine ("物体名称\t时间\t物体中心在摄像机空间中的深度\t和摄像机距离\t物体中心在屏幕中心坐标\t物体被遮挡比例");
	stayTime = 0;

}
// applicationQuit先被调用，OnDestroy函数后被调用
function OnApplicationQuit() {
	if(bFirstV)						// han
	{
		stayTime2 += Time.time - preTime;
	}
	sr.Write(name+"\t物体被关注总时间：\t"+stayTime2+"\t"+stayTime+"\t");	// han将stayTime修改为stayTime2
	sr.Write("时间比率：\t"+ stayTime2/Time.time+"\t"+stayTime/Time.time); // -xcc 12.22
	sr.Write("\t程序运行总时间：\t");// -xcc 12.22
	sr.WriteLine(Time.time); // -xcc 12.22
	Debug.Log(name+"Quit!");
	yield WaitForEndOfFrame();
	sr.Close();
}
function OnDestroy () {
	Debug.Log(name+"was destroyed");
}

// 由于有些层次对象不存在renderer成员，故而使用几何方式判断是否在视见体内
static function IsRenderedFrom(trans:Transform, camera : Camera) : boolean
{
    var planes = GeometryUtility.CalculateFrustumPlanes(camera);
	return GeometryUtility.TestPlanesAABB(planes, trans.gameObject.GetComponent.<Collider>().bounds);
}
function Update () {
	if(sr == null)
	{
		Debug.Log(name+"file Error!");
		return;
	}
	bVisible = IsRenderedFrom(transform, Camera.main);
	if( !bVisible)//!this.renderer.isVisible ||
	{
		//Debug.Log(name+"--Invisible");	
		if(bFirstV)
		{
			stayTime2 += Time.time - preTime;	// han
			bFirstV = false;					// han
		}
		return;
	}
		//Debug.Log(name+"--Visible");
	// 注意：此处的可见,指的是处于视野内,但还可能被其他物体遮挡,此处需要自己做遮挡计算
		// 自己进行遮挡率估算.将模型中心,8个角分别投射射线给摄像机,最后计算比例,记为遮挡率
		// 以下为8个角
	 	var bound = GetComponent.<Collider>().bounds.extents;
		var dist = Vector3.Distance(GetComponent.<Collider>().bounds.center/*使用collider中心位置transform.position*/, Camera.main.transform.position) - bound.y;
		if(dist > cullDist) // 如果超过最远距离，则不进行计算
			return;
//		Debug.Log(bound.magnitude);
		
		// 自己进行遮挡率估算.将模型中心,8个角分别投射射线给摄像机,最后计算比例,记为遮挡率
	 	var ray = new Ray[9];
	 	var org = Camera.main.transform.position;
	 	var targ = GetComponent.<Collider>().bounds.center;
	 	// 中心
	 	ray[0]  = Ray(org, targ - org);
	 	Debug.DrawLine (org, targ);
		ray[1]  = Ray(org, targ + bound - org);
		Debug.DrawLine (org, targ + bound);
		bound.x = -bound.x;
	    ray[2]  = Ray(org, targ + bound  - org);
	    Debug.DrawLine (org, targ + bound);
	    bound.y = -bound.y;
		ray[3]  = Ray(org, targ + bound  - org);
		Debug.DrawLine (org, targ + bound);
		bound.z = -bound.z;
		ray[4]  = Ray(org, targ + bound  - org);
		Debug.DrawLine (org, targ + bound);
		bound.x = -bound.x;
		ray[5]  = Ray(org, targ + bound  - org);
		Debug.DrawLine (org, targ + bound);
		bound.y = -bound.y;
		ray[6]  = Ray(org, targ + bound  - org);
		Debug.DrawLine (org, targ + bound);
		bound.y = -bound.y;
		bound.z = -bound.z;
		ray[7]  = Ray(org, targ + bound  - org);
		Debug.DrawLine (org, targ + bound);
		bound.x = -bound.x;
		bound.z = -bound.z;
		bound.y = -bound.y;
		ray[8]  = Ray(org, targ + bound  - org);
		Debug.DrawLine (org, targ + bound);
// ！！ 完全使用射线方式进行遮挡计算，需要进一步考虑如何实现！！
		var hitNum = 0;
		if(dist > 0 )
		{
			for(var i = 0; i < 9; i++)
			{
				var hit : RaycastHit;
				if(Physics.Raycast(ray[i].origin,ray[i].direction,hit, dist))
					if(hit.collider.gameObject != this.gameObject)
					{
//						Debug.DrawLine (org, hit.point);
						hitNum++;
					}
			}
		}
	    if(hitNum == 9)
	    	return;
 
		var screenPos : Vector3 = Camera.main.WorldToScreenPoint (transform.position);
			
		stayTime += Time.deltaTime;		// 物体处于视见体内的总时间

		// 当前时间
		sr.Write(name+"\t"+Time.time);
		sr.Write("\t\t");
		// 在摄像机空间深度
		sr.Write(screenPos.z);
		sr.Write("\t\t");
		// 和摄像机距离
		sr.Write(dist);
		sr.Write("\t\t");
		// 物体中心在屏幕空间的坐标,-0.5到0.5之间
		var xx = 0.5-screenPos.x / Camera.main.pixelWidth;
		var yy = 0.5-screenPos.y / Camera.main.pixelHeight;

//		Debug.Log(screenPos.z);
//		Debug.Log(dist);
		sr.Write(xx);
		sr.Write("\t");
		sr.Write(yy);
		sr.Write("\t\t");
		// 物体投影比例,为了便于计算,投影大小按照模型包围盒直径和摄像机距离的比例
		// 物体被遮挡比例
		sr.Write(hitNum / 9.0);
		sr.WriteLine();
	if(!bFirstV)							// han
	{
		bFirstV = true;
		preTime = Time.time;
	}
}
function OnBecameInvisible () {
		bVisible = false;
//		Debug.Log("Invisible!", gameObject);
}
function OnBecameVisible() {
		bVisible = true;
//		Debug.Log("Visible!", gameObject);
}