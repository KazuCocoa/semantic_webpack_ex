//---------------------------------------------
// File: web/statis/js/semantic.js
//---------------------------------------------

import 'semantic-ui-less/definitions/globals/site';
import 'semantic-ui-less/definitions/behaviors/api';
import 'semantic-ui-less/definitions/behaviors/colorize';
import 'semantic-ui-less/definitions/behaviors/form';
import 'semantic-ui-less/definitions/behaviors/state';
import 'semantic-ui-less/definitions/behaviors/visibility';
import 'semantic-ui-less/definitions/behaviors/visit';

import 'semantic-ui-less/definitions/modules/accordion';
import 'semantic-ui-less/definitions/modules/checkbox';
import 'semantic-ui-less/definitions/modules/dimmer';
import 'semantic-ui-less/definitions/modules/dropdown';
import 'semantic-ui-less/definitions/modules/embed';
import 'semantic-ui-less/definitions/modules/modal';
import 'semantic-ui-less/definitions/modules/nag';
import 'semantic-ui-less/definitions/modules/popup';
import 'semantic-ui-less/definitions/modules/progress';
import 'semantic-ui-less/definitions/modules/rating';
import 'semantic-ui-less/definitions/modules/search';
import 'semantic-ui-less/definitions/modules/shape';
import 'semantic-ui-less/definitions/modules/sidebar';
import 'semantic-ui-less/definitions/modules/sticky';
import 'semantic-ui-less/definitions/modules/tab';
import 'semantic-ui-less/definitions/modules/transition';

module.exports = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false
      },
    }),
  ]
}
