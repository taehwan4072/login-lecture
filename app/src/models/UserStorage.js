"use strict";

class UserStorage{
    static #users = {
        id : ["taehwan", "minjoo"],
        psword : ["1234","1234"],
        name: ["태환","민주"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,fields) => {
            if(users.hasOwnProperty(fields)){
                newUsers[fields] = users[fields];
            }
            return newUsers;
        },{});
        return newUsers;
    }
}

module.exports = UserStorage;