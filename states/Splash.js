var Splash = function () {};

Splash.prototype = {

  loadScripts: function () {
    game.load.script('style', 'lib/style.js');
    game.load.script('mixins', 'lib/mixins.js');
    game.load.script('WebFont', 'vendor/webfontloader.js');
    game.load.script('GameMenu','states/GameMenu.js');
    game.load.script('GameOver','states/GameOver.js');
    game.load.script('Options', 'states/Options.js');
    game.load.script('Level', 'states/Level.js');
    game.load.script('Level1', 'states/level1.js');
    game.load.script('Level2', 'states/level2.js');
    game.load.script('Level3', 'states/level3.js');
  },

  loadBgm: function () {
    game.load.audio('dangerous', 'assets/bgm/Dangerous.mp3');
    game.load.audio('exit', 'assets/bgm/Exit the Premises.mp3');
  },

  loadImages: function () {
    game.load.image('menu-bg', 'assets/images/menu-bg.png');
    game.load.image('happy', 'assets/images/happy.png');
    game.load.image('options-bg', 'assets/images/instruction.png');
    game.load.image('gameover-bg', 'assets/images/gameover-bg.png');
  },

  loadFonts: function () {
    WebFontConfig = {
      custom: {
        families: ['TheMinion'],
        urls: ['assets/style/theminion.css']
      }
    }
  },

  init: function () {
    this.loadingBar = game.make.sprite(game.world.centerX-(387/2), 400, "loading");
    this.logo       = game.make.sprite(game.world.centerX, 200, 'brand');
    this.status     = game.make.text(game.world.centerX, 380, 'I am trying hard...', {fill: '#F4A460'});
    utils.centerGameObjects([this.logo, this.status]);
  },

  preload: function () {
    game.add.sprite(0, 0, 'stars');
    game.add.existing(this.logo).scale.setTo(0.5);
    game.add.existing(this.loadingBar);
    game.add.existing(this.status);
    this.load.setPreloadSprite(this.loadingBar);

    this.loadScripts();
    this.loadImages();
    this.loadFonts();
    this.loadBgm();

  },

  addGameStates: function () {

    game.state.add("GameMenu",GameMenu);
    game.state.add("GameOver",GameOver);
    game.state.add("Option1",Option1);
    game.state.add("Option2",Option2);
    game.state.add("Option3",Option3);
    game.state.add("Level",Level);
    game.state.add("Level1",Level1);
    game.state.add("Level2",Level2);
    game.state.add("Level3",Level3);
  },

  addGameMusic: function () {
    music = game.add.audio('dangerous');
    music.loop = true;
    music.play();
  },

  create: function() {
    this.status.setText('I am trying hard...');
    this.addGameStates();
    this.addGameMusic();

    setTimeout(function () {
      game.state.start("GameMenu");
    }, 1000);
  }
};
