const ora = require('ora')


const loading = () => {
    const message = 'loading……'
    const spinner = ora(message)
    spinner.start()


    setTimeout(() => {
        // 修改动画样式
    
        // Type: string
        // Default: 'cyan'
        // Values: 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray'
        spinner.color = 'red';    
        spinner.text = 'Loading rainbows';
    
    
        setTimeout(() => {
            // 加载状态修改
            spinner.stop() // 停止
            spinner.succeed('Loading succeed'); // 成功 ✔
            // spinner.fail(text?);  失败 ✖
            // spinner.warn(text?);  提示 ⚠
            // spinner.info(text?);  信息 ℹ
        }, 2000);
    
    }, 2000)
}

module.exports = {
    loading
}