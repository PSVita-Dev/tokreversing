function rest(rand, encoded) {
    var t, a = [],
        n = 0,
        f = "";
    for (var i = 0; i < 256; i++) {
        a[i] = i;
    }
    for (var c = 0; c < 256; c++) {
        n = (n + a[c] + rand.charCodeAt(c % rand.length)) % 256
        t = a[c];
        a[c] = a[n];
        a[n] = t;
    }
    var o = 0;
    n = 0;
    for (var s = 0; s < encoded.length; s++) {
        n = (n + a[o = (o + 1) % 256]) % 256;
        t = a[o]
        a[o] = a[n]
        a[n] = t
        f += String.fromCharCode(255 & (encoded.charCodeAt(s) ^ a[(a[o] + a[n]) % 256]));
    }
    return f;
}

function start(input) {
    let b = [];
    u = 0;

    b[0] = atob(input).substring(0, 1);
    b[1] = 0;
    b[2] = input;
    let l = btoa(b[0]);
    let r = atob(input).substring(1);
    let resb = [];
    resb[0] = l;
    resb[1] = btoa(r);
    return resb;
}

function decryptResource(resp) {

    res = start(resp);
    return rest(atob(res[0]), atob(res[1]));
}

//from https://mssdk-va.tiktok.com/web/resource response
console.log(decryptResource("XseuP6EPJ+m4utbdaF4wMS8uIOBcWPYffzyPSAHtpN5rkqORrlYilYFwKoz1TpU/TE075oEkLlbR9Z0A7dkRYrUeEC+l7JQMfZqvli7YCF3jSho6hP5H6Cbk+MVd8mZxQURr5od+sGaZyO5Ts6I14zUXBE8p/CI/m4Csm7BgfSGOKbJi1bVEVFGUDGQgsnhMzwPEQ+shaLXwzBerM6dqKCQvJ/a+SLr9LkhZHh1OzNH7V/ZbX5G1c8jtDXOn7CzFk3hV6UEpMoIT2P9M+LMo9O0DEadKv/phRFNKU955pQ9UaCyPdQVUDFWBmm+bcV/JXeLlueE9/hrqeLMzaWXnRCOV8LVXinrgQToNBL32LPJnvYtIjvakteUbrFQXpRvT/xqMRnnyUC3/Gf1lcB5hZWEarfvfSSxoCcJztPAfqhutoztQIR9kNEQBP24fGd2FFNBwA+CegIEL/ep0gA7mohz+vBVEk/4kQrKPOVRlFY9KM0tGTR0="));
