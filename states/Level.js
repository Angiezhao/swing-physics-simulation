var Level = function(game) {};

Level.prototype = {
  preload: function () {
    this.optionCount = 1;
  },

  addMenuOption: function(text, callback) {
    var optionStyle = { font: '30pt TheMinion', fill: '#F4A460', align: 'left', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};
    var txt = game.add.text(game.world.centerX, (this.optionCount * 80) + 200, text, optionStyle);
    txt.anchor.setTo(0.5);
    txt.stroke = "rgba(0,0,0,0)";
    txt.strokeThickness = 4;
    var onOver = function (target) {
      target.fill = "#FF7F50";
      target.stroke = "rgba(200,200,200,0.5)";
      txt.useHandCursor = true;
    };
    var onOut = function (target) {
      target.fill = "#F4A460";
      target.stroke = "rgba(0,0,0,0)";
      txt.useHandCursor = false;
    };
    //txt.useHandCursor = true;
    txt.inputEnabled = true;
    txt.events.onInputUp.add(callback, this);
    txt.events.onInputOver.add(onOver, this);
    txt.events.onInputOut.add(onOut, this);

    this.optionCount ++;
  },

  create: function () {
    this.stage.disableVisibilityChange = false;
    this.game.add.sprite(0, 0, 'stars');
    this.game.add.sprite(100, 300, 'happy');
    this.addMenuOption('Level1', function (e) {
      this.game.state.start("Option1");
    });
    this.addMenuOption('Level2', function (e) {
      this.game.state.start("Option2");
    });
    this.addMenuOption('Level3', function (e) {
      this.game.state.start("Option3");
    });
  }
};