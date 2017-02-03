#pragma strict

function Start () {
	
}

function Update () {
	
}

function OnCollisionEnter2D (coll: Collision2D) {
	Debug.Log(coll.gameObject.tag);
}
