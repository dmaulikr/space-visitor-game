#pragma strict

public var velocity : float = 0.0;
public var maxDistance : float = 0.0;
public var goBack : boolean = false;

private var originalPositionX : float;
private var nextPosition : float;

private var maxDistanceXPositive : float;
private var maxDistanceXNegative : float;

function Start() {
	originalPositionX = parseFloat(transform.position.x);
	
	maxDistanceXPositive = originalPositionX + maxDistance;
	maxDistanceXNegative = originalPositionX - maxDistance;
	nextPosition = originalPositionX + velocity;
	if (goBack) velocity = velocity * -1;
}

function FixedUpdate () {
	if (!goBack) {
		if (nextPosition <= maxDistanceXPositive) {
			transform.position = new Vector3(nextPosition, transform.position.y, 0);
		} else { 
			goBack = true;
			velocity = velocity * -1;
		}

	} else {
		if (nextPosition >= maxDistanceXNegative) {
			transform.position = new Vector3(nextPosition, transform.position.y, 0);
		} else {
			goBack = false;
			velocity = velocity * -1;
		}
	}

	nextPosition += velocity;
}


