
function start(){

  var numSubjects = parseInt(prompt("How many subjects do you take?"));

  var marks = [];
  var grades = [];
  var totalMarks = 0;

  for (var i = 1; i <= numSubjects; i++) {
      var mark = parseInt(prompt("Enter marks for Subject " + i + ":"));
      marks.push(mark);
      grades.push(getGrade(mark));
      totalMarks += mark;
  }

  var averageMarks = totalMarks / numSubjects;
  var averageGrade = getGrade(averageMarks);

  var resultMessage = "Results:\n";
  for (var i = 0; i < numSubjects; i++) {
      resultMessage += "Subject " + (i + 1) + ": " + marks[i] + " marks - Grade: " + grades[i] + "\n";
  }
  resultMessage += "Average Marks: " + averageMarks.toFixed(2) + "\n";
  resultMessage += "Average Grade: " + averageGrade;

  alert(resultMessage);

}

function getGrade(mark) {
  if (mark >= 90) return 'A';
  if (mark >= 80) return 'B';
  if (mark >= 70) return 'C';
  if (mark >= 60) return 'D';
  if (mark >= 50) return 'E';
  return 'F';
}
