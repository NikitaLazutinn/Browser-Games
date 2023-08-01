//var background;
class MediaManger
{
    
    constructor(config)
    {
        this.scene=config.scene;
        this.background=this.scene.sound.add("backgroundMusic",{
            volume:.5,
            loop:true
        });

        emitter.on(G.PLAY_SOUND, this.playSound,this);
        emitter.on(G.MUSIC_CHANGED, this.musicChanged,this);
    }
    musicChanged()
    {
        
        if (this.background)
        {
            console.log("changed");
            if(model.musicOn==false)
            {console.log("Stop");
                this.background.stop();
            }else{
                this.background.play();

            }

        }
    }
    playSound(key){
        
        if(model.soundOn == true){
        var sound = this.scene.sound.add(key);
        sound.play();
        }
    }
    setBackgroundmusic(key){
        if(model.musicOn==true){

       console.log("menager");
        this.background.play(); 

        }
    }
}
