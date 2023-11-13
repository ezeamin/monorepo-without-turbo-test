import gradient from 'gradient-string';
import { execSync } from 'node:child_process';
import path from 'node:path';

import * as readline from 'readline';

const runPrepareScript = async () => {
  try {
    console.clear();
    process.stdout.write('\x1b[33m🔧 Running prepare script...\x1b[0m\n\n');

    // Run husky install
    process.stdout.write('⌛ (1/5) Installing Husky...');
    execSync('husky install');
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);
    process.stdout.write('✅ (1/5) Installed Husky\n');

    // Check if pnpm is installed
    process.stdout.write('⌛ (2/5) Checking if pnpm is installed...');
    try {
      execSync('pnpm -v');
      readline.clearLine(process.stdout, 0);
      readline.cursorTo(process.stdout, 0);
      process.stdout.write('✅ (2/5) pnpm is installed\n');
    } catch (error) {
      process.stdout.write('\n\x1b[31m❗(2/5) pnpm is not installed.\n');
      process.stdout.write('⌛ (2/5) Installing pnpm...');

      execSync('npm i -g pnpm', { stdio: 'inherit' });

      readline.clearLine(process.stdout, 0);
      readline.cursorTo(process.stdout, 0);
      process.stdout.write('✅ (2/5) Installed pnpm\n');
    }

    // Install global dependencies
    process.stdout.write('⌛ (3/5) Installing global dependencies...');
    execSync(
      'pnpm install npm-check-updates typescript prettier eslint @trivago/prettier-plugin-sort-imports syncpack -g --silent'
    );
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0);
    process.stdout.write('✅ (3/5) Installed global dependencies\n');

    // Check for dependency updates
    process.stdout.write('⌛ (4/5) Checking for dependency updates...');
    const updates = execSync('ncu');
    console.log(`\n${updates}`);
    process.stdout.write('✅ (4/5) Checked for dependency updates...\n');

    // Check the versions of the dependencies
    process.stdout.write('⌛ (5/5) Checking for dependency versions...');

    const projectDirectory = path.resolve(__dirname, '../..');

    try {
      execSync(`pnpm run syncpack:check`, {
        cwd: projectDirectory,
        stdio: 'inherit',
      });
      console.log('✅ (5/5) Checked for dependency versions');
    } catch (error) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'status' in error &&
        error.status === 1
      ) {
        console.log('\n\x1b[31m❗ Inconsistency found in dependencies.');
        console.log('❗ Do you want to run: pnpm run syncpack:fix?');
        console.log('\x1b[33m⚠️  Press (y/n) to execute the script! \x1b[0m');
        console.log(
          "If you don't press any key, the execution will not continue."
        );

        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
        });

        const answer = await new Promise((resolve) => {
          rl.question('', (input) => {
            resolve(input.toLowerCase());
            rl.close();
          });
        });

        if (answer === 'y') {
          console.log('\nRunning pnpm run syncpack:fix...');
          execSync('pnpm run syncpack:fix', { stdio: 'inherit' });
        } else {
          throw error;
        }
      } else {
        throw error;
      }
    }

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
