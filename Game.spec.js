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

    it("initializes the game", () => {
        //when 
        let gameIntro = game.getIntro()
        //then
        expect(gameIntro).toEqual("Today, Camille the knight is going to fight Eliott the dragon")
    })

    it("set the number of pv of the knigth", () => {
        //when
        let knight_start_pv = knight.getPV()
        knight.setPV(10)
        let knight_new_pv = knight.getPV()
        //then
        expect(knight_start_pv).toEqual(60)
        expect(knight_new_pv).toEqual(10)
    })
    

    it("set the pv of the player after he is being attacked", () => {
        //when
        let knight_start_pv = knight.getPV()
        game.playerIsAttacked()
        let knight_new_pv = knight.getPV()
        //then
        expect(knight_start_pv).toEqual(60)
        expect(knight_new_pv).toEqual(20)
    })

    it("set the pv of the dragon after he is being attacked", () => {
        //when
        let dragon_start_pv = dragon.getPV()
        game.monsterIsAttacked()
        let dragon_new_pv = dragon.getPV()
        //then
        expect(dragon_start_pv).toEqual(100)
        expect(dragon_new_pv).toEqual(70)
    })

    it("return the winner of the game", () => {
        //when
        game.playerIsAttacked()
        game.playerIsAttacked()
        let winner = game.getWinner()
        //then
        expect(winner).toEqual("Eliott is the winner!")
    })

    it("returns the winner of the game", () => {
        //when
        sinon.stub(game, "getWinner").returns("Eliott is the winner!");
        let winner = game.getWinner()
        //then
        expect(winner).toEqual("Eliott is the winner!")
    })

    it("verify if the function getWinner() is called at least once", () => {
        //when
        sinon.stub(dragon, "getPV").returns(0);
        let mock = sinon.mock(game)

        //then
        mock.expects("getWinner").once()

        game.getWinner()

        mock.verify()
       
        
    })

})