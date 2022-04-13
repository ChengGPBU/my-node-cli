const path = require('path')
const fs = require('fs-extra')
const inquirer = require('inquirer')
const Generator = require('../lib/Generator')



const create = async (name,options) => {
    const cwd = process.cwd()
    const targetAir = path.join(cwd,name)

    
    if (fs.existsSync(targetAir)) {
        if (options.force) {
            await fs.remove(targetAir)
            console.log('>>> create.js  remove target file')
        } else {
            // 询问用户是否需要覆盖
            let { action } = await inquirer.prompt([
                {
                    name: 'action', 
                    type: 'list', 
                    message: 'Target directory already exists Pick an action:',
                    choices: [
                        { name: 'Overwrite', value: 'overwrite' },
                        { name: 'Cancel', value: false },
                    ]
                }
            ])
            if (!action) {
                return;
              } else if (action === 'overwrite') {
                // 移除已存在的目录
                console.log(`\r\nRemoving...`)
                await fs.remove(targetAir)
            }
        }
    }

    // 创建项目
    const generator = new Generator(name, targetAir);

    // 开始创建项目
    generator.create()
}


module.exports = {
    create
}