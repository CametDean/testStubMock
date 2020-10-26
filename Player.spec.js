const Player = require("./Player")
let player1;

describe("What a Player can do", () => {

    beforeEach(() => {
        //given
        player1 = new Player("Camille", 50, 30)
    })

    it("return the player's name", () => {
        //when 
        let player1Name = player1.getName()
        //then
        expect(player1Name).toEqual("Camille")
    })

    it("return the player's PV", () => {
        //when 
        let player1PV = player1.getPV()
        //then
        expect(player1PV).toEqual(50)
    })

    it("return the player's damages", () => {
        //when 
        let player1Damages = player1.getDamages()
        //then
        expect(player1Damages).toEqual(30)
    })
    

})