function goodabcd(a,b,c,d){

        if(a.length>1 && a[0]=='0') return null
        if(b.length>1 && b[0]=='0') return null
        if(c.length>1 && c[0]=='0') return null
        if(d.length>1 && d[0]=='0') return null

        if(
            parseInt(a) >=0  && parseInt(a) <=255 &&
            parseInt(b) >=0  && parseInt(b) <=255 &&
            parseInt(c) >=0  && parseInt(c) <=255 &&
            parseInt(d) >=0  && parseInt(d) <=255 
        ) {
            return [a,b,c,d].join('.')
        }

    return null
}

var restoreIpAddresses = function(s) {
    var r = []
    for(a = 1 ; a<= 3 ; a ++) {
        for(b = 1 ; b<= 3 ; b ++) {
            for(c = 1 ; c<= 3 ; c ++) {
                    var d = s.length  - a - b - c

                    A = s.substr(0,a)
                    B = s.substr(a,b)
                    C = s.substr(a+b,c)
                    D = s.substr(a+b+c,d)

                    p = goodabcd(A,B,C,D)
                    if(p){
                        r.push(p)
                    }
                      else{
                        console.log(
                                    A,B,C,D
                        )
                    }

                }  
        }
    }
    return r
};
console.log( restoreIpAddresses("0000") )
