 const getData = (time) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date(time);
    const start = date.getDate() + ' ' + months[date.getMonth() - 1] + ' ' + date.getFullYear();
    return start
};

export {
    getData
};