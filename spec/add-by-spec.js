(function () {
  window.mocha.setup('bdd');
  var _ = window._;

  describe('window.addBy()', function () {

    context('when pass 5', function () {
      describe('will return a function when passed', function () {
        it('3 will add it with 5', function () {
          var addsByFive = window.addBy(5);
          expect(addsByFive(3)).to.equal(8);
        });

        it('10 will add it with 5', function () {
          var addsByFive = window.addBy(5);
          expect(addsByFive(10)).to.equal(15);
        });
      });
    });

    context('when pass 7', function () {
      describe('will return a function when passed', function () {
        it('3 will add it with 7', function () {
          var addsBySeven = window.addBy(7);
          expect(addsBySeven(3)).to.equal(10);
        });

        it('10 will add it with 7', function () {
          var addsBySeven = window.addBy(7);
          expect(addsBySeven(10)).to.equal(17);
        });
      });
    });

    context('when pass n', function () {
      var n;
      var x;

      beforeEach(function () {
        n = _.random(1, 100);
        x = _.random(101, 200);
      });

      describe('will return a function when passed', function () {
        it('x will add it with n', function () {
          var addsByN = window.addBy(n);
          expect(addsByN(x)).to.equal(x + n);
        });
      });
    });

  });

})();
