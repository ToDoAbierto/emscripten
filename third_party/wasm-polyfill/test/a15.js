function asmModule($a,$b,$c){'use asm';
var a=new $a.Int8Array($c);
var b=new $a.Uint8Array($c);
var c=new $a.Int16Array($c);
var d=new $a.Uint16Array($c);
var e=new $a.Int32Array($c);
var f=new $a.Uint32Array($c);
var g=new $a.Float32Array($c);
var h=new $a.Float64Array($c);
var i=$a.Math.imul;
var j=$a.Math.fround;
var $d=$a.Math.acos;
var $e=$a.Math.asin;
var $f=$a.Math.atan;
var $g=$a.Math.cos;
var $h=$a.Math.sin;
var $i=$a.Math.tan;
var $j=$a.Math.exp;
var $k=$a.Math.log;
var $l=$a.Math.ceil;
var $m=$a.Math.floor;
var $n=$a.Math.sqrt;
var $o=$a.Math.abs;
var $p=$a.Math.min;
var $q=$a.Math.max;
var $r=$a.Math.atan2;
var $s=$a.Math.pow;
var $t=$a.Math.clz32;
var $u=$a.NaN;
var $v=$a.Infinity;
var $w=$b.wee;
var $x=$b.aboo;
var $y=0;
var $z=0;
var $A=j(0);
var $B=0.;
var $C=0.;
var $D=$b.foo|0;
var $E=$b.bar|0;
var $F=j($b.foopy);
var $G=+$b.baz;
var $H=+$b.quux;
function $I(){
$D=1;
$E=$D+2|0;
$G=1.;
$A=j(1);
$B=$G+2.;
$F=j($A+j(2.2));
$y=1+$z+$D+$E|0;
$G=1.1+$C+$G+$H;
$w($y|0,$z|0)|0;
$x($z|0,$B);
+$w($D|0,$C);
$w();
+$J();
$I();
}
function $J(){
return 1.;
}
return $I;
}
