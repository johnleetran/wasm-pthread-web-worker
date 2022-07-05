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
        app.run_thread();
    }
}
