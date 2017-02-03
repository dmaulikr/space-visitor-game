#pragma strict
public var pauseGame : Transform;

function btnCancel() {
	pauseGame.gameObject.SetActive(false);
	Time.timeScale = 1.0f;
}

function btnRestart() {
	Time.timeScale = 1.0f;
	Application.LoadLevel(Application.loadedLevelName);
}

function btnMenu() {
	Application.LoadLevel('menu');
}

function nextLevel() {
	Application.LoadLevel('level2');
}
