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