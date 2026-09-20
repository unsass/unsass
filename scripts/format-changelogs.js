// ============================================================================================= //
//                                      FORMAT CHANGELOGS                                        //
// ============================================================================================= //

import fs from 'fs';
import path from 'path';

/**
 * Lerna hardcodes the changelog header and escapes some characters in the commit subjects.
 * This script runs from the root `version` lifecycle, before the release commit, and rewrites every package
 * `CHANGELOG.md` to the layout used by `semantic-release` on the other UnSass libraries.
 */

const PACKAGES_DIR = 'packages';

const HEADER = [
    '# Changelog',
    '',
    'All notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.'
].join('\n');

const LERNA_HEADER = /^# Change Log\n\nAll notable changes to this project will be documented in this file\.\nSee \[Conventional Commits\]\(https:\/\/conventionalcommits\.org\) for commit guidelines\.\n/;

// Characters escaped by Handlebars in the generated entries. `&amp;` must be decoded last.
const ENTITIES = [
    ['&lt;', '<'],
    ['&gt;', '>'],
    ['&quot;', '"'],
    ['&#x27;', '\''],
    ['&#x60;', '`'],
    ['&#x3D;', '='],
    ['&amp;', '&']
];

function format(content) {
    let result = content.replace(/\r\n/g, '\n');

    result = result.replace(LERNA_HEADER, `${HEADER}\n`);

    ENTITIES.forEach(([entity, character]) => {
        result = result.split(entity).join(character);
    });

    return result
        .replace(/[ \t]+$/gm, '')
        .replace(/\n{3,}/g, '\n\n')
        .replace(/\n+$/, '\n');
}

fs.readdirSync(PACKAGES_DIR, {
    withFileTypes: true
}).forEach((entry) => {
    const file = path.join(PACKAGES_DIR, entry.name, 'CHANGELOG.md');

    if (!entry.isDirectory() || !fs.existsSync(file)) {
        return;
    }

    const content = fs.readFileSync(file, 'utf8');
    const formatted = format(content);

    if (formatted !== content) {
        fs.writeFileSync(file, formatted);
        console.log(`Formatted ${file}`);
    }
});
