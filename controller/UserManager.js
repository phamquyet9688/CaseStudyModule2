"use strict";
exports.__esModule = true;
exports.UserManager = void 0;
var User_1 = require("../model/User");
var readlineSync = require('readline-sync');
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.userList = [];
        this.userList.push(new User_1.User('phamquyet', '123456', 0));
        this.userList.push(new User_1.User('phamquyet1', '234567', 0));
        this.userList.push(new User_1.User('phamquyet2', '345678', 1));
        this.userList.push(new User_1.User('phamquyet3', '456789', 1));
        this.userList.push(new User_1.User('phamquyet4', '5678901', 0));
    }
    UserManager.prototype.register = function () {
        var flag = true;
        var newUserName;
        var newPassword;
        while (flag) {
            newUserName = readlineSync.question("Enter username: ");
            if (!newUserName) {
                console.log("Username cann't be empty!");
            }
            else {
                flag = false;
            }
        }
        while (!flag) {
            newPassword = readlineSync.question("Enter password: ");
            if (!this.validatePassword(newPassword)) {
                console.log("Password is at least 6 characters and it has to contain lower characters or Upper characters number! ");
            }
            else {
                flag = true;
            }
        }
        this.userList.push(newUserName, newPassword);
    };
    UserManager.prototype.login = function (username, password) {
        var index = -1;
        this.userList.map(function (user) {
            if (user.getUsername() === username && user.getPassword() === password) {
                index = user.getRole();
                return;
            }
        });
        return index;
    };
    UserManager.prototype.validatePassword = function (password) {
        var regex = /^[A-Za-z0-9]{6,}$/;
        return regex.test(password);
    };
    return UserManager;
}());
exports.UserManager = UserManager;
