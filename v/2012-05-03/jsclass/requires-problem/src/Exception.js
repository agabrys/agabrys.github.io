/**
 * @file src/Exception.js
 * Contains GA::Exception class.
 */

/**
 * @class GA::Exception
 * @extends GA::Class
 * Exception class.
 */
// XXX delete when doxygen correct https://bugzilla.gnome.org/show_bug.cgi?id=674983
/**
 * @fn static Class makeClass(String name, Class parent, Object methods)
 * @private @memberof GA::Exception
 */
/**
 * @fn static Class makeClass(String name, Object methods)
 * @private @memberof GA::Exception
 */
GA.Exception = {};

/**
 * @fn Exception Exception(String message, Exception cause)
 * @public @memberof GA::Exception
 * Constructor.
 * @param message the detail message.
 * @param cause the cause.
 */
/**
 * @fn Exception Exception(String message)
 * @public @memberof GA::Exception
 * Constructor.
 * @param message the detail message.
 */
/**
 * @fn Exception Exception(Exception cause)
 * @public @memberof GA::Exception
 * Constructor. Message will be equal to cause's detail message.
 * @param cause the cause.
 */
GA.Exception.initialize = function(messageOrCause, cause) {
    if( typeof messageOrCause === 'string') {
        this._message = messageOrCause;
        if( typeof cause !== 'undefined') {
            this._cause = cause;
        } else {
            this._cause = null;
        }
    } else {
        this._message = messageOrCause.getMessage();
        this._cause = messageOrCause;
    }
};
/**
 * @fn String getMessage()
 * @public @memberof GA::Exception
 * Returns detial message.
 * @return detail message.
 */
GA.Exception.getMessage = function() {
    return this._message;
};
/**
 * @fn Exception getCause()
 * @public @memberof GA::Exception
 * Returns cause.
 * @return cause.
 */
GA.Exception.getCause = function() {
    return this._cause;
};
/**
 * @fn boolean hasCause()
 * @public @memberof GA::Exception
 * Tests if cause has been specified.
 * @return true if cause has been specified, otherwise false.
 */
GA.Exception.hasCause = function() {
    return this._cause !== null;
};
/**
 * @fn String toString()
 * @public @memberof GA::Exception
 * Returns detail message.
 * @return detail message.
 * @see getMessage()
 */
GA.Exception.toString = function() {
    return this.getMessage();
};
/**
 * @fn String getStackTraceString()
 * @public @memberof GA::Exception
 * Returns text representation of stack trace.
 * @return text representation of stack trace.
 */
GA.Exception.getStackTraceString = function() {
    var stackTrace = '';
    var exception = this;
    while(exception !== null) {
        stackTrace += exception.klass.toString() + ': ' + exception.getMessage() + '\n';
        exception = exception.getCause();
    }
    return stackTrace;
};

GA.Exception = GA.Class.makeClass('GA.Exception', GA.Exception);
