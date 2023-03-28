import { Theme } from '../types';
import { COLORS, ELEVATIONS } from '../variants';
import lightTheme from './light';

const theme: Theme = {
    ...lightTheme,
    'color-core': {
        variants: [...Object.values(COLORS)],
        values: ['#ffffff', '#f2f2f2', '#000000', '#101010'].reverse()
    },
    'color-primary': {
        variants: [...Object.values(COLORS)],
        values: ['#9bfff8', '#4ad6d8', '#17a3a5', '#135f61'].reverse()
    },
    'color-secondary': {
        variants: [...Object.values(COLORS)],
        values: ['#fdffb5', '#fff08f', '#ebc764', '#937032'].reverse()
    },
    'color-tertiary': {
        variants: [...Object.values(COLORS)],
        values: ['#e2f7c9', '#a7d981', '#72af5d', '#548230'].reverse()
    },
    'color-grey': {
        variants: [...Object.values(COLORS)],
        values: ['#fafafa', '#d4d4d4', '#73748b', '#292b3e'].reverse()
    },
    'color-danger': {
        variants: [...Object.values(COLORS)],
        values: ['#ff848B', '#e75158', '#b41e25', '#810000'].reverse()
    },
    elevation: {
        variants: [...Object.values(ELEVATIONS)],
        values: [
            'none',
            '0 2px 3px rgba(255, 255, 255, 0.1)',
            '0 2px 4px rgba(255, 255, 255, 0.12), 0 10px 13px rgba(0, 0, 0, 0.02), 0 -10px 13px rgba(255, 255, 255, 0.02)',
            '0 2px 5px rgba(255, 255, 255, 0.16), -10px 15px 15px rgba(0, 0, 0, 0.03), 10px 0px 15px rgba(255, 255, 255, 0.03)',
            '0 2px 6px rgba(255, 255, 255, 0.18), -15px 20px 20px rgba(0, 0, 0, 0.04), 15px -5px 20px rgba(255, 0255, 255, 0.04)'
        ]
    }
};

export default theme;
