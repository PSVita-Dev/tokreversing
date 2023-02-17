function final(s) {
  return s.replace(/[A-Z0-9+/=]/gi, c =>
    "Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe="[
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(c) ] )
}

function reverse(s) {
  return s.replace(/[A-Z0-9+/=]/gi, c =>
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
    "Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe=".indexOf(c) ] )
  
}

function some2(e, t) {
        var r, n = [], a = 0, i = "";
        
        for (var o = 0; o < 256; o++) {
            n[o] = o;
        }
        for (var f = 0; f < 256; f++) {
            a = (a + n[f] + e.charCodeAt(f % e.length)) % 256;
            r = n[f];
            n[f] = n[a];
            n[a] = r;
        }
        var c = 0;
        a = 0;
        for (var u = 0; u < t.length; u++) {
            a = (a + n[c = (c + 1) % 256]) % 256;
            r = n[c];
            n[c] = n[a];
            n[a] = r;
            i += String.fromCharCode(255 & (t.charCodeAt(u) ^ n[(n[c] + n[a]) % 256]));
        }
        return i;
}

function encryptMSSDK(toenc) {
    
    let num = Math.floor(Math.random() * 256);
    console.log("rand is "+num);
        
    let rand = String.fromCharCode(num);
    let res1 = some2(rand,toenc);
   
    return final(btoa("A"+rand+res1));
}

function decryptMSSDK(b) {
    var b = reverse(b);
    let num = atob(b).substring(1,2).charCodeAt(0);
    console.log("rand was "+num);
    return some2(String.fromCharCode(num),atob(b).substring(2));
}

let res = encryptMSSDK(`"{"tokenList":[],"navigator":{"appCodeName":"Mozilla","appMinorVersion":"undefined","appName":"Netscape","appVersion":"5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36","buildID":"undefined","doNotTrack":"null","msDoNotTrack":"undefined","oscpu":"undefined","platform":"Linux x86_64","product":"Gecko","productSub":"20030107","cpuClass":"undefined","vendor":"Google Inc.","vendorSub":"","deviceMemory":"8","language":"en-US","systemLanguage":"undefined","userLanguage":"undefined","webdriver":"false","hardwareConcurrency":8,"maxTouchPoints":0,"cookieEnabled":1,"vibrate":3,"credentials":99,"storage":99,"requestMediaKeySystemAccess":3,"bluetooth":4,"languages":"en-US,sr,de-DE,de,en","touchEvent":2,"touchstart":2},"wID":{"permState":"denied","load":3,"nap":"00321044241322243122","rtcIP":"195.245.19.33","nativeLength":33,"nativeName":2,"jsFontsList":"0","syntaxError":"Failed to construct 'WebSocket': The URL 'Create WebSocket' is invalid.","timestamp":"1676663165485","timezone":1,"magic":3,"canvas":"2514586949","wProps":374198,"dProps":2,"jsv":"1.5","browserType":16,"iframe":2,"pppt":2,"rtt":2,"notifyPerm":"denied","sdkVersion":"4.4.4","scmVersion":"1.0.0.12","aid":1988,"msgType":1,"privacyMode":513,"aidList":[1988],"isf":2,"env":"11111111111111111111111","propLength":{"a":1093,"b":1045,"c":857,"d":7,"e":857,"f":0},"objProx":"11111111111111111","sri":1,"index":31},"window":{"Image":3,"isSecureContext":1,"ActiveXObject":4,"toolbar":99,"locationbar":99,"external":99,"mozRTCPeerConnection":4,"postMessage":3,"webkitRequestAnimationFrame":3,"BluetoothUUID":4,"netscape":4,"localStorage":99,"sessionStorage":99,"indexedDB":99,"devicePixelRatio":1,"devicePixelRatioFloat":1,"location":"https://www.tiktok.com/"},"webgl":{"supportedExtensions":["ANGLE_instanced_arrays","EXT_blend_minmax","EXT_color_buffer_half_float","EXT_disjoint_timer_query","EXT_float_blend","EXT_frag_depth","EXT_shader_texture_lod","EXT_texture_compression_bptc","EXT_texture_compression_rgtc","EXT_texture_filter_anisotropic","EXT_sRGB","KHR_parallel_shader_compile","OES_element_index_uint","OES_fbo_render_mipmap","OES_standard_derivatives","OES_texture_float","OES_texture_float_linear","OES_texture_half_float","OES_texture_half_float_linear","OES_vertex_array_object","WEBGL_color_buffer_float","WEBGL_compressed_texture_s3tc","WEBGL_compressed_texture_s3tc_srgb","WEBGL_debug_renderer_info","WEBGL_debug_shaders","WEBGL_depth_texture","WEBGL_draw_buffers","WEBGL_lose_context","WEBGL_multi_draw"],"antialias":1,"blueBits":8,"depthBits":24,"greenBits":8,"maxAnisotropy":16,"maxCombinedTextureImageUnits":64,"maxCubeMapTextureSize":32768,"maxFragmentUniformVectors":1024,"maxRenderbufferSize":32768,"maxTextureImageUnits":32,"maxTextureSize":32768,"maxVaryingVectors":31,"maxVertexAttribs":16,"maxVertexTextureImageUnits":32,"maxVertexUniformVectors":1024,"shadingLanguageVersion":"WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)","stencilBits":0,"version":"WebGL 1.0 (OpenGL ES 2.0 Chromium)","vendor":"Google Inc. (NVIDIA Corporation)","renderer":"ANGLE (NVIDIA Corporation, NVIDIA GeForce GTX 1660 SUPER/PCIe/SSE2, OpenGL 4.5.0)"},"document":{"characterSet":"UTF-8","compatMode":"CSS1Compat","documentMode":"undefined","URL":"https://www.tiktok.com/","layers":4,"all":12,"images":99},"screen":{"innerWidth":500,"innerHeight":913,"outerWidth":1920,"outerHeight":1035,"screenX":0,"screenY":0,"pageXOffset":0,"pageYOffset":0,"availWidth":1920,"availHeight":1035,"sizeWidth":1920,"sizeHeight":1080,"clientWidth":500,"clientHeight":4261,"colorDepth":24,"pixelDepth":24,"focus":2,"hidden":2,"visibilityState":"visible","location":1,"menubar":1,"scrollbar":0,"orientation":"landscape-primary"},"plugins":{"plugin":["internal-pdf-viewer|application/x-google-chrome-pdf|pdf","mhjfbmdgcfjbbpaeojofohoefgiehjai|application/pdf|pdf","internal-nacl-plugin|application/x-nacl|","internal-nacl-plugin|application/x-pnacl|"],"pv":"0","proto":1},"custom":{},"canvasIntegrity":{"a":1,"b":1,"c":1,"d":["1745293591","1745293591"],"e":1},"mediaQuery":{"dppx":1,"orientation":"portrait","hover":"hover","anyPointer":"fine","maxHeight":913,"maxWidth":500,"dpi":96},"env":"","propLength":{},"objProx":"","battery":{"charging":1,"level":100,"chargingTime":"0","dischargingTime":"Infinity"},"msgMeta":{"msgType":1,"msgSrcProp":2,"msgProtocol":1,"aid":1988,"aidList":[1988]}}"`);
console.log(res);
let dec = decryptMSSDK(res);
console.log(dec);
