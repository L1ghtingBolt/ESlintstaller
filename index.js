#!/usr/bin/env node

const pressAnyKey = require('press-any-key');
const clc = require('chalk');
const shell = require('shelljs');
const fs = require('fs');

console.log(clc.red('Welcome to EsLint Installer 1.0.0'))
console.log(clc.white('Press enter to continue.'))
pressAnyKey(">", {
  ctrlC: "reject"
}).then(() => {
    console.log(clc.yellow.underline('Thanks! Let\'s start by installing the packages...'))
    shell.exec('yarn add --dev eslint@latest');
    console.log(clc.black.bgYellowBright('Installation is now done!'));
    console.log('Now lets configure EsLint.');
    fs.appendFile('.eslintrc.js', `module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'require-jsdoc': 0,
  },
};`, 
  (err) => {
        if (err) throw(err);
        console.log('Configuration saved.')
    })
    console.log(clc.black.bgYellowBright('We\'re done! Bye!'))
})