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
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUsers,info)=>{
            newUsers[info] = users[info][idx];
            return newUsers;
        },{});
        
        return userInfo;
    }
}

module.exports = UserStorage;