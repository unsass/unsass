// ============================================================================================= //
//                                       CHANGELOG PRESET                                        //
// ============================================================================================= //

import createPreset from 'conventional-changelog-conventionalcommits';

/**
 * Conventional Commits preset with the same release rule as `semantic-release` on the other libs:
 * a `build(deps)` commit triggers a minor bump, everything else follows the default preset.
 */
export default function (config) {
    const preset = createPreset(config);
    const whatBump = preset.whatBump;

    return {
        ...preset,
        whatBump(commits) {
            const bump = whatBump(commits);
            const dependencies = commits.filter(commit => commit.type === 'build' && commit.scope === 'deps');

            if (bump && bump.level === 2 && dependencies.length > 0) {
                return {
                    ...bump,
                    level: 1,
                    reason: `There are ${dependencies.length} dependencies updates`
                };
            }

            return bump;
        }
    };
}
