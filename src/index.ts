#!/usr/bin/env node
import fs from 'fs-extra';
import { transformThemeToCssVars } from './transform';

import lightTheme from './themes/light';
import darkTheme from './themes/dark';

const CSS_PATH = './dist/css';

const themes = [
    {
        name: 'light',
        theme: lightTheme
    },
    {
        name: 'dark',
        theme: darkTheme
    }
];

fs.ensureDir(CSS_PATH).then(async () =>
    themes.forEach(({ name, theme }) => {
        fs.writeFileSync(
            `${CSS_PATH}/${name}.css`,
            transformThemeToCssVars(name, theme)
        );
    })
);

export * from './types';
export * from './variants';
