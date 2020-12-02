import {requiredField, email,phoneNumber,alphaNumeric} from "./validator/validator";

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
const fieldsData =[
    {placeholder: "Name*", name: "name",validate: [requiredField]},
    {placeholder: "Surname*", name: "surname", validate: [requiredField]},
    {placeholder: "Company", name: "company"},
    {placeholder: "Street*", name: "street",validate: [requiredField]},
    {placeholder: "House*", name: "house",validate: [requiredField,alphaNumeric]},
    {placeholder: "Additional info", name: "additional"},
    {placeholder: "Postcode", name: "postcode",},
    {placeholder: "City", name: "city"},
    {placeholder: "Country", name: "country"},
    {placeholder: "Email", name: "email", validate: [email]},
    {placeholder: "Password", name: "password"},
    {placeholder: "Confirm Password", name: "confirm"},
    {placeholder: "Phone Number", name: "phone",validate: [phoneNumber]},
    {placeholder: "Additional Phone Number", name: "additionalPhone"}
    ];

export {
    getData,
    getTime,
    fieldsData
};