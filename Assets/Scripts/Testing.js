#pragma strict

var number : float = 0.0;

function Start () {
	
}

function Update () {
	
}

function FixedUpdate() {
	number += 0.04;
	transform.position = new Vector3(number, transform.position.y, 0);
	Debug.Log(number);
}
