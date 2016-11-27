/**
 * @file src/sample.js
 * Sample code.
 */

/**
 * @class Parent
 * Parent class.
 */
var Parent = {};

/**
 * @fn Parent Parent(String name)
 * @public @memberof Parent
 * Constructor.
 * @param name name.
 */
Parent.initialize = function(name) {
    this._name = name;
};
/**
 * @fn String getName()
 * @public @memberof Parent
 * Returns name.
 * @return name.
 */
Parent.getName = function() {
    return this._name;
};
// Creates Parent class
Parent = new JS.Class(Parent);

/**
 * @class Child
 * @extends Parent
 * Child class.
 */
var Child = {};
/**
 * @fn Child Child(String name)
 * @public @memberof Child
 * Constructor.
 * @param name name.
 */
Child.initialize = function(name) {
    this.callSuper(name);
};
// Creates Child class
Child = new JS.Class(Parent, Child);

/**
 * @fn String staticMethod(Parent obj)
 * @public @memberof Parent
 * Creates text "My name is $name", where $name is equal obj.getName().
 * This method is static and should be visible only at Parent documentation.
 * @return text "My name is $name", where $name is equal obj.getName().
 */
Parent.staticMethod = function(obj) {
    return 'My name is ' + obj.getName();
};
/**
 * @fn show()
 * Run example and show result in alert dialog.
 */
function show() {
    var parentObj = new Parent('parent');
    var childObj = new Child('child');
    var string = 'Prints objects names:\n';
    string += 'Parent name: ' + parentObj.getName() + '\n';
    string += 'Child name: ' + childObj.getName() + '\n';
    string += '\nTests if staticMethod has been defined:\n';
    string += 'Parent.staticMethod is ' + ( typeof Parent.staticMethod === 'function' ? '' : 'not ') + 'defined\n';
    string += 'Child.staticMethod is ' + ( typeof Child.staticMethod === 'function' ? '' : 'not ') + 'defined\n';
    string += '\nUse Parent.staticMethod:\n';
    string += Parent.staticMethod(parentObj) + '\n';
    string += Parent.staticMethod(childObj) + '\n';
    alert(string);
}