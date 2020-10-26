const Player = require("./Player")
const Dragon = require("./Dragon")
const Game = require("./Game")
var sinon = require('sinon');

let knight;
let dragon;


describe("Game", () => {

    beforeEach(() => {
        //given
        knight = new Player("Camille", 60, 30)
        dragon = new Dragon("Eliott", 100, 40)
        game = new Game(knight, dragon)
    })

    it("When the game starts, you have a small introduction", () => {
        //when 
        const gameIntro = game.getIntro()
        //then
        expect(gameIntro).toEqual("Today, Camille the knight is going to fight Eliott the dragon")
    })
    
    it("When the dragon attacks the knight, the knight loses some pvs", () => {
        //when
        let knight_start_pv = knight.getPV()
        game.playerIsAttacked()
        let knight_new_pv = knight.getPV()
        //then
        expect(knight_start_pv).toEqual(60)
        expect(knight_new_pv).toEqual(20)
    })

    it("When the knight attacks the dragon, the dragon loses some pvs", () => {
        //when
        let dragon_start_pv = dragon.getPV()
        game.monsterIsAttacked()
        let dragon_new_pv = dragon.getPV()
        //then
        expect(dragon_start_pv).toEqual(100)
        expect(dragon_new_pv).toEqual(70)
    })

    it("The game declares a winner when the knight or the dragon is dead", () => {
        //when
        let knight_start_pv = knight.getPV()
        game.playerIsAttacked(knight_start_pv)
        let knight_new_pv = knight.getPV()
        game.playerIsAttacked(knight_new_pv)
        knight_new_pv = knight.getPV()
        //then
        expect(game.playerIsAttacked(knight_new_pv)).toBe("Eliott is the winner!")
    })

    it("When the knight or the dragon quits, the other is the winner by default", () => {
        //when
        sinon.stub(dragon, "getPV").returns(0);
        //then
        expect(game.monsterIsAttacked(dragon.getPV())).toEqual("Camille is the winner!")
    })

    it("When one quits or dies, we have a winner", () => {
        //when
        let mock = sinon.mock(game)
        //then
        mock.expects("getWinner").once() 
    })

})