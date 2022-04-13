#! /usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const figlet = require('figlet')


const { loading } = require('./loading')
const { create } = require('./create')




program
.command('create <name>')
.description('Create a new project')
// -f or --force 为强制创建，如果创建的目录存在则直接覆盖
.option('-f, --force', 'overwrite target deiectory if it exist')
.action((name, options) => {
    console.log('project name is:' + name, 'options:' + JSON.stringify(options));
    create(name, options)
})

program
.version(`v${require('../package.json').version}`)
.usage('<command> [option]')


program
.command('config [value]')
.description('inspect and modify the config')
.option('-g, --get <path>','get value from option')
.option('-s, --set <path> <value')
.option('-d, --delete <path>', 'delete option from config')
.action((value,opts)=> {
    console.log(value, JSON.stringify(opts));
})


// 配置 ui 命令
program
  .command('ui')
  .description('start add open roc-cli ui')
  .option('-p, --port <port>', 'Port used for the UI Server')
  .action((option) => {
    console.log(option)
  })

program
.command('loading')
.description('loading……')
.action(name => {
    loading()
})

program
  // 监听 --help 执行
  .on('--help', () => {
    // 使用figlet 绘制logo
    console.log('\r\n' + figlet.textSync('WeLab-Cli', {
        font: 'Standard',
        horizontalLayout: 'fitted',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }))
    // 新增说明信息
    console.log(`\r\nRun ${chalk.cyan(`my-cli <command> --help`)} for detailed usage of given command\r\n`)
  })

program.parse(process.argv)