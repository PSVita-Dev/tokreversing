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

let res = encryptMSSDK(`{"tokenList":[],"navigator":{"appCodeName":"Mozilla","appMinorVersion":"undefined","appName":"Netscape","appVersion":"5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36","buildID":"undefined","doNotTrack":"null","msDoNotTrack":"undefined","oscpu":"undefined","platform":"Linux x86_64","product":"Gecko","productSub":"20030107","cpuClass":"undefined","vendor":"Google Inc.","vendorSub":"","deviceMemory":"8","language":"en-US","systemLanguage":"undefined","userLanguage":"undefined","webdriver":"false","hardwareConcurrency":8,"maxTouchPoints":0,"cookieEnabled":1,"vibrate":3,"credentials":99,"storage":99,"requestMediaKeySystemAccess":3,"bluetooth":4,"languages":"en-US,sr,de-DE,de,en","touchEvent":2,"touchstart":2},"wID":{"permState":"denied","load":3,"nap":"00321044241322243122","rtcIP":"","nativeLength":33,"nativeName":2,"jsFontsList":"0","syntaxError":"Failed to construct 'WebSocket': The URL 'Create WebSocket' is invalid.","timestamp":"1670605956867","timezone":1,"magic":3,"canvas":"385304443","wProps":374198,"dProps":2,"jsv":"1.5","browserType":16,"iframe":2,"pppt":2,"rtt":2,"notifyPerm":"denied","sdkVersion":"4.4.3","scmVersion":"1.0.0.70","aid":1988,"msgType":1,"privacyMode":514,"aidList":[1988],"isf":2,"env":"11111111111111111111111","index":26},"window":{"Image":3,"isSecureContext":1,"ActiveXObject":4,"toolbar":99,"locationbar":99,"external":99,"mozRTCPeerConnection":4,"postMessage":3,"webkitRequestAnimationFrame":3,"BluetoothUUID":4,"netscape":4,"localStorage":99,"sessionStorage":99,"indexedDB":99,"devicePixelRatio":1,"devicePixelRatioFloat":1,"location":"https://www.tiktok.com/foryou"},"webgl":{"supportedExtensions":["ANGLE_instanced_arrays","EXT_blend_minmax","EXT_color_buffer_half_float","EXT_disjoint_timer_query","EXT_float_blend","EXT_frag_depth","EXT_shader_texture_lod","EXT_texture_compression_bptc","EXT_texture_compression_rgtc","EXT_texture_filter_anisotropic","EXT_sRGB","OES_element_index_uint","OES_fbo_render_mipmap","OES_standard_derivatives","OES_texture_float","OES_texture_float_linear","OES_texture_half_float","OES_texture_half_float_linear","OES_vertex_array_object","WEBGL_color_buffer_float","WEBGL_compressed_texture_s3tc","WEBGL_compressed_texture_s3tc_srgb","WEBGL_debug_renderer_info","WEBGL_depth_texture","WEBGL_draw_buffers","WEBGL_lose_context","WEBGL_multi_draw"],"antialias":1,"blueBits":8,"depthBits":24,"greenBits":8,"maxAnisotropy":16,"maxCombinedTextureImageUnits":64,"maxCubeMapTextureSize":32768,"maxFragmentUniformVectors":4096,"maxRenderbufferSize":32768,"maxTextureImageUnits":32,"maxTextureSize":32768,"maxVaryingVectors":31,"maxVertexAttribs":16,"maxVertexTextureImageUnits":32,"maxVertexUniformVectors":4096,"shadingLanguageVersion":"WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)","stencilBits":0,"version":"WebGL 1.0 (OpenGL ES 2.0 Chromium)","vendor":"Google Inc. (NVIDIA)","renderer":"ANGLE (NVIDIA, Vulkan 1.3.194 (NVIDIA NVIDIA GeForce GTX 1660 SUPER (0x000021C4)), NVIDIA)"},"document":{"characterSet":"UTF-8","compatMode":"CSS1Compat","documentMode":"undefined","URL":"https://www.tiktok.com/foryou","layers":4,"all":12,"images":99},"screen":{"innerWidth":150,"innerHeight":961,"outerWidth":1920,"outerHeight":1035,"screenX":0,"screenY":0,"pageXOffset":0,"pageYOffset":0,"availWidth":1920,"availHeight":1035,"sizeWidth":1920,"sizeHeight":1080,"clientWidth":150,"clientHeight":961,"colorDepth":24,"pixelDepth":24,"focus":2,"hidden":2,"visibilityState":"visible","location":1,"menubar":1,"scrollbar":0,"orientation":"landscape-primary"},"plugins":{"plugin":["internal-pdf-viewer|application/x-google-chrome-pdf|pdf","mhjfbmdgcfjbbpaeojofohoefgiehjai|application/pdf|pdf","internal-nacl-plugin|application/x-nacl|","internal-nacl-plugin|application/x-pnacl|"],"pv":"0","proto":1},"custom":{},"canvasIntegrity":{"a":1,"b":1,"c":1,"d":["2396948246","2396948246"],"e":1},"mediaQuery":{"dppx":1,"orientation":"portrait","hover":"hover","anyPointer":"fine","maxHeight":961,"maxWidth":150,"dpi":96},"env":"","battery":{"charging":1,"level":100,"chargingTime":"0","dischargingTime":"Infinity"},"msgMeta":{"msgType":1,"msgSrcProp":2,"msgProtocol":1,"aid":1988,"aidList":[1988]}}`);
console.log(res);
let dec = decryptMSSDK(res);
console.log(dec);
