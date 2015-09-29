exports.BattleScripts = {
	init: function () {
		this.modData('Pokedex', 'cherrimsunshine').types = ['Grass', 'Fire'];

		// Give Hurricane to all the Bug/Flying Quiver-dancers
		// Precedent: Volcarona
		this.modData('Learnsets', 'masquerain').learnset.hurricane = ['5L100'];
		this.modData('Learnsets', 'butterfree').learnset.hurricane = ['5L100'];
		this.modData('Learnsets', 'beautifly').learnset.hurricane = ['5L100'];
		this.modData('Learnsets', 'mothim').learnset.hurricane = ['5L100'];

		// Masquerain also gets Surf because we want it to be viable
		this.modData('Learnsets', 'masquerain').learnset.surf = ['5M'];

		// Roserade gets Sludge
		this.modData('Learnsets', 'roserade').learnset.sludge = ['5L100'];

		// Meloetta: Fiery Dance
		this.modData('Learnsets', 'meloetta').learnset.fierydance = ['5L100'];

		// Galvantula: Zap Cannon
		this.modData('Learnsets', 'galvantula').learnset.zapcannon = ['5L100'];

		// Virizion: Horn Leech
		this.modData('Learnsets', 'virizion').learnset.hornleech = ['5L100'];

		// Scolipede, Milotic, Steelix: Coil
		this.modData('Learnsets', 'milotic').learnset.coil = ['5L100'];
		this.modData('Learnsets', 'scolipede').learnset.coil = ['5L100'];
		this.modData('Learnsets', 'steelix').learnset.coil = ['5L100'];

		// Rotoms: lots of moves
		this.modData('Learnsets', 'rotomwash').learnset.bubblebeam = ['5L100'];
		this.modData('Learnsets', 'rotomfan').learnset.hurricane = ['5L100'];
		this.modData('Learnsets', 'rotomfan').learnset.twister = ['5L100'];
		this.modData('Learnsets', 'rotomfrost').learnset.frostbreath = ['5L100'];
		this.modData('Learnsets', 'rotomheat').learnset.heatwave = ['5L100'];
		this.modData('Learnsets', 'rotommow').learnset.magicalleaf = ['5L100'];

		// Zororark: much wider movepool
		this.modData('Learnsets', 'zoroark').learnset.earthquake = ['5M'];
		this.modData('Learnsets', 'zoroark').learnset.stoneedge = ['5M'];
		this.modData('Learnsets', 'zoroark').learnset.icebeam = ['5M'];
		this.modData('Learnsets', 'zoroark').learnset.xscissor = ['5M'];
		this.modData('Learnsets', 'zoroark').learnset.gigadrain = ['5T'];
		this.modData('Learnsets', 'zoroark').learnset.superpower = ['5T'];

		// Mantine: lots of moves
		this.modData('Learnsets', 'mantine').learnset.recover = ['5L100'];
		this.modData('Learnsets', 'mantine').learnset.whirlwind = ['5L100'];
		this.modData('Learnsets', 'mantine').learnset.batonpass = ['5L100'];
		this.modData('Learnsets', 'mantine').learnset.wish = ['5L100'];
		this.modData('Learnsets', 'mantine').learnset.soak = ['5L100'];
		this.modData('Learnsets', 'mantine').learnset.lockon = ['5L100'];
		this.modData('Learnsets', 'mantine').learnset.acidspray = ['5L100'];
		this.modData('Learnsets', 'mantine').learnset.octazooka = ['5L100'];
		this.modData('Learnsets', 'mantine').learnset.stockpile = ['5L100'];

		// Aipom: eggSketch! :D
		this.modData('Learnsets', 'aipom').learnset.sketch = ['5E'];

		// Spinda: free Superpower
		this.modData('Learnsets', 'spinda').learnset.superpower = ['5L100'];

		// Venusaur
		this.modData('Pokedex', 'venusaur').abilities['1'] = 'Leaf Guard';
		// Charizard
		this.modData('Pokedex', 'charizard').abilities['1'] = 'Flame Body';
		// Blastoise
		this.modData('Pokedex', 'blastoise').abilities['1'] = 'Shell Armor';
		// Meganium
		this.modData('Pokedex', 'meganium').abilities['1'] = 'Harvest';
		// Typhlosion
	//	this.modData('Pokedex', 'typhlosion').abilities['1'] = 'Magma Armor';
	this.modData('Pokedex', 'typhlosion').abilities['1'] = 'No Guard';
		// Feraligatr
		this.modData('Pokedex', 'feraligatr').abilities['1'] = 'Strong Jaw';
		// Sceptile
		this.modData('Pokedex', 'sceptile').abilities['1'] = 'Limber';
		// Blaziken
		this.modData('Pokedex', 'blaziken').abilities['1'] = 'Reckless';
		// Swampert
		this.modData('Pokedex', 'swampert').abilities['1'] = 'Hydration';
		// Torterra
		this.modData('Pokedex', 'torterra').abilities['1'] = 'Weak Armor';
		// Infernape
		this.modData('Pokedex', 'infernape').abilities['1'] = 'No Guard';
		// Empoleon
		this.modData('Pokedex', 'empoleon').abilities['1'] = 'Ice Body';
		// Serperior
		this.modData('Pokedex', 'serperior').abilities['1'] = 'Own Tempo';
		// Emboar
		this.modData('Pokedex', 'emboar').abilities['1'] = 'Sheer Force';
		// Samurott
		this.modData('Pokedex', 'samurott').abilities['1'] = 'Technician';
		// Chesnaught
		this.modData('Pokedex', 'chesnaught').abilities['1'] = 'Battle Armor';
		// Delphox
		this.modData('Pokedex', 'delphox').abilities['1'] = 'Magic Guard';
		// Greninja
		this.modData('Pokedex', 'greninja').abilities['1'] = 'Pickpocket';
				// Mew
		this.modData('Pokedex', 'mew').abilities['H'] = 'Protean';
						// Jirachi
		this.modData('Pokedex', 'jirachi').abilities['0'] = 'Stall';
		this.modData('Pokedex', 'jirachi').types = ['Steel', 'Fairy'];
						// Celebi
		this.modData('Pokedex', 'celebi').abilities['H'] = 'Regenerator';
		this.modData('Pokedex', 'celebi').types = ['Grass', 'Fairy'];
		// Phione
		this.modData('Pokedex', 'phione').abilities['H'] = 'Adaptability';
		this.modData('Pokedex', 'phione').types = ['Water', 'Fairy'];
		this.modData('Learnsets', 'phione').learnset.recover = ['5L100'];
				this.modData('Learnsets', 'phione').learnset.tailglow = ['5L100'];
		// Cresselia
		this.modData('Pokedex', 'cresselia').abilities['H'] = 'Trace';
		this.modData('Pokedex', 'cresselia').types = ['Fairy'];
		// Victini
		this.modData('Pokedex', 'victini').abilities['H'] = 'Contrary';
		this.modData('Pokedex', 'victini').types = ['Fire', 'Fairy'];
		// Genesect
		this.modData('Pokedex', 'genesect').abilities['0'] = 'Flash Fire';
		// Meloetta
		this.modData('Pokedex', 'meloetta').abilities['H'] = 'Pixilate';
		this.modData('Pokedex', 'meloetta').types = ['Normal', 'Fairy'];
		// Regice
		this.modData('Pokedex', 'regice').abilities['0'] = 'Magic Guard';
			this.modData('Learnsets', 'regice').learnset.recover = ['5L100'];
		// Regirock
		this.modData('Pokedex', 'regirock').abilities['0'] = 'Solid Rock';
	this.modData('Learnsets', 'regirock').learnset.recover = ['5L100'];
		// Registeel
		this.modData('Pokedex', 'registeel').abilities['0'] = 'Regenerator';
				// Masquerain
		this.modData('Pokedex', 'masquerain').abilities['H'] = 'Drizzle';
		this.modData('Pokedex', 'masquerain').types = ['Water', 'Bug'];
			this.modData('Learnsets', 'masquerain').learnset.thunder = ['5L100'];
				// Probopass
				this.modData('Pokedex', 'probopass').abilities['H'] = 'Regenerator';
				this.modData('Pokedex', 'sudowoodo').abilities['H'] = 'Protean';
				this.modData('Learnsets', 'sudowoodo').learnset.recover = ['5L100'];
				this.modData('Learnsets', 'arcanine').learnset.dragondance = ['5L100'];
				this.modData('Learnsets', 'arcanine').learnset.swordsdance = ['5L100'];
				this.modData('Learnsets', 'arcanine').learnset.calmmind = ['5L100'];
				this.modData('Pokedex', 'golem').abilities['H'] = 'Dry Skin';
				this.modData('Learnsets', 'golem').learnset.slackoff = ['5L100'];
				this.modData('Learnsets', 'golem').learnset.swordsdance = ['5L100'];
				this.modData('Learnsets', 'golem').learnset.headsmash = ['5L100'];
				this.modData('Pokedex', 'vivillon').types = ['Fairy', 'Bug'];
				this.modData('Learnsets', 'vivillon').learnset.moonblast = ['5L100'];
				this.modData('Learnsets', 'vivillon').learnset.focusblast = ['5L100'];
				this.modData('Learnsets', 'vivillon').learnset.zapcannon = ['5L100'];
				this.modData('Learnsets', 'vivillon').learnset.blizzard = ['5L100'];
				this.modData('Learnsets', 'vivillon').learnset.inferno = ['5L100'];
				this.modData('Pokedex', 'vivillon').abilities['H'] = 'No Guard';
				this.modData('Pokedex', 'pidgeot').abilities['H'] = 'Gale Wings';
				this.modData('Pokedex', 'typhlosion').types = ['Fire', 'Ground'];
						this.modData('Learnsets', 'typhlosion').learnset.earthpower = ['5L100'];
								this.modData('Pokedex', 'luvdisc').abilities['H'] = 'Huge Power';
							this.modData('Learnsets', 'luvdisc').learnset.closecombat = ['5L100'];
							this.modData('Learnsets', 'luvdisc').learnset.shellsmash = ['5L100'];
				this.modData('Pokedex', 'milotic').types = ['Water', 'Fairy'];
						this.modData('Learnsets', 'milotic').learnset.moonblast = ['5L100'];
				this.modData('Pokedex', 'samurott').types = ['Water', 'Fighting'];
						this.modData('Learnsets', 'samurott').learnset.slackoff = ['5L100'];
								this.modData('Learnsets', 'samurott').learnset.closecombat = ['5L100'];
									this.modData('Pokedex', 'samurott').abilities['H'] = 'Multiscale';
										// unown: eggSketch! :D
		this.modData('Learnsets', 'unown').learnset.sketch = ['5L100'];
		this.modData('Pokedex', 'flareon').abilities['H'] = 'Contrary';
		this.modData('Learnsets', 'flareon').learnset.vcreate = ['5L100'];
		this.modData('Learnsets', 'furfrou').learnset.recover = ['5L100'];
				this.modData('Learnsets', 'furfrou').learnset.swordsdance = ['5L100'];
						this.modData('Learnsets', 'furfrou').learnset.extremespeed = ['5L100'];
								this.modData('Learnsets', 'furfrou').learnset.superpower = ['5L100'];
		this.modData('Learnsets', 'furfrou').learnset.amnesia = ['5L100'];
		this.modData('Pokedex', 'carbink').abilities['H'] = 'Simple';
		this.modData('Pokedex', 'carbink').types = ['Steel', 'Fairy'];
			this.modData('Learnsets', 'carbink').learnset.recover = ['5L100'];
					this.modData('Pokedex', 'goodra').types = ['Dragon', 'Fairy'];
			this.modData('Learnsets', 'goodra').learnset.moonblast = ['5L100'];
						this.modData('Learnsets', 'goodra').learnset.slackoff = ['5L100'];
			this.modData('Pokedex', 'xerneas').types = ['Grass', 'Fairy'];
			this.modData('Pokedex', 'doublade').abilities['H'] = 'Solid Rock';
			this.modData('Pokedex', 'alakazam').abilities['1'] = 'Huge Power';
		// Levitate mons
		this.modData('Pokedex', 'unown').abilities['1'] = 'Shadow Tag';
		this.modData('Pokedex', 'flygon').abilities['1'] = 'Compound Eyes';
		this.modData('Pokedex', 'flygon').abilities['H'] = 'Sand Rush';
		this.modData('Pokedex', 'weezing').abilities['1'] = 'Aftermath';
		this.modData('Pokedex', 'eelektross').abilities['1'] = 'Poison Heal';
		this.modData('Pokedex', 'claydol').abilities['1'] = 'Filter';
		this.modData('Pokedex', 'gengar').abilities['1'] = 'Cursed Body';
		this.modData('Pokedex', 'mismagius').abilities['1'] = 'Cursed Body';
		this.modData('Pokedex', 'cryogonal').abilities['1'] = 'Ice Body';
		this.modData('Pokedex', 'mesprit').abilities['1'] = 'Serene Grace';
		this.modData('Pokedex', 'uxie').abilities['1'] = 'Synchronize';
		this.modData('Pokedex', 'azelf').abilities['1'] = 'Steadfast';
		this.modData('Pokedex', 'hydreigon').abilities['1'] = 'Sheer Force';

		// Adaptability change
		this.modData('Pokedex', 'crawdaunt').abilities['H'] = 'Tough Claws';

		// Every hidden ability becomes released
		for (var i in this.data.FormatsData) {
			this.modData('FormatsData', i).unreleasedHidden = false;
		}
	}
};
