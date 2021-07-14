var nQueens = function(n) {
  var totalSolutions = 0;
  var allOnes = Math.pow(2, n) - 1;

  var nextRow = function(leftDiagnal, column, rightDiagnal) {
    var bitStore;
    var bit;
    if (column === allOnes) {
      totalSolutions++;
    }
    bitStore = ~(leftDiagnal | column | rightDiagnal) & allOnes;
    while (bitStore !== 0) {
      bit = bitStore & (bitStore * -1);
      bitStore = bitStore - bit;
      nextRow((leftDiagnal|bit) << 1, column|bit, (rightDiagnal|bit) >> 1);
    }
  }

  nextRow(0, 0, 0);
  console.log(`There are ${totalSolutions} solutions for ${n} Queens`);
}

for (var i = 1; i <= 15; i++) {
  nQueens(i);
}