/**
 * @file Parent.js
 * File description. Long description.
 */

MyLib.Parent = {};

/**
 * @fn Parent Parent(String name)
 * @public @memberof Parent
 * Constructor.
 * @param name name.
 */
MyLib.Parent.initialize = function(name) {
    this.name = name;
};
/**
 * @fn void setName(String name)
 * @public @memberof Parent
 * Sets name. Long description.
 * @param name name.
 */
MyLib.Parent.setName = function(name) {
    this.name = name;
};
/**
 * @fn String getName()
 * @public @memberof Parent
 * Returns name. Long description.
 * @return name.
 */
MyLib.Parent.getName = function() {
    return this.name;
};
/**
 * @fn String toString()
 * @public @memberof Parent
 * Returns string representation. Long description.
 * @return string.
 */
MyLib.Parent.toString = function() {
    return 'My name is ' + this.name;
};
/**
 * Parent class short description. Long description.
 * @class Parent
 */
MyLib.Parent = new JS.Class('MyLib.Parent', MyLib.Parent);
