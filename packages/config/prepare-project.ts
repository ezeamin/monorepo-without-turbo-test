/* eslint-disable no-console */
import gradient from 'gradient-string';
import { execSync } from 'node:child_process';
import path from 'node:path';
import * as readline from 'readline';

const runPrepareScript = () => {
  try {
    console.clear();
    process.stdout.write('\x1b[33m🔧 Running prepare script...\x1b[0m\n\n');

    // Run husky install
    process.stdout.write('⌛ (1/4) Installing Husky...');
    execSync('husky install');
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);
    process.stdout.write('✅ (1/4) Installed Husky\n');

    // Install global dependencies
    process.stdout.write('⌛ (2/4) Installing global dependencies...');
    execSync(
      'pnpm install npm-check-updates typescript prettier eslint @trivago/prettier-plugin-sort-imports syncpack -g --silent'
    );
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);
    process.stdout.write('✅ (2/4) Installed global dependencies\n');

    // Check for dependency updates
    process.stdout.write('⌛ (3/4) Checking for dependency updates...');
    const updates = execSync('ncu');
    console.log(`\n${updates}`);
    process.stdout.write('✅ (3/4) Checked for dependency updates\n');





    // // check the versions of the dependencies
    // process.stdout.write('⌛ (4/4) Checking for dependency versions...');

    // // Obtén la ruta absoluta al directorio raíz
    // const rootDir = path.resolve(__dirname);
    // console.log("🥤 ~ file: prepare-project.ts:39 ~ runPrepareScript ~ rootDir:", rootDir)

    // // Ejecuta el comando syncpack list-mismatches en el directorio raíz
    // const output = execSync('npx syncpack list-mismatches', { cwd: '..' });
    // console.log("😎 ~ file: prepare-project.ts:44 ~ runPrepareScript ~ output:", output.toString())

    // const outputString = output.toString();

    // console.log('Salida de syncpack list-mismatches:\n', outputString);
  
    // // readline.clearLine(process.stdout, 0);
    // // readline.cursorTo(process.stdout, 0);
    // process.stdout.write('✅ (4/4) Checked for dependency versions\n');




    // Delay 1s before printing success message
    setTimeout(() => {
      const successMessage = gradient(
        '#7aecdd',
        '#ffffff',
        '#f78df7'
      )('Prepare script run successfully!');

      console.log(
        '\n═════════════════════════════════════════════════════════════'
      );
      console.log(`\n\x1b[32m✨ ${successMessage} 🎉\x1b[0m\n`);
      console.log(
        '═════════════════════════════════════════════════════════════\n'
      );

      console.log(
        '\x1b[33m❗ Make sure to check the above dependency updates and their implications, especially on \x1b[31mbreaking changes.'
      );
      console.log('\x1b[33m❗ To update them all, run \x1b[0mncu -u');
      console.log(
        '\x1b[33m❗ To only update one (or more) of them, run \x1b[0mncu [dependency_name(s)] -u\n'
      );

      // console.log()
    }, 1000);
  } catch (e: unknown) {
    const error = e as Error;

    console.log(
      '\n═════════════════════════════════════════════════════════════'
    );
    console.error(' \n\x1b[31mPrepare script EXITED 😥\x1b[0m\n');
    console.log(
      '═════════════════════════════════════════════════════════════\n'
    );
    console.error(`Error log: ${error.message}`);
  }
};

runPrepareScript();
