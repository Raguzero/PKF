var color = require('../config/color');

exports.parseEmoticons = parseEmoticons;

var emotes = {
	'huh': 'http://www.pokexperto.net/foros/Smileys/emoticonos/huh.gif',
	':o': 'http://www.pokexperto.net/foros/Smileys/emoticonos/ohmy.gif',
	';)': 'http://www.pokexperto.net/foros/Smileys/emoticonos/wink.gif',
	'=P': 'http://www.pokexperto.net/foros/Smileys/emoticonos/tongue.gif',
	'LOL': 'http://www.pokexperto.net/foros/Smileys/emoticonos/laugh.gif',
	':B):': 'http://www.pokexperto.net/foros/Smileys/emoticonos/cool.gif',
	'rolleyes': 'http://www.pokexperto.net/foros/Smileys/emoticonos/rolleyes.gif',
	'ehem': 'http://www.pokexperto.net/foros/Smileys/emoticonos/dry.gif',
	'¬¬': 'http://www.pokexperto.net/foros/Smileys/emoticonos/angry.gif',
	'sad': 'http://www.pokexperto.net/foros/Smileys/emoticonos/sad.gif',
	'unsure': 'http://www.pokexperto.net/foros/Smileys/emoticonos/unsure.gif',
	'ph43r': 'http://www.pokexperto.net/foros/Smileys/emoticonos/ninja.gif',
	'okey': 'http://www.pokexperto.net/foros/Smileys/emoticonos/oki.gif',
	'^^U': 'http://www.pokexperto.net/foros/Smileys/emoticonos/sweatdrop.gif',
	'shock': 'http://www.pokexperto.net/foros/Smileys/emoticonos/shock.gif',
	'nenemalo': 'http://www.pokexperto.net/foros/Smileys/emoticonos/nunu.gif',
	'happy': 'http://www.pokexperto.net/foros/Smileys/emoticonos/happy.gif',
	'biggrin': 'http://www.pokexperto.net/foros/Smileys/emoticonos/biggrin.gif',
	'boring': 'http://www.pokexperto.net/foros/Smileys/emoticonos/sleep.gif',
	'wup': 'http://www.pokexperto.net/foros/Smileys/emoticonos/wub.gif',
	'madness': 'http://www.pokexperto.net/foros/Smileys/emoticonos/loco.gif',
	'facepalm': 'http://www.pokexperto.net/foros/Smileys/emoticonos/facepalm.gif',
	'sisisi': 'http://www.pokexperto.net/foros/Smileys/emoticonos/sisisi.gif',
	'vueltasss': 'http://www.pokexperto.net/foros/Smileys/emoticonos/vueltasss.gif',
	'dance': 'http://www.pokexperto.net/foros/Smileys/emoticonos/baile.gif',
	'blink': 'http://www.pokexperto.net/foros/Smileys/emoticonos/blink.gif',
        'suicide': 'http://www.pokexperto.net/foros/Smileys/emoticonos/suicide.gif',
	'clown': 'http://www.pokexperto.net/foros/Smileys/emoticonos/clown.gif',
	'vegetaaa': 'http://www.pokexperto.net/foros/Smileys/emoticonos/vegeta.gif',
	'xD': 'http://www.pokexperto.net/foros/Smileys/emoticonos/xD.gif',
	'dwarf': 'http://www.pokexperto.net/foros/Smileys/emoticonos/dwarf.gif',
	'crazy': 'http://www.pokexperto.net/foros/Smileys/emoticonos/crazy.gif',
	'spiteful': 'http://www.pokexperto.net/foros/Smileys/emoticonos/spiteful.gif',
	'diabloo': 'http://www.pokexperto.net/foros/Smileys/emoticonos/diablo.gif',
	'supermann': 'http://www.pokexperto.net/foros/Smileys/emoticonos/superman.gif',
	'bravoo': 'http://www.pokexperto.net/foros/Smileys/emoticonos/clapping.gif',
	'cray': 'http://www.pokexperto.net/foros/Smileys/emoticonos/cray.gif',
	'rofl': 'http://www.pokexperto.net/foros/Smileys/emoticonos/rofl.gif',
	'bye': 'http://www.pokexperto.net/foros/Smileys/emoticonos/bye.gif',
	'yonofui': 'http://www.pokexperto.net/foros/Smileys/emoticonos/yonofui.gif',
	'nono': 'http://www.pokexperto.net/foros/Smileys/emoticonos/nono.gif',
	'notworthy': 'http://www.pokexperto.net/foros/Smileys/emoticonos/notworthy.gif',
	'wizard': 'http://www.pokexperto.net/foros/Smileys/emoticonos/wizard.gif',
	'swoon': 'http://www.pokexperto.net/foros/Smileys/emoticonos/swoon.gif',
	'cold': 'http://www.pokexperto.net/foros/Smileys/emoticonos/frio.gif',
	'flotadorrr': 'http://www.pokexperto.net/foros/Smileys/emoticonos/flotador.gif',
	'agresivooo': 'http://www.pokexperto.net/foros/Smileys/emoticonos/agresivo.gif',
	'celebrate': 'http://www.pokexperto.net/foros/Smileys/emoticonos/celebracion.gif',
	'egipciooo': 'http://www.pokexperto.net/foros/Smileys/emoticonos/egipcio.gif',
	'madame': 'http://www.pokexperto.net/foros/Smileys/emoticonos/madame.gif',
	'friends': 'http://www.pokexperto.net/foros/Smileys/emoticonos/friends.gif',
	'zzz': 'http://www.pokexperto.net/foros/Smileys/emoticonos/zzz.gif',
	'awesome': 'http://images1.wikia.nocookie.net/__cb20121113170523/mangafree/es/images/f/f3/Awesome_face.gif',
	'mudkip': 'http://www.gatheringmagic.com/forum/images/smilies/mudkip.gif',
	'wintass': 'http://i45.tinypic.com/2h4kt93.png'
};

