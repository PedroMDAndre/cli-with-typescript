#!/usr/bin/env node

import fs from 'fs';
import { Command } from 'commander';

const hello = (message: string) => {};

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
        console.log(`Hello ${message}`.toUpperCase());
      } else {
        console.log(`Hello ${message}`);
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
