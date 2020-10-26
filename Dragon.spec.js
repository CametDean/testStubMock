const Dragon = require("./Dragon")
let dragon;

describe("What a Dragon can do", () => {

    beforeEach(() => {
        //given
        dragon = new Dragon("Eliott", 100, 40)
    })

    it("shows us the dragon's name", () => {
        //when 
        let dragonName = dragon.getName()
        //then
        expect(dragonName).toEqual("Eliott")
    })

    it("shows us the dragon's PV", () => {
        //when 
        let dragonPV = dragon.getPV()
        //then
        expect(dragonPV).toEqual(100)
    })

    it("shows us the dragon's damages", () => {
        //when 
        let dragonDamages = dragon.getDamages()
        //then
        expect(dragonDamages).toEqual(40)
    })


})