var initializedJS=!1,Module={};function assert(e,t){e||abort("Assertion failed: "+t)}function threadPrintErr(){var e=Array.prototype.slice.call(arguments).join(" ");console.error(e)}function threadAlert(){var e=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:e,threadId:Module._pthread_self()})}var out=function(){throw"out() is not defined in worker.js."},err=threadPrintErr;if(this.alert=threadAlert,Module.instantiateWasm=function(e,t){var r=new WebAssembly.Instance(Module.wasmModule,e);return Module.wasmModule=null,t(r),r.exports},this.onmessage=function(e){try{if("load"===e.data.cmd){if(Module.wasmModule=e.data.wasmModule,Module.wasmMemory=e.data.wasmMemory,Module.buffer=Module.wasmMemory.buffer,Module.ENVIRONMENT_IS_PTHREAD=!0,"string"==typeof e.data.urlOrBlob)importScripts(e.data.urlOrBlob);else{var t=URL.createObjectURL(e.data.urlOrBlob);importScripts(t),URL.revokeObjectURL(t)}getUsdModule(Module).then((function(e){Module=e,postMessage({cmd:"loaded"})}))}else if("objectTransfer"===e.data.cmd)Module.PThread.receiveObjectTransfer(e.data);else if("run"===e.data.cmd){Module.__performance_now_clock_drift=performance.now()-e.data.time;var r=e.data.threadInfoStruct;Module.__emscripten_thread_init(r,0,0);var a=e.data.stackBase,o=e.data.stackBase+e.data.stackSize;assert(r),assert(0!=o),assert(0!=a),assert(o>a),Module.establishStackSpace(o,a),Module._emscripten_tls_init(),Module.PThread.receiveObjectTransfer(e.data),Module.PThread.setThreadStatus(Module._pthread_self(),1),initializedJS||(Module.___embind_register_native_and_builtin_types(),initializedJS=!0);try{var d=Module.invokeEntryPoint(e.data.start_routine,e.data.arg);Module.checkStackCookie(),Module.getNoExitRuntime()||Module.PThread.threadExit(d)}catch(e){if("Canceled!"===e)Module.PThread.threadCancel();else if("unwind"!=e){if("function"!=typeof Module._emscripten_futex_wake)throw err("Thread Initialisation failed."),e;if(!(e instanceof Module.ExitStatus))throw Module.PThread.threadExit(-2),e;Module.getNoExitRuntime()?err("Pthread 0x"+_pthread_self().toString(16)+" called exit(), staying alive due to noExitRuntime."):(err("Pthread 0x"+_pthread_self().toString(16)+" called exit(), calling threadExit."),Module.PThread.threadExit(e.status))}else err("Pthread 0x"+r.toString(16)+" completed its pthread main entry point with an unwind, keeping the pthread worker alive for asynchronous operation.")}}else"cancel"===e.data.cmd?r&&Module.PThread.threadCancel():"setimmediate"===e.data.target||("processThreadQueue"===e.data.cmd?r&&Module._emscripten_current_thread_process_queued_calls():(err("worker.js received unknown command "+e.data.cmd),err(e.data)))}catch(e){throw err("worker.js onmessage() captured an uncaught exception: "+e),e&&e.stack&&err(e.stack),e}},"object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node){self={location:{href:__filename}};var onmessage=this.onmessage,nodeWorkerThreads=require("worker_threads");global.Worker=nodeWorkerThreads.Worker;var parentPort=nodeWorkerThreads.parentPort;parentPort.on("message",(function(e){onmessage({data:e})}));var nodeFS=require("fs"),nodeRead=function(e){return nodeFS.readFileSync(e,"utf8")};function globalEval(e){global.require=require,global.Module=Module,eval.call(null,e)}importScripts=function(e){globalEval(nodeRead(e))},postMessage=function(e){parentPort.postMessage(e)},"undefined"==typeof performance&&(performance={now:function(){return Date.now()}})}