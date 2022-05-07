module.exports = {
    computeFinal: function(a,b,c) { 
        var finalGrade = Math.round((a + b + c).toFixed(1));
        let letterGrade;
        if (finalGrade > 93)
            letterGrade = 'A'
        else if (finalGrade >= 90 && finalGrade <= 92)
            letterGrade = 'A-'
        else if (finalGrade >= 87 && finalGrade <= 89)
            letterGrade = 'B+'
        else if (finalGrade >= 83 && finalGrade <= 86)
            letterGrade = 'B'
        else if (finalGrade >= 80 && finalGrade <= 82)
            letterGrade = 'B-'
        else if (finalGrade >= 77 && finalGrade <= 79)
            letterGrade = 'C+'
        else if (finalGrade >= 73 && finalGrade <= 76)
            letterGrade = 'C'
        else if (finalGrade >= 70 && finalGrade <= 72)
            letterGrade = 'C-'
        else if (finalGrade >= 67 && finalGrade <= 69)
            letterGrade = 'D+'
        else if (finalGrade >= 63 && finalGrade <= 66)
            letterGrade = 'D'
        else if (finalGrade >= 60 && finalGrade <= 62)
            letterGrade = 'D-'
        else if (finalGrade < 60)
            letterGrade = 'F'
        else
            letterGrade = 'Error'

        return letterGrade
    }
};