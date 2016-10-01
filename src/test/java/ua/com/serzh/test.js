describe("pow", function() {

    it("при возведении 3 в 4ю степень равен 81", function() {
        assert.equal(pow(3, 4), 81);
    });


    function makeTest(x) {
        var expected = x * x * x;
        it("при возведении " + x + " в степень 3 результат: " + expected, function() {
            assert.equal(pow(x, 3), expected);
        });
    }

    for (var x = 1; x <= 5; x++) {
        makeTest(x);
    }

});