
function randl(n) {
    let rs = "";
    const al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    for(var i = 0; i<n; i++) {
        rs += al[Math.floor(Math.random() * al.length)];
    }
    return rs;
}
function e1(e, r) {
        var t, a = e.length, n = a >> 2;
        0 != (3 & a) && ++n, r ? (t = new Array(n + 1))[n] = a : t = new Array(n);
        for (var f = 0; f < a; ++f) {
            t[f >> 2] |= e.charCodeAt(f) << ((3 & f) << 3);
        }
        return t;
}

function e2(e) {
        return e.length < 4 && (e.length = 4), e;
}

function e55(e, r) {
        var t = e.length, a = t << 2;
        if (r) {
            var n = e[t - 1];
            if (n < (a -= 4) - 3 || n > a) {
                return null;
            }
            a = n;
        }
        for (var f = 0; f < t; f++) {
            e[f] = String.fromCharCode(255 & e[f], e[f] >>> 8 & 255, e[f] >>> 16 & 255, e[f] >>> 24 & 255);
        }
        var i = e.join("");
        return r ? i.substring(0, a) : i;
}
function h1(e) {
        return 4294967295 & e;
}

function h2(e, r, t, a, n, f) {
        return (t >>> 5 ^ r << 2) + (r >>> 3 ^ t << 4) ^ (e ^ r) + (f[3 & a ^ n] ^ t);
}
let magic = 2654435769

function e3(e, r) {
        var t, a, n, f, i, c, o = e.length, s = o - 1;
        for (a = e[s], n = 0, c = 0 | Math.floor(6 + 52 / o); c > 0; --c) {
            for (f = (n = h1(n + magic)) >>> 2 & 3, i = 0; i < s; ++i) {
                t = e[i + 1], a = e[i] = h1(e[i] + h2(n, t, a, i, f, r));
            }
            t = e[0], a = e[s] = h1(e[s] + h2(n, t, a, s, f, r));
        }
        return e;
    
}
function generateMssdkInfo(e) {
    let res1 = e1(e, !0);
    
    let rand = randl(4);
//     console.log("rand = "+rand);
    
    let r = e55(e3(e1(e, !0),e2(e1(rand, !1))), !1);
    
    return rand+btoa(r);
}


console.log(generateMssdkInfo('{"navigator":{"appCodeName":"Mozilla","appName":"Netscape","platform":"Linux x86_64","product":"Gecko","productSub":"20030107","hardwareConcurrency":8,"cpuClass":false,"maxTouchPoints":0,"oscpu":false,"vendor":"Google Inc.","vendorSub":"","doNotTrack":false,"vibrate":true,"credentials":true,"storage":true,"requestMediaKeySystemAccess":true,"bluetooth":false},"window":{"Image":true,"innerHeight":961,"innerWidth":165,"screenX":0,"screenY":0,"isSecureContext":true,"devicePixelRatio":1,"toolbar":true,"locationbar":true,"ActiveXObject":false,"external":true,"mozRTCPeerConnection":false,"postMessage":true,"webkitRequestAnimationFrame":true,"BluetoothUUID":false,"netscape":false},"document":{"characterSet":"UTF-8","compatMode":"CSS1Compat","documentMode":false,"layers":false,"images":true,"location":"https://www.tiktok.com/foryou"},"webgl":{"supportedExtensions":["ANGLE_instanced_arrays","EXT_blend_minmax","EXT_color_buffer_half_float","EXT_disjoint_timer_query","EXT_float_blend","EXT_frag_depth","EXT_shader_texture_lod","EXT_texture_compression_bptc","EXT_texture_compression_rgtc","EXT_texture_filter_anisotropic","EXT_sRGB","OES_element_index_uint","OES_fbo_render_mipmap","OES_standard_derivatives","OES_texture_float","OES_texture_float_linear","OES_texture_half_float","OES_texture_half_float_linear","OES_vertex_array_object","WEBGL_color_buffer_float","WEBGL_compressed_texture_s3tc","WEBGL_compressed_texture_s3tc_srgb","WEBGL_debug_renderer_info","WEBGL_depth_texture","WEBGL_draw_buffers","WEBGL_lose_context","WEBGL_multi_draw"],"antialias":true,"blueBits":8,"depthBits":24,"greenBits":8,"maxAnisotropy":16,"maxCombinedTextureImageUnits":64,"maxCubeMapTextureSize":32768,"maxFragmentUniformVectors":4096,"maxRenderbufferSize":32768,"maxTextureImageUnits":32,"maxTextureSize":32768,"maxVaryingVectors":31,"maxVertexAttribs":16,"maxVertexTextureImageUnits":32,"maxVertexUniformVectors":4096,"shadingLanguageVersion":"WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)","stencilBits":0,"version":"WebGL 1.0 (OpenGL ES 2.0 Chromium)"},"gpu":"Google Inc. (NVIDIA)/ANGLE (NVIDIA, Vulkan 1.3.194 (NVIDIA NVIDIA GeForce GTX 1660 SUPER (0x000021C4)), NVIDIA)","plugins":"Chrome PDF Plugininternal-pdf-viewerapplication/x-google-chrome-pdf##Chrome PDF Viewermhjfbmdgcfjbbpaeojofohoefgiehjaiapplication/pdf##Native Clientinternal-nacl-pluginapplication/x-naclapplication/x-pnacl","timestamp":'+Date.now()+'}'));
