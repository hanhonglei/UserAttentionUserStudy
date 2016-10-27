#pragma strict
var speed = 200.0;
function Start () {

}

function Update () {
//	this.transform.Rotate(Vector3(0, speed * Time.deltaTime, 0));
	transform.RotateAround (transform.position, Vector3.up, speed * Time.deltaTime);
}