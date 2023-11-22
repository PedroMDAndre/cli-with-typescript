#!/usr/bin/env node

import fs from 'fs'; // File System
import { Command } from 'commander';

// Declare the program
const program = new Command();

program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

// Add action onto that CLI
program
  .argument('<string>', 'string to log')
  .option('-c, --capitalize', 'Capitalize the message')
  .action(
    (
      message: string,
      opts: {
        capitalize?: boolean;
      }
    ) => {
      if (opts.capitalize) {
        console.log(`\x1b[36m%s\x1b[0m` + `Hello ${message}`.toUpperCase());
      } else {
        console.log(`\x1b[36mHello ${message}\x1b[0m`);
      }
    }
  );

program
  .command('add <numbers...>')
  .action((numbers: string[]) => {
    const total: number = numbers.reduce(
      (t: number, number) => t + Number.parseFloat(number),
      0
    );
    console.log(`Total ${total}`);
  })
  .description('Add numbers and log the total');

program
  .command('max <numbers...>')
  .action((numbers: string[]) => {
    const total: number = Number.parseFloat(numbers.toReversed()?.[0] ?? '0');
    console.log(`Total ${total}`);
  })
  .description('Add numbers and log the total');

// Execute the CLI with the given arguments
program.parse(process.argv);
