import fs from 'fs-extra';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import childProcess from 'child_process';

try {
  // Remove current build
  fs.removeSync('./dist/');
  // Copy front-end files
  fs.copySync('./src/public', './dist/public');
  fs.copySync('./src/views', './dist/views');
} catch (err) {
  console.log(err);
}
