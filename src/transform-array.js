module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-prev':
                if (res.length > 0) res.pop();
                break;
            case '--discard-next':
                if (res.length < arr.length - 1) i++;
                break;
            case '--double-prev':
                if (res.length > 0) res.push(arr[i - 1]);
                break;
            case '--double-next':
                if (res.length < arr.length - 1) res.push(arr[i + 1]);
                break;
            default:
                res.push(arr[i]);
        }
    }
    return res
};
