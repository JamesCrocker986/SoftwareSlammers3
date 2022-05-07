'use strict';

const computeHW = require('../computeHW');
const computeExam = require( '../computeExam' );
const computeFinal = require( '../computeFinal' );

var tests = 
[
  {
    id: 'Homework 1',
    grade: 0
  },
  {
    id: 'Homework 2',
    grade: 0
  },
  {
    id: 'Homework 3',
    grade: 0
  },
  {
    id: 'Exam 1',
    grade: 0
  },
  {
    id: 'Exam 2',
    grade: 0
  }
];

var proofofMath = 
[
  {
    id: 'Total Weighted Homework Grade',
    grade: 0
  },
  {
    id: 'Total Weighted Exam 1 Grade',
    grade: 0
  },
  {
    id: 'Total Weighted Exam 2 Grade',
    grade: 0
  },
  {
    id: 'Numeric Grade',
    grade: 0
  }
];

var letterGrade = 
[
  {
    id: 'Letter Grade',
    grade: 'F'
  }
];


exports.showtestResults = ( req, res ) => {
  res.render( 'testResults', {
    testInfo: tests,
    proofofmathInfo: proofofMath,
    letterGrade: letterGrade
  } );
};

exports.showaddTest = ( req, res ) => {
  res.render( 'addTest' , {
    testInfo: tests,
    flag: ""
  } );
};

exports.postedaddtestForm = ( req, res ) => {
  var q = 0;
  for(var key in req.body) 
  {
      if (req.body[key] < 0 || req.body[key] > 100)
      {
        res.render( 'addTest', {
          testInfo: tests,
          flag: "Your inputs must be between 0 and 100."
        } );
        return 1;
      }
      tests[q].grade = req.body[key];
      q++;
  }
  for (var i = 0; i < 4; i++)
  {
    if (i == 0)
    {
      proofofMath[i].grade = computeHW.computeHW(1*tests[0].grade, 1*tests[1].grade, 1*tests[2].grade);
    }
    if (i == 3)
    {
      proofofMath[i].grade = Math.round(1*proofofMath[0].grade + 1*proofofMath[1].grade + 1*proofofMath[2].grade.toFixed(1));
    }
    else if (i == 1 || i == 2)
    {
      proofofMath[i].grade = computeExam.computeExam(1*tests[i+2].grade);
    }
  }
  letterGrade[0].grade = computeFinal.computeFinal(1*proofofMath[0].grade, 1*proofofMath[1].grade, 1*proofofMath[2].grade);
  res.render( 'testResults', {
    testInfo: tests,
    proofofmathInfo: proofofMath,
    letterGrade: letterGrade
  } );
};
