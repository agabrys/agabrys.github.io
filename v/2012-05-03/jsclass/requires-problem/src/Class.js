/**
 * @file src/Class.js
 * Contains GA::Class class.
 */

/**
 * @class GA::Class
 * Implements methods to create new classes.
 */
GA.Class = {};

/**
 * @fn static Class makeClass(String name, Class parent, Object methods)
 * @public @memberof GA::Class
 * Creates a new class which is a subclass of parent.
 * @param name class full name (with namespaces).
 * @param parent parent class.
 * @param methods object which contains class methods.
 * @return a new class which is a subclass of parent.
 * @throws Exception if parent class is equal to null.
 */
/**
 * @fn static Class makeClass(String name, Object methods)
 * @public @memberof GA::Class
 * Creates a new class.
 * @param name class full name (with namespaces).
 * @param methods object which contains class methods.
 * @return a new class.
 * @throws Exception if parent class is equal to null.
 */
GA.Class.makeClass = function() {
    var name = arguments[0];
    var parent, methods;
    if(arguments.length === 3) {
        parent = arguments[1];
        if(parent === null) {
            throw new GA.Exception('Parent class cannot be null!');
        }
        methods = arguments[2];
        return new JS.Class(name, parent, methods);
    } else {
        methods = arguments[1];
        return new JS.Class(name, methods);
    }
};
