var Level2 = function(game) {
  var displayed;
  var caption;
  var hammers;
  var usingHammer;
  var hammerCount;
  var starNumber;
};

Level2.prototype = {

  
  preload:function(){
    this.game.load.image('hammer', 'assets/img/bunny.png');
    this.game.load.image("back","assets/img/background.png");
    this.game.load.image("rope","assets/img/rope.png");
    this.game.load.image('base','assets/img/base.png');
    this.game.load.image('cannon','assets/img/cannon.png');
    this.game.load.image('star','assets/img/star.png');
    this.game.load.audio("toggle","assets/sounds/send.mp3");
    this.game.load.audio("eat","assets/sounds/succeed.mp3");
  },

  create:function(){
    this.displayed = false;
    this.hammers = [];
    this.usingHammer = true;
    this.hammerCount = 10;
    this.starNumber = 2;
    this.stage.disableVisibilityChange = false;
    
    var back = this.game.add.sprite(0,0,"back");
    var base = this.game.add.sprite(500,0,'base');
    var cannon = this.game.add.sprite(0,350,'cannon');
    
    // Enable Box2D physics
    this.game.physics.startSystem(Phaser.Physics.BOX2D);
    this.game.physics.box2d.debugDraw.joints = true;
    this.game.physics.box2d.gravity.y = 1000;
    this.game.physics.box2d.restitution = 0;
    

    var swingBody = new Phaser.Physics.Box2D.Body(this.game, null, 0, 0, 0);
    
    var rope = this.game.add.sprite(600,200,'rope');
    this.game.physics.box2d.enable(rope);
    rope.body.dynamic = true;
    rope.body.setPolygon([-5, -250, -5, 250, 5, 250, 5, -250 ],0,3);
    
    this.game.physics.box2d.revoluteJoint(swingBody, rope, 600, 50, 0, -250);
    
    var star = this.game.add.sprite(900, 300,'star');
    this.game.physics.box2d.enable(star);
    star.body.kinematic = true;
    star.body.restitution = 0.02;

    star.body.setBodyContactCallback(rope.body, this.killStar,this);
    
    var stara = this.game.add.sprite(250, 300,'star');
    this.game.physics.box2d.enable(stara);
    stara.body.kinematic = true;
    stara.body.restitution = 0.02;

    stara.body.setBodyContactCallback(rope.body, this.killStar,this);
    
    
    this.caption = this.add.text(20, 390, '', { fill: '#ffffff', font: '20pt Arial' });
    
    this.updateCaption();
    
    this.game.input.onUp.add( this.toggleHammer, this );
    
  },
  addMenuOption: function(text, callback) {
    var optionStyle = { font: '30pt TheMinion', fill: '#F4A460', align: 'left', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};
    var txt = this.game.add.text(game.world.centerX, 400, text, optionStyle);
    txt.anchor.setTo(0.5);
    txt.stroke = "rgba(0,0,0,0)";
    txt.strokeThickness = 4;
    var onOver = function (target) {
      target.fill = "#F4A460";
      target.stroke = "rgba(200,200,200,0.5)";
      txt.useHandCursor = true;
    };
    var onOut = function (target) {
      target.fill = "#FF7F50";
      target.stroke = "rgba(0,0,0,0)";
      txt.useHandCursor = false;
    };
    //txt.useHandCursor = true;
    txt.inputEnabled = true;
    txt.events.onInputUp.add(callback, this);
    txt.events.onInputOver.add(onOver, this);
    txt.events.onInputOut.add(onOut, this);
  },
  update:function(){

    for (var i = this.hammers.length -1; i > -1; i--){
        var hammer = this.hammers[i];
        if (hammer.x < 0 || hammer.x > 1200 || hammer.y < 80 || hammer.y > 700){
            hammer.destroy();
            this.hammers.splice(i,1);
        }
    }
    if(this.starNumber <= 0 && !this.displayed){
      this.displayed = true;
      this.addMenuOption(10 + this.hammerCount*10 + ' Points', function (e){
        console.log("this.game.state.start");
        this.game.state.start("Level1");
      });
    }
    if(this.hammerCount <= 0 && this.starNumber > 0 && !this.displayed){
      this.displayed = true;
      this.addMenuOption('The hammer has used up \n     check the knowledge  \n         play again', function (e){
        console.log("this.game.state.start");
        this.game.state.start("Level1");
      });
    }
  },
  toggleHammer:function(){
    if(this.starNumber > 0){
      if (this.hammerCount > 0)
      {
          this.fireHammer();
          this.hammerCount--;
      }
      this.updateCaption();
      var send = this.game.add.audio('toggle');
      send.play();
    }
  },
  updateCaption:function(){
      this.caption.text = this.hammerCount;
  },
  fireHammer:function(){
  
      var hammer = this.game.add.sprite(70, 400, 'hammer');
      this.game.physics.box2d.enable(hammer);
      hammer.body.setCircle(5);
      
      hammer.body.velocity.x = 3000 + 1000 * Math.random();
      hammer.body.velocity.y = -500 + 1000 * Math.random();
  
      if (this.usingHammer){
          hammer.body.bullet = true;
      }    
  
      this.hammers.push(hammer);
  },
  killStar:function(body1,body2,fixture1,fixture2,begin) {
      body1.kill();
      var sprite = body1.sprite;
      sprite.kill();
      var eat = this.game.add.audio('eat');
      eat.play();
      if (begin)
        this.starNumber--;
  }
}


