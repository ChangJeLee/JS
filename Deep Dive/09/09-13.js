function isFalsy(v) {
    return v;
}

function isTruthy(v) {
    return !v;
}

isFalsy(false);
isFalsy(undefined);
isFalsy(NaN);
isFalsy(0);
isFalsy('');
isFalsy(null);


isTruthy(true);
isTruthy('0');
isTruthy({});
isTruthy([]);


