var Option1 = function(game) {};

Option1.prototype = {

  menuConfig: {
    className: "inverse",
    startY: 260,
    startX: "center"
  },


  init: function () {
    this.titleText = game.make.text(game.world.centerX, 80, "Learning Content: \nNewton's First Law of Motion", {
      font: 'bold 40pt TheMinion',
      fill: '#962D17',
      align: 'center'
    });
    this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    this.titleText.anchor.set(0.5);
    this.optionCount = 1;
  },
  addMenuOption: function(text, callback) {
    var optionStyle = { font: '30pt TheMinion', fill: '#F4A460', align: 'left', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};
    var txt = game.add.text(game.world.centerX+30, (this.optionCount * 80) + 570, text, optionStyle);
    txt.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
    txt.anchor.setTo(0.5);
    txt.stroke = "rgba(0,0,0,0";
    txt.strokeThickness = 4;
    var onOver = function (target) {
      target.fill = "#F08080";
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
    this.game.stage.backgroundColor = '#FFFFFF';
    this.game.add.sprite(0, 0, 'options-bg');
    this.game.add.existing(this.titleText);
    this.game.add.text(350, 180, "Newton's first law of motion states that an \nobject in motion stays in motion and an \nobject at rest stays at rest, unless acted \nupon by an outside force. When sitting on \na swing, the swing does not move until \nyou are pushed.", { fill: '#962D17', font: '28pt Arial' });
    this.game.add.text(350, 480, "Click to send bullet, the bullet will push the \nswing. You just have 10 bullets. Try to use \nleast bullets to eat all stars.", { fill: '#F08080', font: '28pt Arial' });
    this.addMenuOption('Play ->', function () {
      this.game.state.start("Level1");
    });
  }
};

Phaser.Utils.mixinPrototype(Option1.prototype, mixins);

var Option2 = function(game) {};

Option2.prototype = {

  menuConfig: {
    className: "inverse",
    startY: 260,
    startX: "center"
  },


  init: function () {
    this.titleText = game.make.text(game.world.centerX, 80, "Learning Content: Inertia", {
      font: 'bold 40pt TheMinion',
      fill: '#962D17',
      align: 'center'
    });
    this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    this.titleText.anchor.set(0.5);
    this.optionCount = 1;
  },
  addMenuOption: function(text, callback) {
    var optionStyle = { font: '30pt TheMinion', fill: '#F4A460', align: 'left', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};
    var txt = game.add.text(game.world.centerX+30, (this.optionCount * 80) + 570, text, optionStyle);
    txt.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
    txt.anchor.setTo(0.5);
    txt.stroke = "rgba(0,0,0,0";
    txt.strokeThickness = 4;
    var onOver = function (target) {
      target.fill = "#F08080";
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
    this.game.stage.backgroundColor = '#FFFFFF';
    this.game.add.sprite(0, 0, 'options-bg');
    this.game.add.existing(this.titleText);
    this.game.add.text(350, 180, "Inertia is the property of an object to stay moving \nunless it is stopped by an outside force. Gravity \npulls the ride down when it gets high above the \nEarth. Even though the swing is pulled down by \ngravity, the inertia of the object pushes the swing \nright back up into the air, creating a swinging \nmotion. Gravity pulls you down, and inertia keeps \nyou moving back and forward until the friction of \nthe air and the swing chain resist the motion.", { fill: '#962D17', font: '28pt Arial' });
    //this.game.add.text(350, 480, "Click to send bullet, the bullet will push the \nswing. You just have 10 bullets. Try to use \nleast bullets to eat all stars.", { fill: '#F08080', font: '28pt Arial' });
    this.addMenuOption('Play ->', function () {
      this.game.state.start("Level2");
    });
  }
};
Phaser.Utils.mixinPrototype(Option2.prototype, mixins);


var Option3 = function(game) {};

Option3.prototype = {

  menuConfig: {
    className: "inverse",
    startY: 260,
    startX: "center"
  },


  init: function () {
    this.titleText = game.make.text(game.world.centerX, 70, "Learning Content: Direction of Force", {
      font: 'bold 40pt TheMinion',
      fill: '#962D17',
      align: 'center'
    });
    this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    this.titleText.anchor.set(0.5);
    this.optionCount = 1;
  },
  addMenuOption: function(text, callback) {
    var optionStyle = { font: '30pt TheMinion', fill: '#F4A460', align: 'left', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};
    var txt = game.add.text(game.world.centerX+30, (this.optionCount * 80) + 600, text, optionStyle);
    txt.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);
    txt.anchor.setTo(0.5);
    txt.stroke = "rgba(0,0,0,0";
    txt.strokeThickness = 4;
    var onOver = function (target) {
      target.fill = "#F08080";
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
    this.game.stage.backgroundColor = '#FFFFFF';
    this.game.add.sprite(0, 0, 'options-bg');
    this.game.add.existing(this.titleText);
    this.game.add.text(330, 120, 'Work can be either positive or negative: if the \nforce has a component in the same direction as \nthe displacement of the object, the force is doing \npositive work. If the force has a component in the \ndirection opposite to the displacement, the force \ndoes negative work. When sitting on a swing, the \nswing does not move until you provide an outside \nforce. For example, if the direction of a bullet is \nthe same as the swing current direction, the swing \nwill be higher up. If the direction are different, the \nbullets may stop the swing.', { fill: '#962D17', font: '28pt Arial' });
    this.addMenuOption('Play ->', function () {
      this.game.state.start("Level3");
    });
  }
};

Phaser.Utils.mixinPrototype(Option3.prototype, mixins);

