let n=1;

function FirstSlot(N){
    setTimeout(()=>{
        const a = n*10;
    document.body.append(a);
    },2000);
    SecondSlot()
}
function SecondSlot(N){
    setTimeout(()=>{
        const b = n*9;
        document.write("<br>");
    document.body.append(b);
    },3000);
    ThirdSlot()
}
function ThirdSlot(N){
    setTimeout(()=>{
        const c = n*8;
        document.write("<br>");
    document.body.append(c);
    },4000);
    FourthSlot()
}
function FourthSlot(N){
    setTimeout(()=>{
        const e = n*7;
        document.write("<br>");
    document.body.append(e);
    },5000);
    FifthSlot()
}
function FifthSlot(N){
    setTimeout(()=>{
        const f = n*6;
        document.write("<br>");
    document.body.append(f);
    },6000);
    SixSlot()
}
function SixSlot(N){
    setTimeout(()=>{
        const g = n*5;
        document.write("<br>");
    document.body.append(g);
    },7000);
    SevenSlot()
}
function SevenSlot(N){
    setTimeout(()=>{
        const h = n*4;
        document.write("<br>");
    document.body.append(h);
    },8000);
    EightSlot()
}
function EightSlot(N){
    setTimeout(()=>{
        const i = n*3;
        document.write("<br>");
    document.body.append(i);
    },9000);
    NineSlot()
}
function NineSlot(N){
    setTimeout(()=>{
        const j = n*2;
        document.write("<br>");
    document.body.append(j);
    },10000);
    TenSlot()
}
function TenSlot(N){
    setTimeout(()=>{
        const k = n*1;
        document.write("<br>");
    document.body.append(k);
    },11000);
    ZeroSlot()
}
function ZeroSlot(N){
    setTimeout(()=>{
        const l = n*0;
        document.write("<br>");
    document.body.append(l);
    document.write("<br>");
     let d1 = "Happy Independence day";
     document.write(d1);
    
    },12000);
    Inday()
}
function Inday() {
   const msg = window.open();
   msg.document.write("HAppy");
}


FirstSlot(function () {
    SecondSlot (function () {
        ThirdSlot( function() {
            FourthSlot( function () {
                FifthSlot( function () {
                    SixSlot( function() {
                        SevenSlot(function () {
                            EightSlot(function () {
                                NineSlot(function () {
                                    TenSlot( function () {
                                        ZeroSlot( function() {
                                        
                                        });
                                    });
                                });
                            });
                        });
                    })
                });
            });
        });
    });
});
