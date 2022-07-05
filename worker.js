// ----------------------------------------
// Used with index.html
// ----------------------------------------

importScripts("app.js")

onmessage = e => {
    const App = {
        locateFile: (file) => file,
        onRuntimeInitialized: () => {
            App.run_thread();
            // const a = performance.now()
            // e.data === 'thread' ? Lib.thread() : Lib.serial() ;
            // console.log( `${e.data} done in ${(performance.now()-a)}ms` )
        },
        mainScriptUrlOrBlob: "app.js",
    };

    // LibModule is the name of the exported library with emscripten
    LibModule(App)
}


// Was previously (loading of the worker not working)
/*
importScripts("lib.js")
onmessage = e => {
    LibModule().then( lib => {
        const a = performance.now()
        e.data === 'thread' ? lib.thread() : lib.serial() ;
        console.log( `${e.data} done in ${(performance.now()-a)}ms` )
    })
}
*/