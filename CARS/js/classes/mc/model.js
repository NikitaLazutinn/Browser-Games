class Model
{
    constructor()
    {
        this._score=0; 
        this.soundOn=true;
        this._musicOn=false;
        this.gameOver=false;
        this.speed=1;
    }
    set musicOn(val)
    {
        this._musicOn=val;
        emitter.emit(G.MUSIC_CHANGED);
       

    }
    get musicOn()
    {
        return this._musicOn;

    }
    set score(val)
    {
        this._score=val;
       
        emitter.emit(G.SCORE_UPDATED);
    }
    get score()
    {
        return this._score;
    }
}