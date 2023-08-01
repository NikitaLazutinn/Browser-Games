class Model
{
    constructor()
    {
        console.log("K_model");
        this._score=0; 
        this.soundOn=true;
        this._musicOn=true;
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
        console.log("score upd");
        emitter.emit(G.SCORE_UPDATED);
    }
    get score()
    {
        return this._score;
    }
}