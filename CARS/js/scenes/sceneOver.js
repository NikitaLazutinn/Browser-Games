class SceneOver extends Phaser.Scene {
    constructor() {
        super('SceneOver');
    }
    preload()
    {
        this.load.image("button1", "images/ui/buttons/2/1.png");
    	this.load.image("title", "images/title.png");
    }
    create() {
        this.backImage=this.add.image(game.config.width/2,game.config.height/2,"titleBack");

        this.AlignGrid=new AlignGrid({rows:11,cols:11,scene:this});
        //this.AlignGrid.showNumbers();

        var title=this.add.image(0,0,'title');
        Align.scaleToGameW(title,.8);
        this.AlignGrid.placeAtIndex(38,title);

        var btnStart=new FlatButton({scene:this,key:'button1', text: 'Play Again!', event: 'start_game'});
        this.AlignGrid.placeAtIndex(93,btnStart);

        emitter.on('start_game', this.startGame, this);
    }
    startGame()
    {
        this.scene.start('SceneMain');
    }
    update() {}
}