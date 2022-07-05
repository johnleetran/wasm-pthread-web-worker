// ----------------------------------------
// Used with index.html
// ----------------------------------------

importScripts("app.js")
let app;
onmessage = async (msg) => {
    let App = {
        locateFile: (file) => file,
        mainScriptUrlOrBlob: "app.js",
    };
    if(msg.data == 'init'){
        app = await AppModule(App)
    }else if(msg.data == 'isitup'){
        app.isitup();
    }else{
        /*
            basically, clients will need to write their code inside of 
            here if they dont want to block the main thread
        */
        app.run_thread();
    }
}
