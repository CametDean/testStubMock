const Player = class Player {
    constructor(name, pv, damages){
        this.name = name,
        this.pv = pv,
        this.damages = damages
    }

    getName(){
        return this.name
    }

    getPV(){
        return this.pv
    }

    getDamages(){
        return this.damages
    }

}

module.exports = Player