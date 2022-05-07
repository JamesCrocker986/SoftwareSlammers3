//computeHW Test Cases using Mocha

var assert = require('assert');
const computeHW = require('./computeHW.js');

describe('ComputeHW Test Suite', function () {
  
  describe('computeHW 1', function () {
    it('Input of 100,100,100 should return 20', function () {
      assert.equal(computeHW.computeHW(100,100,100), 20);
    });
  });

  describe('computeHW 2', function () {
    it('Input of 100,90,80 should return 18', function () {
      assert.equal(computeHW.computeHW(100,90,80), 18);
    });
  });

  describe('computeHW 3', function () {
    it('Input of 100,75,50 should return 15', function () {
      assert.equal(computeHW.computeHW(100,75,50), 15);
    });
  });

  describe('computeHW 4', function () {
    it('Input of 100,85,80 should return 17.6666667', function () {
      assert.equal(computeHW.computeHW(100,85,80), 17.6666667);
    });
  });

  describe('computeHW 5', function () {
    it('Input of 100,84,84 should return 17.866666666666667', function () {
      assert.equal(computeHW.computeHW(100,84,84), 17.866666666666667);
    });
  });

  describe('computeHW 6', function () {
    it('Input of 75,75,75 should return 15', function () {
      assert.equal(computeHW.computeHW(75,75,75), 15);
    });
  });

  describe('computeHW 7', function () {
    it('Input of 50.5,50.5,50.5 should return 10.1', function () {
      assert.equal(computeHW.computeHW(50.5,50.5,50.5), 10.1);
    });
  });

  describe('computeHW 8', function () {
    it('Input of 52,74,73 should return 13.266666666666666', function () {
      assert.equal(computeHW.computeHW(52,74,73), 13.266666666666666);
    });
  });

  describe('computeHW 9', function () {
    it('Input of 100,97,98 should return 19.666666666666668', function () {
      assert.equal(computeHW.computeHW(100,97,98), 19.666666666666668);
    });
  });

  describe('computeHW 10', function () {
    it('Input of 100,67,80 should return 16.466666666666665', function () {
      assert.equal(computeHW.computeHW(100,67,80), 16.466666666666665);
    });
  });

  describe('computeHW 11', function () {
    it('Input of 100,40,47 should return 12.466666666666669', function () {
      assert.equal(computeHW.computeHW(100,40,47), 12.466666666666669);
    });
  });

  describe('computeHW 12', function () {
    it('Input of 90,90,82 should return 17.466666666666665', function () {
      assert.equal(computeHW.computeHW(90,90,82), 17.466666666666665);
    });
  });
  
  
  describe('computeHW 13', function () {
    it('Input of 0,54,83 should return 9.133', function () {
      assert.equal(computeHW.computeHW(0,54,83), 9.133);
    });
  });


  describe('computeHW 14', function () {
    it('Input of 100,82,83 should return 17.667', function () {
      assert.equal(computeHW.computeHW(100,82,83), 17.667);
    });
  });

}); //End of ComputeHW Test Suite
