/**
 * @file Child.js
 * File description. Long description.
 */

MyLib.Child = {};

/**
 * @fn Child Child(String name, int age)
 * @public @memberof Child
 * Constructor.
 * @param name name.
 * @param age age.
 */
MyLib.Child.initialize = function(name, age) {
    this.callSuper(name);
    this.age = age;
};
/**
 * @fn void setAge(int age)
 * @public @memberof Child
 * Sets age. Long description.
 * @param age age.
 */
MyLib.Child.setAge = function(age) {
    this.age = age;
};
/**
 * @fn int getAge()
 * @public @memberof Child
 * Returns age. Long description.
 * @return age.
 */
MyLib.Child.getAge = function() {
    return this.age;
};
/**
 * @fn String toString()
 * @public @memberof Child
 */
MyLib.Child.toString = function() {
    return this.callSuper() + ' and age is equal to ' + this.age;
};
/**
 * Child class short description. Long description.
 * @class Child
 * @extends Parent
 */
MyLib.Child = new JS.Class('MyLib.Child', MyLib.Parent, MyLib.Child);
