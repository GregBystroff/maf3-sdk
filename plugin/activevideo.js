var player = new HTML5Player(Player.TV);
player.hide();
plugins.players.push(player);

plugins.storage = new CookieStorage();

window.addEventListener('blur', function () {
	window.close();
});
