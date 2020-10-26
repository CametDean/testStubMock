const Game = class Game {
    constructor(player, monster){
        this.player = player,
        this.monster = monster
    }

    getIntro(){
        return `Today, ${this.player.name} the knight is going to fight ${this.monster.name} the dragon`
    }

    playerIsAttacked(playerPv){
        if(playerPv <= 0){
            return this.getWinner(this.monster.name)
        }else{
           return this.player.pv -= this.monster.damages     
        }
        
    }

    monsterIsAttacked(monsterPv){
        if(monsterPv <= 0){
            return this.getWinner(this.player.name)
        }
        return this.monster.pv -= this.player.damages
    }

    getWinner(name){
        return `${name} is the winner!`
    }
}

module.exports = Game