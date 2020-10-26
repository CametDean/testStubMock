const Game = class Game {
    constructor(player, monster){
        this.player = player,
        this.monster = monster
    }

    getIntro(){
        return "Today, " + this.player.name + " the knight is going to fight " + this.monster.name + " the dragon"
    }

    playerIsAttacked(){
        return this.player.pv -= this.monster.damages    
    }

    monsterIsAttacked(){
        return this.monster.pv -= this.player.damages
    }

    getWinner(){
        if(this.player.pv <= 0){
            return this.monster.name + " is the winner!"
        }
        return this.player.name + " is the winner!"
    }
}

module.exports = Game