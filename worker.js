// ----------------------------------------
// Used with index.html
// ----------------------------------------

importScripts("lib.js")

onmessage = e => {
    const Lib = {
        locateFile: (file) => file,
        onRuntimeInitialized: () => {
            const a = performance.now()
            e.data === 'thread' ? Lib.thread() : Lib.serial() ;
            console.log( `${e.data} done in ${(performance.now()-a)}ms` )
        },
        mainScriptUrlOrBlob: "lib.js",
    };

    // LibModule is the name of the exported library with emscripten
    LibModule(Lib)
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