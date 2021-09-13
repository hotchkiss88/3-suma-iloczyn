function mF(x) {


    let resultConjunction = 1;
    let resultAdd = 0;
    for (i = 0; i < x.length; i++) {

        resultConjunction = resultConjunction * x[i];

        resultAdd = resultAdd + x[i];
    }
    console.log('Iloczyn wynosi: ' +
        resultConjunction + ' a suma: ' + resultAdd);
};

mF([1, 2, 3, 4, 5, 6]);

/* function mF(table = [1, 2, 3, 4, 5, 6]) {
    let resultConjunction = 1;
    let resultAdd = 0;
    table.forEach(function(x, i) {
        resultConjunction = resultConjunction * x;
        resultAdd = resultAdd + x;
    });
    console.log(resultAdd, resultConjunction);
}
mF(); */