var emotesKeys = Object.keys(emotes);
var patterns = [];
var metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/g;

for (var i in emotes) {
	if (emotes.hasOwnProperty(i)) {
		patterns.push('(' + i.replace(metachars, '\\$&') + ')');
	}
}
var patternRegex = new RegExp(patterns.join('|'), 'g');

/**
 * Parse emoticons in message.
 *
 * @param {String} message
 * @param {Object} room
 * @param {Object} user
 * @param {Boolean} pm - returns a string if it is in private messages
 * @returns {Boolean|String}
 */
function parseEmoticons(message, room, user, pm) {
	if (!pm && room.disableEmoticons) return false;

	var match = false;
	var len = emotesKeys.length;

	while (len--) {
		if (message.indexOf(emotesKeys[len]) >= 0) {
			match = true;
			break;
		}
	}

	if (!match) return false;

	// escape HTML
	message = Tools.escapeHTML(message);

	// add emotes
	message = message.replace(patternRegex, function (match) {
		var emote = emotes[match];
		return typeof emote === 'string' ? '<img src="' + emote + '" title="' + match + '" />' : match;
	});

	// __italics__
	message = message.replace(/\_\_([^< ](?:[^<]*?[^< ])?)\_\_(?![^<]*?<\/a)/g, '<i>$1</i>');

	// **bold**
	message = message.replace(/\*\*([^< ](?:[^<]*?[^< ])?)\*\*/g, '<b>$1</b>');

	var group = user.getIdentity().charAt(0);
	if (room.auth) group = room.auth[user.userid] || group;

	var style = [
		"background: none",
		"border: 0",
		"padding: 0 5px 0 0",
		"font-family: Verdana",
		"font-size: 9pt"
	].join(';');

	message = "<div class='chat'>" + "<small>" + group + "</small>" + "<button name='parseCommand' value='/user " + user.name + "' style='" + style + "'>" + "<b><font color='" + color(user.userid) + "'>" + user.name + ":</font></b>" + "</button><em class='mine'>" + message + "</em></div>";
	if (pm) return message;

	room.addRaw(message);

	return true;
}

/**
 * Create a two column table listing emoticons.
 *
 * @return {String} emotes table
 */
function create_table() {
	var emotes_name = Object.keys(emotes);
	var emotes_list = [];
	var emotes_group_list = [];
	var len = emotes_name.length;

	for (var i = 0; i < len; i++) {
		emotes_list.push("<td>" +
			"<img src='" + emotes[emotes_name[i]] + "'' title='" + emotes_name[i] + "'>" +
			emotes_name[i] + "</td>");
	}

	var emotes_list_right = emotes_list.splice(len / 2, len / 2);

	for (var i = 0; i < len / 2; i++) {
		var emote1 = emotes_list[i],
			emote2 = emotes_list_right[i];
		if (emote2) {
			emotes_group_list.push("<tr>" + emote1 + emote2 + "</tr>");
		} else {
			emotes_group_list.push("<tr>" + emote1 + "</tr>");
		}
	}

	return "<center><b><u>List of Emoticons</u></b></center>" + "<table border='1' cellspacing='0' cellpadding='5' width='100%'>" + "<tbody>" + emotes_group_list.join("") + "</tbody>" + "</table>";
}

var emotes_table = create_table();

exports.commands = {
	emotes: 'emoticons',
	emoticons: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReply("|raw|" + emotes_table);
	},
	emoticonshelp: ["/emoticons - Get a list of emoticons."],

	toggleemote: 'toggleemoticons',
	toggleemotes: 'toggleemoticons',
	toggleemoticons: function (target, room, user) {
		if (!this.can('declare', null, room)) return false;
		room.disableEmoticons = !room.disableEmoticons;
		this.sendReply("Disallowing emoticons is set to " + room.disableEmoticons + " in this room.");
		if (room.disableEmoticons) {
			this.add("|raw|<div class=\"broadcast-red\"><b>Emoticons are disabled!</b><br />Emoticons will not work.</div>");
		} else {
			this.add("|raw|<div class=\"broadcast-blue\"><b>Emoticons are enabled!</b><br />Emoticons will work now.</div>");
		}
	},
	toggleemoticonshelp: ["/toggleemoticons - Toggle emoticons on or off."]
};
