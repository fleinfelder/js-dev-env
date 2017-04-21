import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors'; // eslint-disable-line no-unused-vars

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production. This will take a moment...'.blue);

webpack(webpackConfig).run((err, stats) => {
  if (err) { // so a fatal error occurred. Stop here.
    console.log(err.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded.
  console.log('Your app has been built for production and written to /dist!'.green);

  return 0;
});
