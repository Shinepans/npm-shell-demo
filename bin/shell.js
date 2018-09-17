#!/usr/bin/env node
const shell = require('shelljs'),
    program = require('commander')

let version = shell.exec('node --version', { silent: true }).stdout

// install qr package
program
    .command('hello')
    .description('show hello')
    .action(() => console.log("hello ~"))

// install qr package
program
.command('qr')
.description('install qrcode commandline tools in computer, npm install qrcode -g, use: qrcode STRING')
.action(() => shell.exec('npm install qrcode -g'))

// remove qr package
program
    .command('remove')
    .description('remove qrcode in global')
    .action(() => shell.exec(`npm remove qrcode -g & npm unlink`))

// more commands ..

program.parse(process.argv)
