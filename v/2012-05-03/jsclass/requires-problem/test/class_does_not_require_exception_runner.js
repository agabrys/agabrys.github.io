var sourceClassPath = '/src';
var testClassPath = '/test/tests';

JS.Packages(function() {
    var ROOT = ( typeof JS.ENV.ROOT === 'undefined' ? '.' : JS.ENV.ROOT);

    this.autoload(/(.*)Test$/, {
        from: ROOT + testClassPath,
        require: 'GA.$1'
    });

    this.file(ROOT + sourceClassPath + '/init.js').provides('GA');
    this.file(ROOT + sourceClassPath + '/Class.js').provides('GA.Class').requires('GA', 'JS.Class');
    this.file(ROOT + sourceClassPath + '/Exception.js').provides('GA.Exception').requires('GA.Class');
});

JS.require('JS.Test', function() {
    var tests = [];
    tests.push('ClassTest');

    tests.push(JS.Test.method('autorun'));
    JS.require.apply(JS, tests);
});
