var nQueens =
(n)=>{var a,s=0;a=Math.pow(2,n)-1;var nr=(l,c,r)=>{var b,p;c==a?s++:0;p=~(l|c|r)&a;while(p!==0){b=p&-p;p=p-b;nr((l|b)<<1,c|b,(r|b)>>1);}};nr(0,0,0);return s}


for (var i = 1; i <= 15; i++) {
  console.log('n:', i, 'solutions:', nQueens(i));
}