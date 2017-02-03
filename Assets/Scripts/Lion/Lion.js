#pragma strict

private var animatorLion : Animator;

function Start () {
	animatorLion = GetComponent.<Animator>();
}

function OnCollisionEnter2D (coll: Collision2D) {
	if (coll.gameObject.name == 'ball') {
		animatorLion.SetBool('Death', true);
	}
}

 function keyFrame(key:int) {
	if (key == 1) {
		animatorLion.SetBool('Explotion', true);
	}
}
