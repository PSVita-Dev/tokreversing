function final(s) {
  return s.replace(/[A-Z0-9+/=]/gi, c =>
    "Dkdpgh4ZKsQB80/Mfvw36XI1R25-WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe="[
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(c) ] )
}

function rest2(rand, o) {
  for (var a, t = [], e = 0, n = "", f = 0; f < 256; f++) {
    t[f] = f;
  }

  for (var h = 0; h < 256; h++) {
    e = (e + t[h] + rand.charCodeAt(h % rand.length)) % 256;
    a = t[h];
    t[h] = t[e];
    t[e] = a;
  }

  var c = 0;
  e = 0;

  for (var v = 0; v < o.length; v++) {
    e = (e + t[c = (c + 1) % 256]) % 256;
    a = t[c];
    t[c] = t[e];
    t[e] = a;
    n += String.fromCharCode(255 & (o.charCodeAt(v) ^ t[(t[c] + t[e]) % 256]));
  }

  return n;
}

function enc_eq(input) {
        let num = Math.floor(Math.random() * 256);
        
//         console.log(num);
       
        let rand = String.fromCharCode(num);
        let a = rest2(rand,input);
        
        a = rand+a;

        return final(btoa(a));
}

console.log(enc_eq("aid=1988&region=va-tiktok&location=www.tiktok.com/"));
