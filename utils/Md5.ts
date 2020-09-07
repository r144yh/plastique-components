export default class Md5{
    ///@ts-ignore
    private static readonly m=function(e){function n(g,h){var l=g&2147483648;var k=h&2147483648;var p=g&1073741824;var q=h&1073741824;var m=(g&1073741823)+(h&1073741823);return p&q?m^2147483648^l^k:p|q?m&1073741824?m^3221225472^l^k:m^1073741824^l^k:m^l^k}function r(g,h,l,k,p,q,m){g=n(g,n(n(h&l|~h&k,p),m));return n(g<<q|g>>>32-q,h)}function t(g,h,l,k,p,q,m){g=n(g,n(n(h&k|l&~k,p),m));return n(g<<q|g>>>32-q,h)}function u(g,h,l,k,p,q,m){g=n(g,n(n(h^l^k,p),m));return n(g<<q|g>>>32-q,h)}function v(g,h,l,k,p,q,m){g=n(g,n(n(l^ (h|~k),p),m));return n(g<<q|g>>>32-q,h)}function w(g){var h="",l;for(l=0;3>=l;l++){var k=g>>>8*l&255;k="0"+k.toString(16);h+=k.substr(k.length-2,2)}return h}var f=[];e=function(g){g=g.replace(/\r\n/g,"\n");for(var h="",l=0;l<g.length;l++){var k=g.charCodeAt(l);128>k?h+=String.fromCharCode(k):(127<k&&2048>k?h+=String.fromCharCode(k>>6|192):(h+=String.fromCharCode(k>>12|224),h+=String.fromCharCode(k>>6&63|128)),h+=String.fromCharCode(k&63|128))}return h}(e);f=function(g){var h=g.length;var l=h+8;for(var k= 16*((l-l%64)/64+1),p=Array(k-1),q,m=0;m<h;)l=(m-m%4)/4,q=m%4*8,p[l]|=g.charCodeAt(m)<<q,m++;l=(m-m%4)/4;p[l]|=128<<m%4*8;p[k-2]=h<<3;p[k-1]=h>>>29;return p}(e);var a=1732584193;var b=4023233417;var c=2562383102;var d=271733878;for(e=0;e<f.length;e+=16){var x=a;var y=b;var z=c;var A=d;a=r(a,b,c,d,f[e+0],7,3614090360);d=r(d,a,b,c,f[e+1],12,3905402710);c=r(c,d,a,b,f[e+2],17,606105819);b=r(b,c,d,a,f[e+3],22,3250441966);a=r(a,b,c,d,f[e+4],7,4118548399);d=r(d,a,b,c,f[e+5],12,1200080426);c=r(c,d,a,b,f[e+ 6],17,2821735955);b=r(b,c,d,a,f[e+7],22,4249261313);a=r(a,b,c,d,f[e+8],7,1770035416);d=r(d,a,b,c,f[e+9],12,2336552879);c=r(c,d,a,b,f[e+10],17,4294925233);b=r(b,c,d,a,f[e+11],22,2304563134);a=r(a,b,c,d,f[e+12],7,1804603682);d=r(d,a,b,c,f[e+13],12,4254626195);c=r(c,d,a,b,f[e+14],17,2792965006);b=r(b,c,d,a,f[e+15],22,1236535329);a=t(a,b,c,d,f[e+1],5,4129170786);d=t(d,a,b,c,f[e+6],9,3225465664);c=t(c,d,a,b,f[e+11],14,643717713);b=t(b,c,d,a,f[e+0],20,3921069994);a=t(a,b,c,d,f[e+5],5,3593408605);d=t(d, a,b,c,f[e+10],9,38016083);c=t(c,d,a,b,f[e+15],14,3634488961);b=t(b,c,d,a,f[e+4],20,3889429448);a=t(a,b,c,d,f[e+9],5,568446438);d=t(d,a,b,c,f[e+14],9,3275163606);c=t(c,d,a,b,f[e+3],14,4107603335);b=t(b,c,d,a,f[e+8],20,1163531501);a=t(a,b,c,d,f[e+13],5,2850285829);d=t(d,a,b,c,f[e+2],9,4243563512);c=t(c,d,a,b,f[e+7],14,1735328473);b=t(b,c,d,a,f[e+12],20,2368359562);a=u(a,b,c,d,f[e+5],4,4294588738);d=u(d,a,b,c,f[e+8],11,2272392833);c=u(c,d,a,b,f[e+11],16,1839030562);b=u(b,c,d,a,f[e+14],23,4259657740); a=u(a,b,c,d,f[e+1],4,2763975236);d=u(d,a,b,c,f[e+4],11,1272893353);c=u(c,d,a,b,f[e+7],16,4139469664);b=u(b,c,d,a,f[e+10],23,3200236656);a=u(a,b,c,d,f[e+13],4,681279174);d=u(d,a,b,c,f[e+0],11,3936430074);c=u(c,d,a,b,f[e+3],16,3572445317);b=u(b,c,d,a,f[e+6],23,76029189);a=u(a,b,c,d,f[e+9],4,3654602809);d=u(d,a,b,c,f[e+12],11,3873151461);c=u(c,d,a,b,f[e+15],16,530742520);b=u(b,c,d,a,f[e+2],23,3299628645);a=v(a,b,c,d,f[e+0],6,4096336452);d=v(d,a,b,c,f[e+7],10,1126891415);c=v(c,d,a,b,f[e+14],15,2878612391); b=v(b,c,d,a,f[e+5],21,4237533241);a=v(a,b,c,d,f[e+12],6,1700485571);d=v(d,a,b,c,f[e+3],10,2399980690);c=v(c,d,a,b,f[e+10],15,4293915773);b=v(b,c,d,a,f[e+1],21,2240044497);a=v(a,b,c,d,f[e+8],6,1873313359);d=v(d,a,b,c,f[e+15],10,4264355552);c=v(c,d,a,b,f[e+6],15,2734768916);b=v(b,c,d,a,f[e+13],21,1309151649);a=v(a,b,c,d,f[e+4],6,4149444226);d=v(d,a,b,c,f[e+11],10,3174756917);c=v(c,d,a,b,f[e+2],15,718787259);b=v(b,c,d,a,f[e+9],21,3951481745);a=n(a,x);b=n(b,y);c=n(c,z);d=n(d,A)}return(w(a)+w(b)+w(c)+ w(d)).toLowerCase()};
    public static hash(value: any): string{
        if(typeof value === 'object')
            value = JSON.stringify(value);
        return this.m(value.toString())
    }
}