function greeter(person) {
    return 'Hello' + person.firstName + person.lastName + person.tel;
}
var user = {
    firstName: 'zhang',
    lastName: '',
    age: 22,
    tel: '15510002239'
};
user.lastName = 'min';
// user.age = 24
console.log(greeter(user));
