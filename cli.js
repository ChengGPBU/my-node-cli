#! /usr/bin/env node
const inquirer = require('inquirer')
const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const ejs = require('ejs')


console.log("my-node-cli start working")


inquirer.prompt([
  {
    type: 'input', //type： input, number, confirm, list, checkbox ... 
    name: 'name', // key 名
    message: 'Your name', // 提示信息
    default: 'my-node-cli' // 默认值
  }
]).then(answers => {
  console.log(chalk.red('入参:'))
  console.log(chalk.green(JSON.stringify(answers)))

  const destUrl = path.join(__dirname, 'templates')
  const cwdUrl = process.cwd()
  
  fs.readdir(destUrl, (err, files) => {
    if(err) throw err

    files.forEach(file => {
        ejs.renderFile(path.join(destUrl, file), answers).then(data => {
            fs.writeFileSync(path.join(cwdUrl, file), data)
        })
    });
  })

})



