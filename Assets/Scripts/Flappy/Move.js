#pragma strict

public var initVelocity : Vector2;

private var rb : Rigidbody2D;
private var rd : Renderer;
private var initialPositionX : float;
private var colliderFlappy : CircleCollider2D;
private var animatorFlappy : Animator;


function Start() {
 	initialPositionX = this.transform.position.x;
 	colliderFlappy = GetComponent.<CircleCollider2D>();
 	rd = GetComponent.<Renderer>();
 	animatorFlappy = GetComponent.<Animator>();
}

function Update() {
	if (Input.GetMouseButtonDown(0)) {
		var mousePosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
		var clickedInFlappy = colliderFlappy.OverlapPoint(mousePosition);
		if (clickedInFlappy) {
			GetComponent.<Rigidbody2D>().gravityScale = 1;
			animatorFlappy.SetBool('isFalling', true);
		}
	}
}

function FixedUpdate () {
	rb = GetComponent.<Rigidbody2D>();

	if (rb.gravityScale == 0) {
		rb.velocity = initVelocity;

		var initScreen : Vector3;
		initScreen = Camera.main.ScreenToWorldPoint(new Vector2(Camera.main.transform.position.x, 0));

		if (this.transform.position.x <= initScreen.x) {
			if (rd.isVisible == false) {
				this.transform.position.x = initialPositionX;
			}
		}
	} 
}
