const { ipcMain } = require('electron')


ipcMain.on('process-subtitle', (event, paths) => {
    console.log(paths)
    event.reply('process-subtitle', [
        { name: "hello", amount: 900 },
        { name: "you", amount: 50 },
        { name: "hi", amount: 120 },
        { name: "now", amount: 910 },
        { name: "what", amount: 1000 },
        { name: "he", amount: 210 },
        { name: "blue", amount: 2200 },
        { name: "and", amount: 110 },
        { name: "not", amount: 1200 },
        { name: "not", amount: 1200 },
        { name: "not", amount: 1200 },
        { name: "not", amount: 1200 },
        { name: "not", amount: 1200 },
        { name: "not", amount: 1200 },
        { name: "not", amount: 1200 },
        { name: "not", amount: 1200 },
        { name: "not", amount: 1200 },
        { name: "not", amount: 1200 },
        { name: "not", amount: 1200 },
        { name: "dad", amount: 10 }
    ])
})