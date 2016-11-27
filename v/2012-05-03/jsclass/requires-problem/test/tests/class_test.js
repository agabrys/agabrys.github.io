JS.ENV.ClassTest = JS.Test.describe('GA.Class', function() {

    this.it('makeClass_with_correct_parent', function() {
        var Parent = GA.Class.makeClass('Parent', {});
        try {
            var Child = GA.Class.makeClass('Child', Parent, {});
            this.assert(true, 'OK!');
        } catch (exception) {
            this.assert( typeof exception.isA === 'function', 'Exception has not got isA method');
            this.assert(exception.isA(GA.Exception));
            this.assert(false, exception.toString());
        }
    });

    this.it('makeClass_with_null_parent', function() {
        try {
            var Child = GA.Class.makeClass('Child', null, {});
            this.assert(false, 'makeClass method should throw exception!');
        } catch (exception) {
            this.assert( typeof exception.isA === 'function', 'Exception has not got isA method');
            this.assert(exception.isA(GA.Exception));
            this.assert(true, exception.toString());
        }
    });
});
