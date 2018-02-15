import {camelCase, capitalize} from './helpers';

describe('Testing camelCase function', () => {
    test('foo bar becomes fooBar', ()=>{
        expect(camelCase('foo bar')).toBe('fooBar');
    });
    test('FOO BAR becomes fooBar', ()=>{
        expect(camelCase('foo bar')).toBe('fooBar');
    });
    test('x nN foo bar becomes xNnFooBar"', ()=>{
        expect(camelCase('x nN foo bar')).toBe('xNnFooBar');
    });
    test('!--foo-¿?-bar--121-**% bar becomes fooBar121', ()=>{
        expect(camelCase('!--foo-¿?-bar--121-**%')).toBe('fooBar121');
    });
});