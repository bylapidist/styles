#!/usr/bin/env node
import fs from 'fs-extra';
import { transformThemeToCssVars } from './transform';

import defaultTheme from './themes/light';

const CSS_PATH = './dist/css';

fs.ensureDir(CSS_PATH).then(async () =>
    fs.writeFileSync(
        `${CSS_PATH}/light.css`,
        transformThemeToCssVars(defaultTheme)
    )
);

export * from './types';
export * from './variants';
