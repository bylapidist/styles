import { filterToProperties } from './index';

test('it filters to properties', () => {
    const values = filterToProperties([
        {
            styleName: 'borderStyle',
            propertyName: 'border-style',
            value: 'solid'
        },
        {
            styleName: 'borderRightStyle',
            propertyName: 'border-right-style',
            value: 'solid'
        }
    ]);

    expect(values).toEqual('border-style: solid;border-right-style: solid;');
});
