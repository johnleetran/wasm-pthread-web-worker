// ----------------------------------------
// Used with index.html
// ----------------------------------------

importScripts("app.js")

onmessage = (msg) => {
    const App = {
        locateFile: (file) => file,
        onRuntimeInitialized: () => {
            if(msg.data == 'isitup'){
                App.isitup();
            }else{
                App.run_thread();
            }
            self.close();
        },
        mainScriptUrlOrBlob: "app.js",
    };

    // AppModule is the name of the exported library with emscripten
    AppModule(App)
}
