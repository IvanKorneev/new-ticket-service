let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const getData = (time) => {
    const date = new Date(time);
    const start = `${date.getDate()} ${months[date.getMonth() - 1]} ${date.getFullYear()}`;
    return start

};

const getTime = (time) => {
    const date = new Date(time);
    const hours = `${date.getHours()}:${getZero(date.getMinutes())}`;
    return hours
};

const getZero = (num) => {
    if (num === 0) {
        return '0' + num;
    } else {
        return num;
    }
};

export {
    getData,
    getTime
};