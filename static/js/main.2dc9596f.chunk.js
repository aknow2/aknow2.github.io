(this.webpackJsonpfolio=this.webpackJsonpfolio||[]).push([[0],[,,,,,,,,function(t,r,n){t.exports=n.p+"static/media/twitter.b6b1f9ec.svg"},function(t,r,n){t.exports=n.p+"static/media/fb.399cfde4.svg"},function(t,r,n){t.exports=n(17)},,,,,function(t,r,n){},function(t,r,n){},function(t,r,n){"use strict";n.r(r);var e={};n.r(e),n.d(e,"create",(function(){return s})),n.d(e,"clone",(function(){return h})),n.d(e,"copy",(function(){return l})),n.d(e,"fromValues",(function(){return m})),n.d(e,"set",(function(){return M})),n.d(e,"identity",(function(){return d})),n.d(e,"transpose",(function(){return v})),n.d(e,"invert",(function(){return E})),n.d(e,"adjoint",(function(){return b})),n.d(e,"determinant",(function(){return R})),n.d(e,"multiply",(function(){return T})),n.d(e,"translate",(function(){return g})),n.d(e,"scale",(function(){return F})),n.d(e,"rotate",(function(){return A})),n.d(e,"rotateX",(function(){return _})),n.d(e,"rotateY",(function(){return x})),n.d(e,"rotateZ",(function(){return p})),n.d(e,"fromTranslation",(function(){return w})),n.d(e,"fromScaling",(function(){return U})),n.d(e,"fromRotation",(function(){return y})),n.d(e,"fromXRotation",(function(){return D})),n.d(e,"fromYRotation",(function(){return S})),n.d(e,"fromZRotation",(function(){return P})),n.d(e,"fromRotationTranslation",(function(){return B})),n.d(e,"fromQuat2",(function(){return L})),n.d(e,"getTranslation",(function(){return O})),n.d(e,"getScaling",(function(){return N})),n.d(e,"getRotation",(function(){return I})),n.d(e,"fromRotationTranslationScale",(function(){return j})),n.d(e,"fromRotationTranslationScaleOrigin",(function(){return X})),n.d(e,"fromQuat",(function(){return k})),n.d(e,"frustum",(function(){return C})),n.d(e,"perspective",(function(){return q})),n.d(e,"perspectiveFromFieldOfView",(function(){return G})),n.d(e,"ortho",(function(){return H})),n.d(e,"lookAt",(function(){return W})),n.d(e,"targetTo",(function(){return Y})),n.d(e,"str",(function(){return V})),n.d(e,"frob",(function(){return Q})),n.d(e,"add",(function(){return J})),n.d(e,"subtract",(function(){return Z})),n.d(e,"multiplyScalar",(function(){return z})),n.d(e,"multiplyScalarAndAdd",(function(){return K})),n.d(e,"exactEquals",(function(){return $})),n.d(e,"equals",(function(){return tt})),n.d(e,"mul",(function(){return rt})),n.d(e,"sub",(function(){return nt}));var a=n(0),o=n.n(a),u=n(7),i=n.n(u),c=(n(15),n(16),1e-6),f="undefined"!==typeof Float32Array?Float32Array:Array;Math.random;Math.PI;Math.hypot||(Math.hypot=function(){for(var t=0,r=arguments.length;r--;)t+=arguments[r]*arguments[r];return Math.sqrt(t)});function s(){var t=new f(16);return f!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function h(t){var r=new f(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}function l(t,r){return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],t}function m(t,r,n,e,a,o,u,i,c,s,h,l,m,M,d,v){var E=new f(16);return E[0]=t,E[1]=r,E[2]=n,E[3]=e,E[4]=a,E[5]=o,E[6]=u,E[7]=i,E[8]=c,E[9]=s,E[10]=h,E[11]=l,E[12]=m,E[13]=M,E[14]=d,E[15]=v,E}function M(t,r,n,e,a,o,u,i,c,f,s,h,l,m,M,d,v){return t[0]=r,t[1]=n,t[2]=e,t[3]=a,t[4]=o,t[5]=u,t[6]=i,t[7]=c,t[8]=f,t[9]=s,t[10]=h,t[11]=l,t[12]=m,t[13]=M,t[14]=d,t[15]=v,t}function d(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function v(t,r){if(t===r){var n=r[1],e=r[2],a=r[3],o=r[6],u=r[7],i=r[11];t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=n,t[6]=r[9],t[7]=r[13],t[8]=e,t[9]=o,t[11]=r[14],t[12]=a,t[13]=u,t[14]=i}else t[0]=r[0],t[1]=r[4],t[2]=r[8],t[3]=r[12],t[4]=r[1],t[5]=r[5],t[6]=r[9],t[7]=r[13],t[8]=r[2],t[9]=r[6],t[10]=r[10],t[11]=r[14],t[12]=r[3],t[13]=r[7],t[14]=r[11],t[15]=r[15];return t}function E(t,r){var n=r[0],e=r[1],a=r[2],o=r[3],u=r[4],i=r[5],c=r[6],f=r[7],s=r[8],h=r[9],l=r[10],m=r[11],M=r[12],d=r[13],v=r[14],E=r[15],b=n*i-e*u,R=n*c-a*u,T=n*f-o*u,g=e*c-a*i,F=e*f-o*i,A=a*f-o*c,_=s*d-h*M,x=s*v-l*M,p=s*E-m*M,w=h*v-l*d,U=h*E-m*d,y=l*E-m*v,D=b*y-R*U+T*w+g*p-F*x+A*_;return D?(D=1/D,t[0]=(i*y-c*U+f*w)*D,t[1]=(a*U-e*y-o*w)*D,t[2]=(d*A-v*F+E*g)*D,t[3]=(l*F-h*A-m*g)*D,t[4]=(c*p-u*y-f*x)*D,t[5]=(n*y-a*p+o*x)*D,t[6]=(v*T-M*A-E*R)*D,t[7]=(s*A-l*T+m*R)*D,t[8]=(u*U-i*p+f*_)*D,t[9]=(e*p-n*U-o*_)*D,t[10]=(M*F-d*T+E*b)*D,t[11]=(h*T-s*F-m*b)*D,t[12]=(i*x-u*w-c*_)*D,t[13]=(n*w-e*x+a*_)*D,t[14]=(d*R-M*g-v*b)*D,t[15]=(s*g-h*R+l*b)*D,t):null}function b(t,r){var n=r[0],e=r[1],a=r[2],o=r[3],u=r[4],i=r[5],c=r[6],f=r[7],s=r[8],h=r[9],l=r[10],m=r[11],M=r[12],d=r[13],v=r[14],E=r[15],b=n*i-e*u,R=n*c-a*u,T=n*f-o*u,g=e*c-a*i,F=e*f-o*i,A=a*f-o*c,_=s*d-h*M,x=s*v-l*M,p=s*E-m*M,w=h*v-l*d,U=h*E-m*d,y=l*E-m*v;return t[0]=i*y-c*U+f*w,t[1]=a*U-e*y-o*w,t[2]=d*A-v*F+E*g,t[3]=l*F-h*A-m*g,t[4]=c*p-u*y-f*x,t[5]=n*y-a*p+o*x,t[6]=v*T-M*A-E*R,t[7]=s*A-l*T+m*R,t[8]=u*U-i*p+f*_,t[9]=e*p-n*U-o*_,t[10]=M*F-d*T+E*b,t[11]=h*T-s*F-m*b,t[12]=i*x-u*w-c*_,t[13]=n*w-e*x+a*_,t[14]=d*R-M*g-v*b,t[15]=s*g-h*R+l*b,t}function R(t){var r=t[0],n=t[1],e=t[2],a=t[3],o=t[4],u=t[5],i=t[6],c=t[7],f=t[8],s=t[9],h=t[10],l=t[11],m=t[12],M=t[13],d=t[14],v=r*u-n*o,E=r*i-e*o,b=n*i-e*u,R=f*M-s*m,T=f*d-h*m,g=s*d-h*M;return c*(r*g-n*T+e*R)-a*(o*g-u*T+i*R)+t[15]*(f*b-s*E+h*v)-l*(m*b-M*E+d*v)}function T(t,r,n){var e=r[0],a=r[1],o=r[2],u=r[3],i=r[4],c=r[5],f=r[6],s=r[7],h=r[8],l=r[9],m=r[10],M=r[11],d=r[12],v=r[13],E=r[14],b=r[15],R=n[0],T=n[1],g=n[2],F=n[3];return t[0]=R*e+T*i+g*h+F*d,t[1]=R*a+T*c+g*l+F*v,t[2]=R*o+T*f+g*m+F*E,t[3]=R*u+T*s+g*M+F*b,R=n[4],T=n[5],g=n[6],F=n[7],t[4]=R*e+T*i+g*h+F*d,t[5]=R*a+T*c+g*l+F*v,t[6]=R*o+T*f+g*m+F*E,t[7]=R*u+T*s+g*M+F*b,R=n[8],T=n[9],g=n[10],F=n[11],t[8]=R*e+T*i+g*h+F*d,t[9]=R*a+T*c+g*l+F*v,t[10]=R*o+T*f+g*m+F*E,t[11]=R*u+T*s+g*M+F*b,R=n[12],T=n[13],g=n[14],F=n[15],t[12]=R*e+T*i+g*h+F*d,t[13]=R*a+T*c+g*l+F*v,t[14]=R*o+T*f+g*m+F*E,t[15]=R*u+T*s+g*M+F*b,t}function g(t,r,n){var e,a,o,u,i,c,f,s,h,l,m,M,d=n[0],v=n[1],E=n[2];return r===t?(t[12]=r[0]*d+r[4]*v+r[8]*E+r[12],t[13]=r[1]*d+r[5]*v+r[9]*E+r[13],t[14]=r[2]*d+r[6]*v+r[10]*E+r[14],t[15]=r[3]*d+r[7]*v+r[11]*E+r[15]):(e=r[0],a=r[1],o=r[2],u=r[3],i=r[4],c=r[5],f=r[6],s=r[7],h=r[8],l=r[9],m=r[10],M=r[11],t[0]=e,t[1]=a,t[2]=o,t[3]=u,t[4]=i,t[5]=c,t[6]=f,t[7]=s,t[8]=h,t[9]=l,t[10]=m,t[11]=M,t[12]=e*d+i*v+h*E+r[12],t[13]=a*d+c*v+l*E+r[13],t[14]=o*d+f*v+m*E+r[14],t[15]=u*d+s*v+M*E+r[15]),t}function F(t,r,n){var e=n[0],a=n[1],o=n[2];return t[0]=r[0]*e,t[1]=r[1]*e,t[2]=r[2]*e,t[3]=r[3]*e,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=r[7]*a,t[8]=r[8]*o,t[9]=r[9]*o,t[10]=r[10]*o,t[11]=r[11]*o,t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],t}function A(t,r,n,e){var a,o,u,i,f,s,h,l,m,M,d,v,E,b,R,T,g,F,A,_,x,p,w,U,y=e[0],D=e[1],S=e[2],P=Math.hypot(y,D,S);return P<c?null:(y*=P=1/P,D*=P,S*=P,a=Math.sin(n),u=1-(o=Math.cos(n)),i=r[0],f=r[1],s=r[2],h=r[3],l=r[4],m=r[5],M=r[6],d=r[7],v=r[8],E=r[9],b=r[10],R=r[11],T=y*y*u+o,g=D*y*u+S*a,F=S*y*u-D*a,A=y*D*u-S*a,_=D*D*u+o,x=S*D*u+y*a,p=y*S*u+D*a,w=D*S*u-y*a,U=S*S*u+o,t[0]=i*T+l*g+v*F,t[1]=f*T+m*g+E*F,t[2]=s*T+M*g+b*F,t[3]=h*T+d*g+R*F,t[4]=i*A+l*_+v*x,t[5]=f*A+m*_+E*x,t[6]=s*A+M*_+b*x,t[7]=h*A+d*_+R*x,t[8]=i*p+l*w+v*U,t[9]=f*p+m*w+E*U,t[10]=s*p+M*w+b*U,t[11]=h*p+d*w+R*U,r!==t&&(t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t)}function _(t,r,n){var e=Math.sin(n),a=Math.cos(n),o=r[4],u=r[5],i=r[6],c=r[7],f=r[8],s=r[9],h=r[10],l=r[11];return r!==t&&(t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t[4]=o*a+f*e,t[5]=u*a+s*e,t[6]=i*a+h*e,t[7]=c*a+l*e,t[8]=f*a-o*e,t[9]=s*a-u*e,t[10]=h*a-i*e,t[11]=l*a-c*e,t}function x(t,r,n){var e=Math.sin(n),a=Math.cos(n),o=r[0],u=r[1],i=r[2],c=r[3],f=r[8],s=r[9],h=r[10],l=r[11];return r!==t&&(t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t[0]=o*a-f*e,t[1]=u*a-s*e,t[2]=i*a-h*e,t[3]=c*a-l*e,t[8]=o*e+f*a,t[9]=u*e+s*a,t[10]=i*e+h*a,t[11]=c*e+l*a,t}function p(t,r,n){var e=Math.sin(n),a=Math.cos(n),o=r[0],u=r[1],i=r[2],c=r[3],f=r[4],s=r[5],h=r[6],l=r[7];return r!==t&&(t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15]),t[0]=o*a+f*e,t[1]=u*a+s*e,t[2]=i*a+h*e,t[3]=c*a+l*e,t[4]=f*a-o*e,t[5]=s*a-u*e,t[6]=h*a-i*e,t[7]=l*a-c*e,t}function w(t,r){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t}function U(t,r){return t[0]=r[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=r[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function y(t,r,n){var e,a,o,u=n[0],i=n[1],f=n[2],s=Math.hypot(u,i,f);return s<c?null:(u*=s=1/s,i*=s,f*=s,e=Math.sin(r),o=1-(a=Math.cos(r)),t[0]=u*u*o+a,t[1]=i*u*o+f*e,t[2]=f*u*o-i*e,t[3]=0,t[4]=u*i*o-f*e,t[5]=i*i*o+a,t[6]=f*i*o+u*e,t[7]=0,t[8]=u*f*o+i*e,t[9]=i*f*o-u*e,t[10]=f*f*o+a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function D(t,r){var n=Math.sin(r),e=Math.cos(r);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function S(t,r){var n=Math.sin(r),e=Math.cos(r);return t[0]=e,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function P(t,r){var n=Math.sin(r),e=Math.cos(r);return t[0]=e,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=e,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function B(t,r,n){var e=r[0],a=r[1],o=r[2],u=r[3],i=e+e,c=a+a,f=o+o,s=e*i,h=e*c,l=e*f,m=a*c,M=a*f,d=o*f,v=u*i,E=u*c,b=u*f;return t[0]=1-(m+d),t[1]=h+b,t[2]=l-E,t[3]=0,t[4]=h-b,t[5]=1-(s+d),t[6]=M+v,t[7]=0,t[8]=l+E,t[9]=M-v,t[10]=1-(s+m),t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function L(t,r){var n=new f(3),e=-r[0],a=-r[1],o=-r[2],u=r[3],i=r[4],c=r[5],s=r[6],h=r[7],l=e*e+a*a+o*o+u*u;return l>0?(n[0]=2*(i*u+h*e+c*o-s*a)/l,n[1]=2*(c*u+h*a+s*e-i*o)/l,n[2]=2*(s*u+h*o+i*a-c*e)/l):(n[0]=2*(i*u+h*e+c*o-s*a),n[1]=2*(c*u+h*a+s*e-i*o),n[2]=2*(s*u+h*o+i*a-c*e)),B(t,r,n),t}function O(t,r){return t[0]=r[12],t[1]=r[13],t[2]=r[14],t}function N(t,r){var n=r[0],e=r[1],a=r[2],o=r[4],u=r[5],i=r[6],c=r[8],f=r[9],s=r[10];return t[0]=Math.hypot(n,e,a),t[1]=Math.hypot(o,u,i),t[2]=Math.hypot(c,f,s),t}function I(t,r){var n=new f(3);N(n,r);var e=1/n[0],a=1/n[1],o=1/n[2],u=r[0]*e,i=r[1]*a,c=r[2]*o,s=r[4]*e,h=r[5]*a,l=r[6]*o,m=r[8]*e,M=r[9]*a,d=r[10]*o,v=u+h+d,E=0;return v>0?(E=2*Math.sqrt(v+1),t[3]=.25*E,t[0]=(l-M)/E,t[1]=(m-c)/E,t[2]=(i-s)/E):u>h&&u>d?(E=2*Math.sqrt(1+u-h-d),t[3]=(l-M)/E,t[0]=.25*E,t[1]=(i+s)/E,t[2]=(m+c)/E):h>d?(E=2*Math.sqrt(1+h-u-d),t[3]=(m-c)/E,t[0]=(i+s)/E,t[1]=.25*E,t[2]=(l+M)/E):(E=2*Math.sqrt(1+d-u-h),t[3]=(i-s)/E,t[0]=(m+c)/E,t[1]=(l+M)/E,t[2]=.25*E),t}function j(t,r,n,e){var a=r[0],o=r[1],u=r[2],i=r[3],c=a+a,f=o+o,s=u+u,h=a*c,l=a*f,m=a*s,M=o*f,d=o*s,v=u*s,E=i*c,b=i*f,R=i*s,T=e[0],g=e[1],F=e[2];return t[0]=(1-(M+v))*T,t[1]=(l+R)*T,t[2]=(m-b)*T,t[3]=0,t[4]=(l-R)*g,t[5]=(1-(h+v))*g,t[6]=(d+E)*g,t[7]=0,t[8]=(m+b)*F,t[9]=(d-E)*F,t[10]=(1-(h+M))*F,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function X(t,r,n,e,a){var o=r[0],u=r[1],i=r[2],c=r[3],f=o+o,s=u+u,h=i+i,l=o*f,m=o*s,M=o*h,d=u*s,v=u*h,E=i*h,b=c*f,R=c*s,T=c*h,g=e[0],F=e[1],A=e[2],_=a[0],x=a[1],p=a[2],w=(1-(d+E))*g,U=(m+T)*g,y=(M-R)*g,D=(m-T)*F,S=(1-(l+E))*F,P=(v+b)*F,B=(M+R)*A,L=(v-b)*A,O=(1-(l+d))*A;return t[0]=w,t[1]=U,t[2]=y,t[3]=0,t[4]=D,t[5]=S,t[6]=P,t[7]=0,t[8]=B,t[9]=L,t[10]=O,t[11]=0,t[12]=n[0]+_-(w*_+D*x+B*p),t[13]=n[1]+x-(U*_+S*x+L*p),t[14]=n[2]+p-(y*_+P*x+O*p),t[15]=1,t}function k(t,r){var n=r[0],e=r[1],a=r[2],o=r[3],u=n+n,i=e+e,c=a+a,f=n*u,s=e*u,h=e*i,l=a*u,m=a*i,M=a*c,d=o*u,v=o*i,E=o*c;return t[0]=1-h-M,t[1]=s+E,t[2]=l-v,t[3]=0,t[4]=s-E,t[5]=1-f-M,t[6]=m+d,t[7]=0,t[8]=l+v,t[9]=m-d,t[10]=1-f-h,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function C(t,r,n,e,a,o,u){var i=1/(n-r),c=1/(a-e),f=1/(o-u);return t[0]=2*o*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*o*c,t[6]=0,t[7]=0,t[8]=(n+r)*i,t[9]=(a+e)*c,t[10]=(u+o)*f,t[11]=-1,t[12]=0,t[13]=0,t[14]=u*o*2*f,t[15]=0,t}function q(t,r,n,e,a){var o,u=1/Math.tan(r/2);return t[0]=u/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=a&&a!==1/0?(o=1/(e-a),t[10]=(a+e)*o,t[14]=2*a*e*o):(t[10]=-1,t[14]=-2*e),t}function G(t,r,n,e){var a=Math.tan(r.upDegrees*Math.PI/180),o=Math.tan(r.downDegrees*Math.PI/180),u=Math.tan(r.leftDegrees*Math.PI/180),i=Math.tan(r.rightDegrees*Math.PI/180),c=2/(u+i),f=2/(a+o);return t[0]=c,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=f,t[6]=0,t[7]=0,t[8]=-(u-i)*c*.5,t[9]=(a-o)*f*.5,t[10]=e/(n-e),t[11]=-1,t[12]=0,t[13]=0,t[14]=e*n/(n-e),t[15]=0,t}function H(t,r,n,e,a,o,u){var i=1/(r-n),c=1/(e-a),f=1/(o-u);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*f,t[11]=0,t[12]=(r+n)*i,t[13]=(a+e)*c,t[14]=(u+o)*f,t[15]=1,t}function W(t,r,n,e){var a,o,u,i,f,s,h,l,m,M,v=r[0],E=r[1],b=r[2],R=e[0],T=e[1],g=e[2],F=n[0],A=n[1],_=n[2];return Math.abs(v-F)<c&&Math.abs(E-A)<c&&Math.abs(b-_)<c?d(t):(h=v-F,l=E-A,m=b-_,a=T*(m*=M=1/Math.hypot(h,l,m))-g*(l*=M),o=g*(h*=M)-R*m,u=R*l-T*h,(M=Math.hypot(a,o,u))?(a*=M=1/M,o*=M,u*=M):(a=0,o=0,u=0),i=l*u-m*o,f=m*a-h*u,s=h*o-l*a,(M=Math.hypot(i,f,s))?(i*=M=1/M,f*=M,s*=M):(i=0,f=0,s=0),t[0]=a,t[1]=i,t[2]=h,t[3]=0,t[4]=o,t[5]=f,t[6]=l,t[7]=0,t[8]=u,t[9]=s,t[10]=m,t[11]=0,t[12]=-(a*v+o*E+u*b),t[13]=-(i*v+f*E+s*b),t[14]=-(h*v+l*E+m*b),t[15]=1,t)}function Y(t,r,n,e){var a=r[0],o=r[1],u=r[2],i=e[0],c=e[1],f=e[2],s=a-n[0],h=o-n[1],l=u-n[2],m=s*s+h*h+l*l;m>0&&(s*=m=1/Math.sqrt(m),h*=m,l*=m);var M=c*l-f*h,d=f*s-i*l,v=i*h-c*s;return(m=M*M+d*d+v*v)>0&&(M*=m=1/Math.sqrt(m),d*=m,v*=m),t[0]=M,t[1]=d,t[2]=v,t[3]=0,t[4]=h*v-l*d,t[5]=l*M-s*v,t[6]=s*d-h*M,t[7]=0,t[8]=s,t[9]=h,t[10]=l,t[11]=0,t[12]=a,t[13]=o,t[14]=u,t[15]=1,t}function V(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function Q(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}function J(t,r,n){return t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t[3]=r[3]+n[3],t[4]=r[4]+n[4],t[5]=r[5]+n[5],t[6]=r[6]+n[6],t[7]=r[7]+n[7],t[8]=r[8]+n[8],t[9]=r[9]+n[9],t[10]=r[10]+n[10],t[11]=r[11]+n[11],t[12]=r[12]+n[12],t[13]=r[13]+n[13],t[14]=r[14]+n[14],t[15]=r[15]+n[15],t}function Z(t,r,n){return t[0]=r[0]-n[0],t[1]=r[1]-n[1],t[2]=r[2]-n[2],t[3]=r[3]-n[3],t[4]=r[4]-n[4],t[5]=r[5]-n[5],t[6]=r[6]-n[6],t[7]=r[7]-n[7],t[8]=r[8]-n[8],t[9]=r[9]-n[9],t[10]=r[10]-n[10],t[11]=r[11]-n[11],t[12]=r[12]-n[12],t[13]=r[13]-n[13],t[14]=r[14]-n[14],t[15]=r[15]-n[15],t}function z(t,r,n){return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=r[3]*n,t[4]=r[4]*n,t[5]=r[5]*n,t[6]=r[6]*n,t[7]=r[7]*n,t[8]=r[8]*n,t[9]=r[9]*n,t[10]=r[10]*n,t[11]=r[11]*n,t[12]=r[12]*n,t[13]=r[13]*n,t[14]=r[14]*n,t[15]=r[15]*n,t}function K(t,r,n,e){return t[0]=r[0]+n[0]*e,t[1]=r[1]+n[1]*e,t[2]=r[2]+n[2]*e,t[3]=r[3]+n[3]*e,t[4]=r[4]+n[4]*e,t[5]=r[5]+n[5]*e,t[6]=r[6]+n[6]*e,t[7]=r[7]+n[7]*e,t[8]=r[8]+n[8]*e,t[9]=r[9]+n[9]*e,t[10]=r[10]+n[10]*e,t[11]=r[11]+n[11]*e,t[12]=r[12]+n[12]*e,t[13]=r[13]+n[13]*e,t[14]=r[14]+n[14]*e,t[15]=r[15]+n[15]*e,t}function $(t,r){return t[0]===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}function tt(t,r){var n=t[0],e=t[1],a=t[2],o=t[3],u=t[4],i=t[5],f=t[6],s=t[7],h=t[8],l=t[9],m=t[10],M=t[11],d=t[12],v=t[13],E=t[14],b=t[15],R=r[0],T=r[1],g=r[2],F=r[3],A=r[4],_=r[5],x=r[6],p=r[7],w=r[8],U=r[9],y=r[10],D=r[11],S=r[12],P=r[13],B=r[14],L=r[15];return Math.abs(n-R)<=c*Math.max(1,Math.abs(n),Math.abs(R))&&Math.abs(e-T)<=c*Math.max(1,Math.abs(e),Math.abs(T))&&Math.abs(a-g)<=c*Math.max(1,Math.abs(a),Math.abs(g))&&Math.abs(o-F)<=c*Math.max(1,Math.abs(o),Math.abs(F))&&Math.abs(u-A)<=c*Math.max(1,Math.abs(u),Math.abs(A))&&Math.abs(i-_)<=c*Math.max(1,Math.abs(i),Math.abs(_))&&Math.abs(f-x)<=c*Math.max(1,Math.abs(f),Math.abs(x))&&Math.abs(s-p)<=c*Math.max(1,Math.abs(s),Math.abs(p))&&Math.abs(h-w)<=c*Math.max(1,Math.abs(h),Math.abs(w))&&Math.abs(l-U)<=c*Math.max(1,Math.abs(l),Math.abs(U))&&Math.abs(m-y)<=c*Math.max(1,Math.abs(m),Math.abs(y))&&Math.abs(M-D)<=c*Math.max(1,Math.abs(M),Math.abs(D))&&Math.abs(d-S)<=c*Math.max(1,Math.abs(d),Math.abs(S))&&Math.abs(v-P)<=c*Math.max(1,Math.abs(v),Math.abs(P))&&Math.abs(E-B)<=c*Math.max(1,Math.abs(E),Math.abs(B))&&Math.abs(b-L)<=c*Math.max(1,Math.abs(b),Math.abs(L))}var rt=T,nt=Z;function et(){var t=new f(3);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function at(t,r,n){var e=new f(3);return e[0]=t,e[1]=r,e[2]=n,e}function ot(t,r){return t[0]*r[0]+t[1]*r[1]+t[2]*r[2]}function ut(t,r,n){var e=r[0],a=r[1],o=r[2],u=n[0],i=n[1],c=n[2];return t[0]=a*c-o*i,t[1]=o*u-e*c,t[2]=e*i-a*u,t}var it=function(t){var r=t[0],n=t[1],e=t[2];return Math.hypot(r,n,e)};!function(){var t=et()}();!function(){var t=function(){var t=new f(4);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}()}();function ct(){var t=new f(4);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function ft(t,r,n,e){var a,o,u,i,f,s=r[0],h=r[1],l=r[2],m=r[3],M=n[0],d=n[1],v=n[2],E=n[3];return(o=s*M+h*d+l*v+m*E)<0&&(o=-o,M=-M,d=-d,v=-v,E=-E),1-o>c?(a=Math.acos(o),u=Math.sin(a),i=Math.sin((1-e)*a)/u,f=Math.sin(e*a)/u):(i=1-e,f=e),t[0]=i*s+f*M,t[1]=i*h+f*d,t[2]=i*l+f*v,t[3]=i*m+f*E,t}var st=function(t,r){var n=r[0],e=r[1],a=r[2],o=r[3],u=n*n+e*e+a*a+o*o;return u>0&&(u=1/Math.sqrt(u)),t[0]=n*u,t[1]=e*u,t[2]=a*u,t[3]=o*u,t};(function(){var t=et(),r=at(1,0,0),n=at(0,1,0)})(),function(){var t=ct(),r=ct()}(),function(){var t=function(){var t=new f(9);return f!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}()}();!function(){var t=function(){var t=new f(2);return f!=Float32Array&&(t[0]=0,t[1]=0),t}()}();var ht=function(t){t&&function(t){t.width=Math.max(window.innerWidth,500),t.height=Math.max(window.innerHeight,500);var r=t.getContext("webgl");if(r){var n=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);if(n>0)if(console.log("max_vertex_texture_imaeg_unit: "+n),null!=(r.getExtension("OES_texture_float")||r.getExtension("OES_texture_half_float"))){var a=P("point_vs"),o=P("point_fs"),u=B(a,o),i=[];i[0]=r.getAttribLocation(u,"index");var c=[];c[0]=1;var f={resolution:r.getUniformLocation(u,"resolution"),texture:r.getUniformLocation(u,"texture"),pointSize:r.getUniformLocation(u,"pointScale"),model:r.getUniformLocation(u,"uModelViewMatrix"),projection:r.getUniformLocation(u,"uProjectionMatrix")},s=B(a=P("velocity_vs"),o=P("velocity_fs")),h=[];h[0]=r.getAttribLocation(s,"position");var l=[];l[0]=3;var m={resolution:r.getUniformLocation(s,"resolution"),texture:r.getUniformLocation(s,"texture"),seed:r.getUniformLocation(s,"seed")},M=B(a=P("default_vs"),o=P("default_fs")),d=[];d[0]=r.getAttribLocation(M,"position");var v=[];v[0]=3;var E=[];E[0]=r.getUniformLocation(M,"resolution");var b=[600,600],R=120*Math.PI/180,T=e.create();e.perspective(T,R,r.canvas.width/r.canvas.height,.1,200),e.translate(T,T,[0,0,-3.8]);for(var g=e.create(),F=new Array(36e4),A=0,_=F.length;A<_;A++)F[A]=A;var x=[L(F)],p=[-1,1,0,-1,-1,0,1,1,0,1,-1,0],w=[L(p)],U=N(600,600,r.FLOAT),y=N(600,600,r.FLOAT),D=null;r.disable(r.BLEND),r.blendFunc(r.ONE,r.ONE),r.bindFramebuffer(r.FRAMEBUFFER,U.frame),r.viewport(0,0,600,600),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.useProgram(M),O(w,d,v),r.uniform2fv(E[0],b),r.drawArrays(r.TRIANGLE_STRIP,0,p.length/3);var S=0;!function n(){e.translate(T,T,[0,0,.001*Math.cos(S)]);var a=S;S+=.001,e.rotate(g,g,5e-4,[1,0,1]);var o=Math.cos(S);r.disable(r.BLEND),r.bindFramebuffer(r.FRAMEBUFFER,y.frame),r.viewport(0,0,600,600),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.useProgram(s),r.bindTexture(r.TEXTURE_2D,U.texture),O(w,h,l),r.uniform2fv(m.resolution,b),r.uniform1i(m.texture,0),r.uniform2fv(m.seed,[a,o]),r.drawArrays(r.TRIANGLE_STRIP,0,p.length/3),r.enable(r.BLEND),r.viewport(0,0,t.width,t.height),r.bindFramebuffer(r.FRAMEBUFFER,null),r.clearColor(0,0,0,1),r.clearDepth(1),r.enable(r.DEPTH_TEST),r.depthFunc(r.LEQUAL),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.useProgram(u),r.bindTexture(r.TEXTURE_2D,y.texture),O(x,i,c),r.uniform2fv(f.resolution,b),r.uniform1i(f.texture,0),r.uniformMatrix4fv(f.model,!1,g),r.uniformMatrix4fv(f.projection,!1,T),r.drawArrays(r.POINTS,0,F.length),r.flush(),D=U,U=y,y=D,requestAnimationFrame(n)}()}}function P(t){var n,e=document.getElementById(t);if(e){switch(e.type){case"x-shader/x-vertex":n=r.createShader(r.VERTEX_SHADER);break;case"x-shader/x-fragment":n=r.createShader(r.FRAGMENT_SHADER);break;default:return}if(r.shaderSource(n,e.text),r.compileShader(n),r.getShaderParameter(n,r.COMPILE_STATUS))return n;console.error(r.getShaderInfoLog(n))}}function B(t,n){var e=r.createProgram();return r.attachShader(e,t),r.attachShader(e,n),r.linkProgram(e),r.getProgramParameter(e,r.LINK_STATUS)?(r.useProgram(e),e):void console.error(r.getProgramInfoLog(e))}function L(t){var n=r.createBuffer();return r.bindBuffer(r.ARRAY_BUFFER,n),r.bufferData(r.ARRAY_BUFFER,new Float32Array(t),r.STATIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,null),n}function O(t,n,e){for(var a in t)r.bindBuffer(r.ARRAY_BUFFER,t[a]),r.enableVertexAttribArray(n[a]),r.vertexAttribPointer(n[a],e[a],r.FLOAT,!1,0,0)}function N(t,n,e){var a;a=e||r.UNSIGNED_BYTE;var o=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,o);var u=r.createRenderbuffer();r.bindRenderbuffer(r.RENDERBUFFER,u),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT16,t,n),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,u);var i=r.createTexture();return r.bindTexture(r.TEXTURE_2D,i),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,t,n,0,r.RGBA,a,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,i,0),r.bindTexture(r.TEXTURE_2D,null),r.bindRenderbuffer(r.RENDERBUFFER,null),r.bindFramebuffer(r.FRAMEBUFFER,null),{frame:o,depth:u,texture:i}}}(t)},lt=function(){return o.a.createElement("canvas",{className:"bg_canvas",ref:ht})},mt=n(2),Mt=n(4),dt=n(5),vt=n(8),Et=n.n(vt),bt=n(9),Rt=n.n(bt),Tt=[{msg:"\u3053\u3093\u306b\u3061\u306f\u3002"},{msg:"\u4e09\u91cd\u770c\u6d25\u5e02\u3067\u50cd\u304f\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u958b\u767a\u8005\u3001\u91d1\u5c71\u3067\u3059\u3002"},{emoji:{label:"good",content:"\ud83d\udc4d"},msg:"Nextjs Nuxtjs Typescript WebGL Golang"},{emoji:{label:"love",content:"\ud83d\ude0d"},msg:"XP DDD Geoinformation "}],gt=function(){var t=Object(a.useState)([]),r=Object(dt.a)(t,2),n=r[0],e=r[1],u=Object(a.useState)(!1),i=Object(dt.a)(u,2),c=i[0],f=i[1];return Object(a.useEffect)((function(){setTimeout(function t(r,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return function(){var o,u=null!==(o=a[r])&&void 0!==o?o:{msg:""},i=Tt[r];if(void 0!==i)if(0===n){var c=Object(Mt.a)(a);i.emoji&&(c[r]=Object(mt.a)(Object(mt.a)({},u),{},{emoji:i.emoji}),e(c)),requestAnimationFrame(t(r,n+1,c))}else{var s=i.msg[n-1];if(s){var h=Object(Mt.a)(a);h[r]=Object(mt.a)(Object(mt.a)({},u),{},{msg:u.msg+s}),e(h),requestAnimationFrame(t(r,n+1,h))}else requestAnimationFrame(t(r+1,0,a))}else f(!0)}}(0,0),100)}),[]),o.a.createElement("div",{className:"content-card"},n.map((function(t,r){return o.a.createElement("p",{key:r},t.emoji&&o.a.createElement("span",{role:"img","aria-label":t.emoji.label},t.emoji.content),t.msg&&t.msg)})),c&&o.a.createElement("div",{className:"contact"},o.a.createElement("div",{className:"sns-container"},o.a.createElement("a",{href:"https://twitter.com/aknow21"},o.a.createElement("img",{width:64,src:Et.a,alt:"twitter",draggable:!1})),o.a.createElement("a",{href:"https://www.facebook.com/tomoaki.kanayama.3"},o.a.createElement("img",{width:64,src:Rt.a,alt:"facebook",draggable:!1})))))};var Ft=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(lt,null),o.a.createElement("div",{className:"mask"},o.a.createElement(gt,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Ft,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.2dc9596f.chunk.js.map