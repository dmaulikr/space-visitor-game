#pragma strict

private var gameCollider: CircleCollider2D;
public var pausedGame : Transform;


function Start () {
	gameCollider = GetComponent.<CircleCollider2D>();
}

function Update () {
	if (Input.GetMouseButtonDown(0)) {
		var screenPosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
		var mousePosition = new Vector2(screenPosition.x, screenPosition.y);
		var isPressed = gameCollider.OverlapPoint(mousePosition);

		if (isPressed) {
			Time.timeScale = 0;
			transform.gameObject.SetActive(true);
		}
	}
}
