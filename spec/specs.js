describe('roman_translator', function() {
    it("returns the symbol of the number 1", function() {
        expect(roman_translator(1)).to.equal("I");
    });
    it("returns the symbol of the number 4", function() {
        expect(roman_translator(4)).to.equal("IV");
    });
    it("returns the symbol of the number 6", function() {
        expect(roman_translator(6)).to.equal("VI");
    });
    it("returns the symbol of the number 8", function() {
        expect(roman_translator(8)).to.equal("VIII");
    });
    it("returns the symbol of the number 9", function() {
        expect(roman_translator(9)).to.equal("IX");
    });
    it("returns the symbol of the number 12", function() {
        expect(roman_translator(12)).to.equal("XII");
    });
    it("returns the symbol of the number 49", function() {
        expect(roman_translator(49)).to.equal("XLIX");
    });
    it("returns the symbol of the number 50", function() {
        expect(roman_translator(50)).to.equal("L");
    });
    it("returns the symbol of the number 96", function() {
        expect(roman_translator(96)).to.equal("XCVI");
    });
    it("returns the symbol of the number 381", function() {
        expect(roman_translator(381)).to.equal("CCCLXXXI");
    });
    it("returns the symbol of the number 900", function() {
        expect(roman_translator(900)).to.equal("CM");
    });
    it("returns the symbol of the number 3999", function() {
        expect(roman_translator(3999)).to.equal("MMMCMXCIX");
    });
});
