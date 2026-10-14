const INDEX_BODY="<title>Outsiders<\/title>\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n<link href=\"https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=Figtree:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"app.css\">\n<div id=\"root\"><\/div>\n<script type=\"application/json\" id=\"catjson\">/*CATJSON*/<\/script>\n<script src=\"app.js\" charset=\"utf-8\"><\/script>";
document.getElementById("root").innerHTML="<div class=\"ownerbar\" id=\"ownerBar\"><span>Modo dono da loja<\/span><span class=\"ob\"><button data-a=\"openAdmin\">Painel<\/button><button data-a=\"verCliente\">Ver como cliente<\/button><\/span><\/div><button class=\"ownerback\" id=\"ownerBack\" data-a=\"voltaDono\">Voltar ao modo dono<\/button>\n<div class=\"strip\"><div class=\"wrap\"><span>Frete gr\u00e1tis acima de R$ 299<\/span><span>Troca em at\u00e9 7 dias<\/span><span>D\u00favidas? Chama no WhatsApp<\/span><\/div><\/div>\n\n<header class=\"top\"><div class=\"wrap\">\n  <a class=\"brand\" href=\"#topo\" aria-label=\"Outsiders\"><img src=\"img/logo.png\" alt=\"Outsiders\" width=\"797\" height=\"696\"><\/a>\n  <nav class=\"nav\"><a href=\"#loja\">Loja<\/a><button class=\"navbtn\" data-a=\"openTrack\">Acompanhar pedido<\/button><a href=\"#duvidas\">D\u00favidas<\/a><\/nav>\n  <button class=\"adminbtn\" id=\"adminBtn\" data-a=\"openAdmin\" hidden>Painel da loja<\/button>\n  <button class=\"cartbtn\" data-a=\"openCart\" aria-label=\"Abrir carrinho\">Carrinho <span class=\"n\" id=\"cartN\">0<\/span><\/button>\n<\/div><\/header>\n\n<main id=\"topo\">\n<section class=\"hero\"><div class=\"wrap\">\n  <img class=\"herologo\" src=\"img/logo.png\" alt=\"Outsiders\" width=\"797\" height=\"696\">\n  <h1>Feita pra quem <em>n\u00e3o segue<\/em> o padr\u00e3o.<\/h1>\n  <p>Camisetas oversized com estampa grande nas costas e logo discreto na frente. Escolha o modelo, a cor e o tamanho, pague por Pix ou cart\u00e3o e acompanhe o pedido pelo site.<\/p>\n  <div class=\"cta\"><a class=\"btn\" href=\"#loja\">Ver a cole\u00e7\u00e3o<\/a><button class=\"btn alt\" data-a=\"openTrack\">Acompanhar pedido<\/button><a class=\"btn wa\" id=\"heroWa\" href=\"#\" target=\"_blank\" rel=\"noopener\">Falar no WhatsApp<\/a><\/div>\n<\/div><\/section>\n\n<section class=\"shop\" id=\"loja\"><div class=\"wrap\">\n  <h2>A cole\u00e7\u00e3o<\/h2>\n  <div class=\"bar\">\n    <div class=\"field search\"><label for=\"q\">Buscar camiseta<\/label><input type=\"search\" id=\"q\" placeholder=\"Ex.: serpente, coroa, preta\"><\/div>\n    <div class=\"field\" style=\"min-width:200px\"><label for=\"sort\">Ordenar<\/label>\n      <select id=\"sort\"><option value=\"destaque\">Destaques<\/option><option value=\"menor\">Menor pre\u00e7o<\/option><option value=\"maior\">Maior pre\u00e7o<\/option><option value=\"nota\">Melhor avaliadas<\/option><\/select><\/div>\n  <\/div>\n  <div class=\"filters\">\n    <div class=\"row\"><span class=\"lbl\">Categoria<\/span><span class=\"row\" id=\"fCat\"><\/span><\/div>\n    <div class=\"row\"><span class=\"lbl\">Estilo<\/span><span class=\"row\" id=\"fStyle\"><\/span><\/div>\n    <div class=\"row\"><span class=\"lbl\">Cor<\/span><span class=\"row\" id=\"fCor\"><\/span><\/div>\n    <div class=\"row\"><span class=\"lbl\">Tamanho<\/span><span class=\"row\" id=\"fSize\"><\/span><\/div>\n  <\/div>\n  <p class=\"count\" id=\"count\"><\/p>\n  <div class=\"grid\" id=\"grid\"><\/div>\n<\/div><\/section>\n\n<section class=\"faq\" id=\"duvidas\"><div class=\"wrap\">\n  <div>\n    <h2>Ficou com d\u00favida?<\/h2>\n    <p class=\"note\" style=\"font-size:15px;margin:0 0 16px\">Tamanho, prazo, troca ou pagamento. A gente responde direto no WhatsApp.<\/p>\n    <a class=\"btn wa\" id=\"faqWa\" href=\"#\" target=\"_blank\" rel=\"noopener\">Chamar no WhatsApp<\/a>\n  <\/div>\n  <div>\n    <details><summary>Como escolher o tamanho?<\/summary><p>Cada produto tem a tabela de medidas na janela do produto. Me\u00e7a uma camiseta que voc\u00ea j\u00e1 usa, compare a largura e o comprimento e escolha o tamanho mais pr\u00f3ximo. Todos os modelos s\u00e3o oversized, com caimento solto.<\/p><\/details>\n    <details><summary>Como funciona o pagamento?<\/summary><p>Ao finalizar, voc\u00ea envia o pedido para a loja pelo WhatsApp e paga por Pix (QR Code ou copia e cola) ou cart\u00e3o. A loja confere o pagamento e atualiza o status do pedido.<\/p><\/details>\n    <details><summary>Como acompanho meu pedido?<\/summary><p>Clique em Acompanhar pedido e digite o n\u00famero que aparece ao finalizar a compra (formato OUT-0000-0000). Voc\u00ea v\u00ea cada etapa: recebido, pagamento confirmado, em separa\u00e7\u00e3o, enviado e entregue, com data e c\u00f3digo de rastreio.<\/p><\/details>\n    <details><summary>Qual o prazo e o valor do frete?<\/summary><p>No carrinho voc\u00ea informa o CEP e v\u00ea uma estimativa do frete. Pedidos acima de R$ 299 t\u00eam frete gr\u00e1tis. O prazo final \u00e9 confirmado na conversa do pedido.<\/p><\/details>\n    <details><summary>Posso trocar ou devolver?<\/summary><p>Sim. Em compras online voc\u00ea pode desistir em at\u00e9 7 dias ap\u00f3s receber o produto. Para troca de tamanho, fale com a gente pelo WhatsApp com o n\u00famero do pedido.<\/p><\/details>\n    <details><summary>Como deixo minha avalia\u00e7\u00e3o?<\/summary><p>Abra a camiseta que voc\u00ea comprou, role at\u00e9 Avalia\u00e7\u00f5es e conte como foi: nota, nome e coment\u00e1rio.<\/p><\/details>\n  <\/div>\n<\/div><\/section>\n<\/main>\n\n<footer><div class=\"wrap\"><span>Outsiders \u00b7 camisetas<\/span><span>Atendimento pelo WhatsApp<\/span><\/div><\/footer>\n\n<a class=\"fab\" id=\"fab\" href=\"#\" target=\"_blank\" rel=\"noopener\" aria-label=\"Falar no WhatsApp\">WhatsApp<\/a>\n\n<div class=\"veil\" id=\"veil\" data-a=\"closeAll\"><\/div>\n<aside class=\"drawer\" id=\"drawer\" aria-label=\"Carrinho\" aria-hidden=\"true\"><\/aside>\n<div class=\"modal\" id=\"modal\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Produto\"><div class=\"sheet\" id=\"sheet\"><\/div><\/div>\n<div class=\"modal\" id=\"track\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Acompanhar pedido\"><div class=\"sheet narrow\" id=\"trackSheet\"><\/div><\/div>\n<div class=\"modal\" id=\"admin\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Painel da loja\"><div class=\"sheet narrow\" id=\"adminSheet\"><\/div><\/div>\n<div class=\"lb\" id=\"lb\" data-a=\"lbFechar\" hidden><img id=\"lbImg\" alt=\"\"><button class=\"x\" data-a=\"lbFechar\" aria-label=\"Fechar\">\u2715<\/button><\/div>\n<div class=\"toast\" id=\"toast\" role=\"status\"><\/div>\n";
/* ============ CONFIGURACAO DA LOJA (edite aqui) ============ */
const STORE = {
  nome: "Outsiders",
  whatsapp: "5500000000000",      // DDI + DDD + numero, so digitos. Ex.: 5519999998888
  freteGratisAcima: 299,
  cupons: { OUTSIDER10: 0.10 },   // codigo: desconto (0.10 = 10%)
  pix: { chave: "", nome: "Outsiders", cidade: "Brasil" },  // chave Pix da loja (CPF/CNPJ, e-mail, celular ou aleatoria), nome e cidade do recebedor
  linkCartao: ""                  // link de pagamento (Mercado Pago, InfinitePay, Stripe...) para cartao
};

const COR = {
  musgo:["Verde musgo","#4B5236"], off:["Off-white","#D8CFBD"], roxo:["Roxo","#5A2F78"],
  marrom:["Marrom","#5B3825"], preto:["Preto","#1B1B1B"], grafite:["Grafite","#4A4A4E"]
};
const TAMANHOS = ["P","M","G","GG","XGG"];
const MEDIDAS = {P:[54,70],M:[57,72],G:[60,74],GG:[63,76],XGG:[66,78]};
const V = (c,k)=>({c,f:`img/${k}-f.jpg`,b:`img/${k}-b.jpg`});
const T = (n,c)=>V(c,"t"+String(n).padStart(2,"0"));
/* esgotado: lista de tamanhos sem estoque, ex.: esgotado:["XGG"] */
const P = [
 {id:"justica",nome:"Justiça Cega",cat:"Esculturas",estilo:"Streetwear",preco:159.9,v:[V("musgo","justica-musgo"),V("marrom","justica-marrom")],desc:"Costas com busto de estátua de olhos vendados, arame farpado e coroa. Frente com logo pequeno no peito. Acabamento lavado."},
 {id:"marionete",nome:"Marionete",cat:"Esculturas",estilo:"Streetwear",preco:159.9,v:[V("off","marionete-off"),V("preto","marionete-preto")],desc:"Uma mão controla o boneco por fios, sob o logo em letras góticas. Frente com logo pequeno no peito."},
 {id:"mundo",nome:"Mundo Acorrentado",cat:"Esculturas",estilo:"Streetwear",preco:159.9,v:[V("roxo","mundo-roxo"),V("marrom","mundo-marrom")],desc:"Globo preso por correntes e arame farpado, com a coroa Outsiders no alto. Frente com logo pequeno."},
 {id:"estrela",nome:"Estrela Espinhosa",cat:"Símbolos",estilo:"Streetwear",preco:149.9,v:[V("musgo","estrela-musgo")],desc:"Logo gótico cruzado por uma estrela e arame farpado nas costas. Frente com estrela e logo pequenos."},
 {id:"rei",nome:"Rei Acorrentado",cat:"Esculturas",estilo:"Vintage",preco:159.9,v:[V("off","rei-off")],desc:"Busto com coroa de espinhos e correntes sobre o rosto. Costas com estampa grande, frente discreta."},
 {id:"serpente-estelar",nome:"Serpente Estelar",cat:"Símbolos",estilo:"Vintage",preco:149.9,v:[V("roxo","serpente-roxo")],desc:"Serpente enrolada numa estrela, cercada de brilhos, com o logo na base. Acabamento lavado."},
 {id:"coroa-real",nome:"Coroa Real",cat:"Símbolos",estilo:"Streetwear",preco:149.9,v:[V("preto","coroa-preto")],desc:"Coroa grande atravessada por uma lâmina e o logo gótico embaixo. Frente com estrela e logo pequenos."},
 {id:"graffiti-classica",nome:"Graffiti Clássica",cat:"Graffiti",estilo:"Streetwear",preco:149.9,v:[T(1,"preto")],desc:"Logo em letras de graffiti pingando nas costas. Na frente, logo pequeno com coroa."},
 {id:"college-vintage",nome:"College Vintage",cat:"Clássicas",estilo:"Vintage",preco:139.9,v:[T(2,"preto")],desc:"Letras universitárias e monograma OC. Costas com data e frase, frente com letras menores."},
 {id:"coroa-espinhos",nome:"Coroa de Espinhos",cat:"Símbolos",estilo:"Minimalista",preco:139.9,v:[T(3,"preto")],desc:"Coroa dentro de um círculo de espinhos, pequena na frente e grande nas costas."},
 {id:"fe",nome:"Fé",cat:"Símbolos",estilo:"Minimalista",preco:139.9,v:[T(4,"preto")],desc:"Frente minimalista com o logo. Costas com logo em graffiti, cruz e frase."},
 {id:"chamas",nome:"Chamas",cat:"Símbolos",estilo:"Streetwear",preco:149.9,v:[T(5,"preto")],desc:"Chamas nas mangas e nas costas, com o logo em graffiti. Monograma pequeno na frente."},
 {id:"anjo",nome:"Anjo",cat:"Esculturas",estilo:"Vintage",preco:149.9,v:[T(6,"off")],desc:"Estátua de anjo em quadro nas costas, com frase embaixo. Frente com logo e coroa."},
 {id:"estrelas-minimas",nome:"Estrelas Mínimas",cat:"Símbolos",estilo:"Minimalista",preco:139.9,v:[T(7,"musgo")],desc:"Costas com logo em letras grossas e estrela. Frente limpa, com logo pequeno e coroa."},
 {id:"cidade",nome:"Cidade",cat:"Cenas",estilo:"Streetwear",preco:149.9,v:[T(8,"preto")],desc:"Rua de cidade em preto e branco nas costas, com frase embaixo. Monograma na frente."},
 {id:"estrela-gasta",nome:"Estrela Gasta",cat:"Símbolos",estilo:"Minimalista",preco:149.9,v:[T(9,"grafite")],desc:"Estrela grande desgastada nas costas. Acabamento lavado, frente com texto pequeno."},
 {id:"drip",nome:"Drip",cat:"Graffiti",estilo:"Streetwear",preco:149.9,v:[T(10,"preto")],desc:"Logo em graffiti grande na frente. Costas minimalistas, com frase e cruz."},
 {id:"serpente-gotica",nome:"Serpente Gótica",cat:"Símbolos",estilo:"Vintage",preco:149.9,v:[T(11,"preto")],desc:"Serpente sob o logo em letras góticas nas costas, com a frase da marca."},
 {id:"coroa-tag",nome:"Coroa Tag",cat:"Graffiti",estilo:"Streetwear",preco:149.9,v:[T(12,"off")],desc:"Coroa e logo pintados à mão nas costas. Frente minimalista."},
 {id:"tribal",nome:"Tribal",cat:"Símbolos",estilo:"Streetwear",preco:149.9,v:[T(13,"preto")],desc:"Desenho tribal grande nas costas e versão pequena na frente."},
 {id:"ondas",nome:"Ondas",cat:"Cenas",estilo:"Minimalista",preco:149.9,v:[T(14,"grafite")],desc:"Mar agitado em quadro nas costas, com frase embaixo. Acabamento lavado."},
 {id:"real-ones",nome:"Real Ones",cat:"Clássicas",estilo:"Vintage",preco:139.9,v:[T(15,"preto")],desc:"Letras universitárias na frente. Costas com coroa e a frase Real Ones Stay."},
 {id:"arame-farpado",nome:"Arame Farpado",cat:"Símbolos",estilo:"Streetwear",preco:149.9,v:[T(16,"preto")],desc:"Arame farpado nas mangas, logo em graffiti nas costas e coroa na frente."},
 {id:"estatua",nome:"Estátua",cat:"Esculturas",estilo:"Streetwear",preco:149.9,v:[T(17,"preto")],desc:"Busto de estátua sob o logo em graffiti, com frase embaixo. Frente minimalista."},
 {id:"raios",nome:"Raios",cat:"Símbolos",estilo:"Streetwear",preco:149.9,v:[T(18,"preto")],desc:"Raios correndo pelas mangas e pelas costas, com logo e frase."},
 {id:"monograma-graffiti",nome:"Monograma Graffiti",cat:"Graffiti",estilo:"Vintage",preco:149.9,v:[T(19,"off")],desc:"Logo em graffiti grande nas costas e monograma OC pequeno na frente."},
 {id:"bloco-de-texto",nome:"Bloco de Texto",cat:"Clássicas",estilo:"Minimalista",preco:139.9,v:[T(20,"preto")],desc:"Costas com logo em letras retas e bloco de texto. Frente minimalista."}
].map((p,i)=>({...p,ordem:i,esgotado:p.esgotado||[]}));

const CATS = ["Todas","Graffiti","Clássicas","Esculturas","Símbolos","Cenas"];
const ESTILOS = ["Todos","Minimalista","Streetwear","Vintage"];
const CORES = ["Todas",...Object.keys(COR)];
const ETAPAS = [["recebido","Pedido recebido"],["pago","Pagamento confirmado"],["separacao","Em separação"],["enviado","Enviado"],["entregue","Entregue"]];
const ROT = Object.fromEntries(ETAPAS.concat([["cancelado","Cancelado"]]));

/* ---- Pix (BR Code) + QR Code, sem dependencias ---- */
function emv(id,val){return id+String(val.length).padStart(2,"0")+val}
function crc16(str){let c=0xFFFF;for(let i=0;i<str.length;i++){c^=str.charCodeAt(i)<<8;for(let j=0;j<8;j++)c=(c&0x8000)?(((c<<1)^0x1021)&0xFFFF):((c<<1)&0xFFFF)}return c.toString(16).toUpperCase().padStart(4,"0")}
function asciiUp(s,max){return String(s).normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^A-Za-z0-9 ]/g,"").toUpperCase().trim().slice(0,max)||"BRASIL"}
function pixPayload(pix,valor,txid){
  const mai=emv("00","BR.GOV.BCB.PIX")+emv("01",pix.chave);
  let s=emv("00","01")+emv("01","11")+emv("26",mai)+emv("52","0000")+emv("53","986")+emv("54",valor.toFixed(2))+emv("58","BR")+emv("59",asciiUp(pix.nome,25))+emv("60",asciiUp(pix.cidade,15))+emv("62",emv("05",String(txid).replace(/[^A-Za-z0-9]/g,"").slice(0,25)||"***"));
  s+="6304";return s+crc16(s)
}
const QR=(function(){
  const ECC={L:{cw:[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],bl:[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],fmt:1},
             M:{cw:[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],bl:[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],fmt:0}};
  const rawModules=v=>{let r=(16*v+128)*v+64;if(v>=2){const n=Math.floor(v/7)+2;r-=(25*n-10)*n-55;if(v>=7)r-=36}return r};
  const dataCw=(v,e)=>Math.floor(rawModules(v)/8)-e.cw[v]*e.bl[v];
  const mul=(x,y)=>{let z=0;for(let i=7;i>=0;i--){z=(z<<1)^((z>>>7)*0x11D);z^=((y>>>i)&1)*x}return z&255};
  const rsDiv=(data,deg)=>{const g=new Array(deg).fill(0);g[deg-1]=1;let r=1;for(let i=0;i<deg;i++){for(let j=0;j<deg;j++){g[j]=mul(g[j],r);if(j+1<deg)g[j]^=g[j+1]}r=mul(r,0x02)}
    const res=new Array(deg).fill(0);for(const b of data){const f=b^res.shift();res.push(0);for(let i=0;i<deg;i++)res[i]^=mul(g[i],f)}return res};
  const alignPos=v=>{if(v===1)return[];const n=Math.floor(v/7)+2,step=v===32?26:Math.ceil((v*4+4)/(n*2-2))*2,r=[6];for(let p=v*4+10;r.length<n;p-=step)r.splice(1,0,p);return r};
  function encode(text,level,force){
    const e=ECC[level||"M"];const bytes=Array.from(new TextEncoder().encode(text));
    let ver=1;for(;;ver++){if(ver>40)throw new Error("texto longo demais");const cc=ver<=9?8:16;if(4+cc+bytes.length*8<=dataCw(ver,e)*8)break}
    const bits=[];const put=(val,len)=>{for(let i=len-1;i>=0;i--)bits.push((val>>>i)&1)};
    put(4,4);put(bytes.length,ver<=9?8:16);bytes.forEach(b=>put(b,8));
    const cap=dataCw(ver,e)*8;put(0,Math.min(4,cap-bits.length));put(0,(8-bits.length%8)%8);
    for(let p=0xEC;bits.length<cap;p^=0xEC^0x11)put(p,8);
    const data=[];for(let i=0;i<bits.length;i+=8){let b=0;for(let j=0;j<8;j++)b=(b<<1)|bits[i+j];data.push(b)}
    const nb=e.bl[ver],eccLen=e.cw[ver],raw=Math.floor(rawModules(ver)/8),short=nb-raw%nb,shortLen=Math.floor(raw/nb);
    const blocks=[];for(let i=0,k=0;i<nb;i++){const len=shortLen-eccLen+(i<short?0:1);const d=data.slice(k,k+len);k+=len;const ec=rsDiv(d,eccLen);if(i<short)d.push(0);blocks.push(d.concat(ec))}
    const all=[];for(let i=0;i<blocks[0].length;i++)blocks.forEach((b,j)=>{if(i!==shortLen-eccLen||j>=short)all.push(b[i])});
    const n=ver*4+17;const m=Array.from({length:n},()=>new Array(n).fill(false)),fn=Array.from({length:n},()=>new Array(n).fill(false));
    const set=(x,y,d)=>{m[y][x]=d;fn[y][x]=true};
    for(let i=0;i<n;i++){set(6,i,i%2===0);set(i,6,i%2===0)}
    const finder=(cx,cy)=>{for(let dy=-4;dy<=4;dy++)for(let dx=-4;dx<=4;dx++){const d=Math.max(Math.abs(dx),Math.abs(dy)),x=cx+dx,y=cy+dy;if(x>=0&&x<n&&y>=0&&y<n)set(x,y,d!==2&&d!==4)}};
    finder(3,3);finder(n-4,3);finder(3,n-4);
    const ap=alignPos(ver);ap.forEach((a,i)=>ap.forEach((b,j)=>{if((i===0&&j===0)||(i===0&&j===ap.length-1)||(i===ap.length-1&&j===0))return;for(let dy=-2;dy<=2;dy++)for(let dx=-2;dx<=2;dx++)set(a+dx,b+dy,Math.max(Math.abs(dx),Math.abs(dy))!==1)}));
    const drawFormat=mask=>{const dat=(e.fmt<<3)|mask;let r=dat;for(let i=0;i<10;i++)r=(r<<1)^((r>>>9)*0x537);const bitsF=((dat<<10)|r)^0x5412;const gb=i=>((bitsF>>>i)&1)!==0;
      for(let i=0;i<=5;i++)set(8,i,gb(i));set(8,7,gb(6));set(8,8,gb(7));set(7,8,gb(8));for(let i=9;i<15;i++)set(14-i,8,gb(i));
      for(let i=0;i<8;i++)set(n-1-i,8,gb(i));for(let i=8;i<15;i++)set(8,n-15+i,gb(i));set(8,n-8,true)};
    drawFormat(0);
    if(ver>=7){let r=ver;for(let i=0;i<12;i++)r=(r<<1)^((r>>>11)*0x1F25);const vb=(ver<<12)|r;for(let i=0;i<18;i++){const b=((vb>>>i)&1)!==0,a=n-11+i%3,c=Math.floor(i/3);set(a,c,b);set(c,a,b)}}
    let k=0;for(let right=n-1;right>=1;right-=2){if(right===6)right=5;for(let vert=0;vert<n;vert++)for(let j=0;j<2;j++){const x=right-j,up=((right+1)&2)===0,y=up?n-1-vert:vert;if(!fn[y][x]&&k<all.length*8){m[y][x]=((all[k>>>3]>>>(7-(k&7)))&1)!==0;k++}}}
    const applyMask=mk=>{for(let y=0;y<n;y++)for(let x=0;x<n;x++){let inv;switch(mk){case 0:inv=(x+y)%2===0;break;case 1:inv=y%2===0;break;case 2:inv=x%3===0;break;case 3:inv=(x+y)%3===0;break;case 4:inv=(Math.floor(x/3)+Math.floor(y/2))%2===0;break;case 5:inv=x*y%2+x*y%3===0;break;case 6:inv=(x*y%2+x*y%3)%2===0;break;default:inv=((x+y)%2+x*y%3)%2===0}if(!fn[y][x]&&inv)m[y][x]=!m[y][x]}};
    const penalty=()=>{let res=0;const run=(get)=>{for(let a=0;a<n;a++){let c=get(a,0),len=1;for(let b=1;b<n;b++){const v=get(a,b);if(v===c){len++;if(len===5)res+=3;else if(len>5)res++}else{c=v;len=1}}}};
      run((a,b)=>m[a][b]);run((a,b)=>m[b][a]);
      for(let y=0;y<n-1;y++)for(let x=0;x<n-1;x++){const c=m[y][x];if(c===m[y][x+1]&&c===m[y+1][x]&&c===m[y+1][x+1])res+=3}
      const P1=[0,0,0,0,1,0,1,1,1,0,1],P2=[1,0,1,1,1,0,1,0,0,0,0];
      const chk=(get)=>{for(let a=0;a<n;a++)for(let b=0;b<=n-11;b++){let f1=true,f2=true;for(let i=0;i<11;i++){const v=get(a,b+i)?1:0;if(v!==P1[i])f1=false;if(v!==P2[i])f2=false}if(f1)res+=40;if(f2)res+=40}};
      chk((a,b)=>m[a][b]);chk((a,b)=>m[b][a]);
      let dark=0;m.forEach(r=>r.forEach(v=>{if(v)dark++}));res+=Math.floor(Math.abs(dark*20-n*n*10)/(n*n))*10;return res};
    let best=0,bp=Infinity;for(let mk=0;mk<8;mk++){applyMask(mk);drawFormat(mk);const p=penalty();if(p<bp){bp=p;best=mk}applyMask(mk)}
    if(force!==undefined)best=force;applyMask(best);drawFormat(best);return m
  }
  function svg(text,px){const m=encode(text,"M"),n=m.length,q=4;let d="";for(let y=0;y<n;y++){let x=0;while(x<n){if(m[y][x]){let s=x;while(x<n&&m[y][x])x++;d+=`M${s+q} ${y+q}h${x-s}v1h-${x-s}z`}else x++}}
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n+2*q} ${n+2*q}" width="${px}" height="${px}" shape-rendering="crispEdges" role="img" aria-label="QR Code Pix"><rect width="100%" height="100%" fill="#fff"/><path d="${d}" fill="#000"/></svg>`}
  return{encode,svg}
})();


/* ============ UTIL ============ */
const $ = (s,r=document)=>r.querySelector(s);
const brl = n=>n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const esc = s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fmtDt = t=>new Date(t).toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"});
const LS = {
  get(k,d){try{const v=localStorage.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
};
const byId = id=>P.find(p=>p.id===id);
const variante = (p,c)=>p.v.find(x=>x.c===c)||p.v[0];
const wa = (txt,fone)=>`https://wa.me/${fone||STORE.whatsapp}?text=${encodeURIComponent(txt)}`;
const img = (src,alt,cls="")=>`<img ${cls?`class="${cls}" `:""}src="${src}" alt="${esc(alt)}" width="900" height="1020" loading="lazy" decoding="async">`;
const normNum = s=>String(s||"").trim().toUpperCase().replace(/\s+/g,"");
const NUMRE = /^OUT-\d{4}-\d{4}$/;
let toastT;
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("on");clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove("on"),2400)}
function travaScroll(){const abre=["#modal","#track","#admin"].some(s=>$(s).classList.contains("on"))||$("#drawer").classList.contains("on");document.documentElement.classList.toggle("lock",abre)}

/* ============ BANCO (avaliacoes e status) ============ */
let db=null, reviews=[], modoLocal=false, unsub=null, canEdit=false;
const media = id=>{const r=reviews.filter(x=>x.pid===id);return r.length?{m:r.reduce((a,b)=>a+b.nota,0)/r.length,n:r.length}:null};
const stars = n=>"★".repeat(Math.round(n))+"☆".repeat(5-Math.round(n));
function loadLocal(){modoLocal=true;reviews=LS.get("outsiders_reviews",[]);refresh()}
async function initDb(){
  try{const u=await window.claude.use("user");if(u)canEdit=!!(await u.canEdit())}catch(e){canEdit=false}
  $("#adminBtn").hidden=!canEdit;ownerInit();if(location.hash==="#admin"){if(canEdit)openAdmin();else toast("Área restrita aos donos da loja.")}
  try{db=await window.claude.use("db")}catch(e){db=null}
  if(!db){loadLocal();return}
  try{
    unsub=db.collection("reviews").orderBy("em","desc").limit(500).onSnapshot(snap=>{
      reviews=snap.docs.map(d=>{const v=d.data()||{};return{id:d.id,pid:String(v.pid||""),nome:String(v.nome||"Cliente").slice(0,40),nota:Math.min(5,Math.max(1,Number(v.nota)||5)),texto:String(v.texto||"").slice(0,600),tam:String(v.tam||"").slice(0,4),em:Number(v.em)||0}});
      modoLocal=false;refresh();
    },()=>{db=null;loadLocal()});
  }catch(e){db=null;loadLocal()}
  if(trk.num)buscar(trk.num,true);
}
function refresh(){renderGrid();if(cur)renderReviews()}
async function enviarAvaliacao(f){
  const nome=f.nome.value.trim().slice(0,40), texto=f.texto.value.trim().slice(0,600), nota=pick;
  const msg=$("#revMsg");
  if(!nota){msg.textContent="Escolha uma nota de 1 a 5 estrelas.";msg.className="err";return}
  if(nome.length<2||texto.length<5){msg.textContent="Preencha seu nome e escreva um comentário.";msg.className="err";return}
  const rev={pid:cur.id,nome,nota,texto,tam:cur.size||"",em:Date.now()};
  let salvou=false;
  if(db){try{await db.collection("reviews").add(rev);salvou=true}catch(e){db=null;if(unsub){try{unsub()}catch(_){}}loadLocal()}}
  if(!salvou){reviews=[{id:"l"+rev.em,...rev},...reviews];LS.set("outsiders_reviews",reviews.filter(r=>String(r.id).startsWith("l")))}
  pick=0;f.reset();msg.textContent=salvou?"Avaliação publicada. Obrigado!":"Avaliação salva neste aparelho. Obrigado!";msg.className="good";
  refresh();
}

/* ============ VITRINE ============ */
const F={cat:"Todas",estilo:"Todos",cor:"Todas",tam:"",q:"",sort:"destaque"};
function chips(el,list,key,rotulo){
  $(el).innerHTML=list.map(v=>`<button class="chip" data-a="filtro" data-k="${key}" data-v="${esc(v)}" aria-pressed="${F[key]===v}">${esc(rotulo?rotulo(v):v)}</button>`).join("");
}
function renderFiltros(){
  chips("#fCat",CATS,"cat");chips("#fStyle",ESTILOS,"estilo");
  chips("#fCor",CORES,"cor",v=>v==="Todas"?"Todas":COR[v][0]);
  $("#fSize").innerHTML=[`<button class="chip" data-a="filtro" data-k="tam" data-v="" aria-pressed="${F.tam===""}">Todos</button>`,...TAMANHOS.map(t=>`<button class="chip" data-a="filtro" data-k="tam" data-v="${t}" aria-pressed="${F.tam===t}">${t}</button>`)].join("");
}
function lista(){
  let r=P.filter(p=>(!p.oculto||verOcultas())&&p.v.some(v=>v.f||v.b)&&(F.cat==="Todas"||p.cat===F.cat)&&(F.estilo==="Todos"||p.estilo===F.estilo)&&(F.cor==="Todas"||p.v.some(x=>x.c===F.cor))&&(!F.tam||!p.esgotado.includes(F.tam)));
  const q=F.q.trim().toLowerCase();
  if(q)r=r.filter(p=>[p.nome,p.cat,p.estilo,...p.v.map(x=>COR[x.c][0])].join(" ").toLowerCase().includes(q));
  if(F.sort==="menor")r.sort((a,b)=>a.preco-b.preco);
  else if(F.sort==="maior")r.sort((a,b)=>b.preco-a.preco);
  else if(F.sort==="nota")r.sort((a,b)=>((media(b.id)||{m:0}).m)-((media(a.id)||{m:0}).m));
  return r;
}
function renderGrid(){
  const r=lista();
  $("#count").textContent=`${r.length} ${r.length===1?"camiseta":"camisetas"}`;
  $("#grid").innerHTML=r.length?r.map(p=>{
    const m=media(p.id), v=F.cor!=="Todas"?variante(p,F.cor):(p.v.find(x=>x.f||x.b)||p.v[0]);
    return `<button class="card" data-a="abrir" data-id="${p.id}" data-c="${v.c}" aria-label="${esc(p.nome)}, ${brl(p.preco)}">
      <span class="pic">${p.oculto?`<span class="tag" style="left:auto;right:8px;background:var(--warn);color:#fff">Escondida · só você vê</span>`:""}${p.v.length>1?`<span class="tag">${p.v.length} cores</span>`:""}${img(v.b,`${p.nome}, costas, ${COR[v.c][0]}`)}${img(v.f,`${p.nome}, frente, ${COR[v.c][0]}`)}</span>
      <span class="meta">${esc(p.cat)} · ${esc(p.estilo)}</span>
      <h3>${esc(p.nome)}</h3>
      <span class="price">${brl(p.preco)}</span>
      <span class="row" style="justify-content:space-between;width:100%"><span class="dots">${p.v.map(x=>`<i class="dot" style="background:${COR[x.c][1]}" title="${COR[x.c][0]}"></i>`).join("")}</span>${m?`<span class="stars">${stars(m.m)}<small>(${m.n})</small></span>`:`<span class="note">Sem avaliações</span>`}</span>
    </button>`}).join(""):`<div class="empty" style="grid-column:1/-1">Nenhuma camiseta com esses filtros. Limpe a busca ou troque a cor.</div>`;
}

/* ============ PRODUTO ============ */
let cur=null, pick=0;
function abrir(id,cor){
  const p=byId(id);if(!p)return;
  cur={id,cor:variante(p,cor).c,lado:"b",size:"",qty:1};pick=0;
  $("#modal").classList.add("on");$("#veil").classList.remove("on");travaScroll();
  renderProduto();$("#modal").scrollTop=0;
}
function srcAtual(){const p=byId(cur.id),v=variante(p,cur.cor);return cur.lado==="b"?v.b:v.f}
function galeria(){
  const p=byId(cur.id), v=variante(p,cur.cor), n=COR[v.c][0];
  const im=(s,l)=>`<figure class="gv"><img data-a="zoom" class="main" src="${s}" alt="${esc(p.nome)}, ${l}, ${esc(n)}" width="900" height="1020" decoding="async"><figcaption>${l}</figcaption></figure>`;
  $("#gal").innerHTML=(v.f?im(v.f,"Frente"):"")+(v.b?im(v.b,"Costas"):"")+(v.x||[]).map((s,k)=>im(s,"Detalhe "+(k+1))).join("")+`<p class="note" style="padding:0 12px 12px;text-align:center">Toque na foto para ampliar</p>`;
}
function renderProduto(){
  const p=byId(cur.id);
  $("#sheet").innerHTML=`<button class="x" data-a="fechar" aria-label="Fechar">✕</button>
  <div class="pv">
    <div class="gal" id="gal"></div>
    <div class="info">
      <span class="mono" style="color:var(--muted)">${esc(p.cat).toUpperCase()} · ${esc(p.estilo).toUpperCase()}</span>
      <h2>${esc(p.nome)}</h2>
      <div id="pstars"></div>
      <div class="price p">${brl(p.preco)}</div>
      <p style="margin:0;color:var(--muted)">${esc(p.desc)}</p>
      <div><div class="lbl" style="margin-bottom:8px">Cor: <b id="corn" style="color:var(--fg)">${COR[cur.cor][0]}</b></div>
        <div class="row">${p.v.map(x=>`<button class="sw" data-a="cor" data-c="${x.c}" style="background:${COR[x.c][1]}" aria-label="${COR[x.c][0]}" aria-pressed="${x.c===cur.cor}"></button>`).join("")}</div></div>
      <div><div class="lbl" style="margin-bottom:8px">Tamanho</div>
        <div class="sizes" id="sizes"></div><p class="err" id="szerr" hidden>Escolha um tamanho para continuar.</p></div>
      <details><summary>Tabela de medidas</summary><div class="tw"><table><tr><th>Tam.</th><th>Largura (cm)</th><th>Comprimento (cm)</th></tr>${TAMANHOS.map(t=>`<tr><td>${t}</td><td>${MEDIDAS[t][0]}</td><td>${MEDIDAS[t][1]}</td></tr>`).join("")}</table></div><p class="note">Medidas aproximadas, tiradas com a peça esticada sobre uma superfície plana.</p></details>
      <div class="row"><div class="qty"><button data-a="q" data-d="-1" aria-label="Menos">−</button><span id="qn">${cur.qty}</span><button data-a="q" data-d="1" aria-label="Mais">+</button></div>
        <button class="btn" style="flex:1" data-a="add">Adicionar ao carrinho</button></div>
      <a class="btn wa full" id="pwa" href="#" target="_blank" rel="noopener">Tirar dúvida deste produto no WhatsApp</a>
    </div>
  </div>
  <div class="rev">
    <div><h3>Avaliações</h3><div id="rsum"></div><div class="rl" id="rlist"></div></div>
    <div><h3>Deixe a sua</h3>
      <form id="revForm" class="rl" style="margin-top:8px" autocomplete="off">
        <div><div class="lbl" style="margin-bottom:4px">Sua nota</div><div class="pick" id="pick">${[1,2,3,4,5].map(n=>`<button type="button" data-a="nota" data-n="${n}" aria-label="${n} estrelas">★</button>`).join("")}</div></div>
        <div class="field"><label for="rn">Seu nome</label><input type="text" id="rn" name="nome" maxlength="40"></div>
        <div class="field"><label for="rt">Comentário</label><textarea id="rt" name="texto" maxlength="600" placeholder="Caimento, tecido, tamanho que você pediu..."></textarea></div>
        <button class="btn" type="submit">Publicar avaliação</button>
        <p id="revMsg" class="note" role="status"></p>
        <p class="note" id="revMode"></p>
      </form></div>
  </div>`;
  galeria();renderSizes();renderReviews();zap();
}
function zap(){const p=byId(cur.id);$("#pwa").href=wa(`Olá, Outsiders! Tenho uma dúvida sobre a camiseta "${p.nome}" (${COR[cur.cor][0]}).`)}
function renderSizes(){
  const p=byId(cur.id);
  $("#sizes").innerHTML=TAMANHOS.map(t=>`<button class="sz" data-a="tam" data-t="${t}" aria-pressed="${cur.size===t}" ${p.esgotado.includes(t)?"disabled title=\"Esgotado\"":""}>${t}</button>`).join("");
}
function renderReviews(){
  if(!cur)return;
  const r=reviews.filter(x=>x.pid===cur.id), m=media(cur.id);
  $("#pstars").innerHTML=m?`<span class="stars">${stars(m.m)}<small>${m.m.toFixed(1).replace(".",",")} · ${m.n} ${m.n===1?"avaliação":"avaliações"}</small></span>`:`<span class="note">Ainda sem avaliações</span>`;
  $("#rsum").innerHTML=m?`<div class="stars" style="font-size:20px">${stars(m.m)}<small>${m.m.toFixed(1).replace(".",",")} de 5 · ${m.n} ${m.n===1?"avaliação":"avaliações"}</small></div>`:"";
  $("#rlist").innerHTML=r.length?r.map(x=>`<div class="ri"><div class="stars">${stars(x.nota)}</div><p><b>${esc(x.nome)}</b></p><p>${esc(x.texto)}</p><p class="mono">${x.em?new Date(x.em).toLocaleDateString("pt-BR"):""}${x.tam?` · tamanho ${esc(x.tam)}`:""}</p></div>`).join(""):`<div class="empty">Nenhuma avaliação ainda. Comprou esta camiseta? Seja a primeira pessoa a avaliar.</div>`;
  const md=$("#revMode");if(md)md.textContent=modoLocal?"As avaliações são salvas neste aparelho.":"";
  document.querySelectorAll("#pick button").forEach(b=>b.classList.toggle("on",Number(b.dataset.n)<=pick));
}

/* ============ CARRINHO E PAGAMENTO ============ */
let cart=LS.get("outsiders_cart",[]).filter(i=>byId(i.id));
let cep=LS.get("outsiders_cep",""), cupom=LS.get("outsiders_cupom",""), view="cart", pedido=null, cliente=LS.get("outsiders_cliente",{}), pag="Pix", pagTab="Pix";
let meus=LS.get("outsiders_pedidos",[]).filter(o=>o&&NUMRE.test(o.num||"")&&Array.isArray(o.hist));
const save=()=>{LS.set("outsiders_cart",cart);LS.set("outsiders_cep",cep);LS.set("outsiders_cupom",cupom);updN()};
const updN=()=>{$("#cartN").textContent=cart.reduce((a,i)=>a+i.q,0)};
const sub=()=>cart.reduce((a,i)=>a+byId(i.id).preco*i.q,0);
const desc=()=>STORE.cupons[cupom]?sub()*STORE.cupons[cupom]:0;
function frete(){
  const s=sub()-desc();
  if(!cart.length)return 0;
  if(s>=STORE.freteGratisAcima)return 0;
  const d=cep.replace(/\D/g,"");
  if(d.length!==8)return null;
  const t={0:18.9,1:18.9,2:24.9,3:24.9,4:29.9,5:29.9,6:29.9,7:34.9,8:34.9,9:34.9};
  return t[d[0]];
}
function addCart(){
  const p=byId(cur.id);
  if(!cur.size){$("#szerr").hidden=false;return}
  const k=cart.find(i=>i.id===cur.id&&i.t===cur.size&&i.c===cur.cor);
  if(k)k.q=Math.min(10,k.q+cur.qty);else cart.push({id:cur.id,t:cur.size,c:cur.cor,q:cur.qty});
  save();toast(`${p.nome} (${cur.size}) no carrinho`);fechar();abrirCarrinho();
}
function abrirCarrinho(){if(view==="pay"&&!pedido)view="cart";renderCart();$("#drawer").classList.add("on");$("#drawer").setAttribute("aria-hidden","false");$("#veil").classList.add("on");travaScroll()}
function fecharCarrinho(){$("#drawer").classList.remove("on");$("#drawer").setAttribute("aria-hidden","true");$("#veil").classList.remove("on");travaScroll()}
function fechar(){$("#modal").classList.remove("on");cur=null;travaScroll()}
function resumo(){
  const f=frete(), d=desc(), tot=sub()-d+(f||0);
  return `<div class="sum"><div><span>Subtotal</span><span>${brl(sub())}</span></div>
  ${d?`<div class="good"><span>Cupom ${esc(cupom)}</span><span>− ${brl(d)}</span></div>`:""}
  <div><span>Frete</span><span>${f===null?"Informe o CEP":f===0?"Grátis":brl(f)}</span></div>
  <div class="tot"><span>Total</span><span>${brl(tot)}</span></div></div>`;
}
function blocoPagamento(){
  const tab=pagTab, tot=pedido.total, tx=pedido.num.replace(/-/g,"");
  const pixOk=!!STORE.pix.chave, tabs=`<div class="tabs"><button class="chip" data-a="pagTab" data-v="Pix" aria-pressed="${tab==="Pix"}">Pix</button><button class="chip" data-a="pagTab" data-v="Cartão" aria-pressed="${tab==="Cartão"}">Cartão</button></div>`;
  let corpo="";
  if(tab==="Pix"){
    if(pixOk){
      const code=pixPayload(STORE.pix,tot,tx);
      corpo=`<div class="qr">${QR.svg(code,230)}<div class="note" style="text-align:center">Abra o app do seu banco, escolha Pix e leia o QR Code. Valor: <b>${brl(tot)}</b></div></div>
      <label class="lbl" for="pixcode">Pix copia e cola</label><textarea class="code" id="pixcode" readonly>${esc(code)}</textarea>
      <button class="btn alt full" data-a="copiar">Copiar código Pix</button>
      <a class="btn full" href="${wa(`Olá, Outsiders! Paguei o pedido ${pedido.num} (${brl(tot)}) por Pix. Segue o comprovante.`)}" target="_blank" rel="noopener">Já paguei, enviar comprovante</a>`;
    }else{
      corpo=`<p class="note" style="margin:0">A chave Pix é enviada pela loja na conversa do pedido. Envie o pedido pelo passo 1 e aguarde a mensagem com a chave.</p>`;
    }
  }else{
    if(STORE.linkCartao){
      corpo=`<p class="note" style="margin:0">Você será levado para o ambiente seguro de pagamento. Informe o valor do pedido: <b>${brl(tot)}</b> e o número <b>${esc(pedido.num)}</b>.</p>
      <a class="btn full" href="${esc(STORE.linkCartao)}" target="_blank" rel="noopener">Pagar com cartão</a>
      <a class="btn alt full" href="${wa(`Olá, Outsiders! Paguei o pedido ${pedido.num} (${brl(tot)}) no cartão.`)}" target="_blank" rel="noopener">Já paguei, avisar a loja</a>`;
    }else{
      corpo=`<p class="note" style="margin:0">O link de pagamento no cartão é enviado pela loja na conversa do pedido. Envie o pedido pelo passo 1 e aguarde a mensagem.</p>`;
    }
  }
  return `${tabs}${corpo}`;
}
function renderCart(){
  const d=$("#drawer");
  if(view==="cart"){
    d.innerHTML=`<div class="dh"><h2>Carrinho</h2><button class="x" data-a="closeAll" aria-label="Fechar carrinho">✕</button></div>
    <div class="db">${cart.length?cart.map((i,ix)=>{const p=byId(i.id),v=variante(p,i.c);return `<div class="line">${img(v.b,`${p.nome}, ${COR[i.c][0]}`)}<div>
      <h3>${esc(p.nome)}</h3><div class="note">${COR[i.c][0]} · Tamanho ${i.t}</div>
      <div class="row" style="justify-content:space-between;margin-top:8px"><div class="qty"><button data-a="cq" data-i="${ix}" data-d="-1" aria-label="Menos">−</button><span>${i.q}</span><button data-a="cq" data-i="${ix}" data-d="1" aria-label="Mais">+</button></div><b>${brl(p.preco*i.q)}</b></div>
      <button class="link" data-a="rm" data-i="${ix}">Remover</button></div></div>`}).join(""):`<div class="empty">Seu carrinho está vazio.<br><br><button class="btn" data-a="closeAll">Ver camisetas</button></div>`}</div>
    ${cart.length?`<div class="df">
      <div class="inl"><input type="text" id="cepIn" inputmode="numeric" placeholder="CEP (00000-000)" value="${esc(cep)}" maxlength="9" aria-label="CEP"><button class="btn alt" data-a="cep">Calcular</button></div>
      <div class="inl"><input type="text" id="cupIn" placeholder="Cupom de desconto" value="${esc(cupom)}" aria-label="Cupom"><button class="btn alt" data-a="cupom">Aplicar</button></div>
      <p class="err" id="cartMsg" hidden></p>
      ${resumo()}
      <button class="btn full" data-a="ir">Finalizar compra</button></div>`:""}`;
  }else if(view==="checkout"){
    const c=cliente;
    d.innerHTML=`<div class="dh"><h2>Finalizar</h2><button class="x" data-a="closeAll" aria-label="Fechar">✕</button></div>
    <form id="ckForm" style="display:contents" autocomplete="on">
    <div class="db">
      <button type="button" class="link" data-a="volta">← Voltar ao carrinho</button>
      <div class="field"><label for="cn">Nome completo</label><input type="text" id="cn" name="nome" required value="${esc(c.nome||"")}" autocomplete="name"></div>
      <div class="two"><div class="field"><label for="ct">WhatsApp</label><input type="tel" id="ct" name="tel" required placeholder="(00) 90000-0000" value="${esc(c.tel||"")}" autocomplete="tel"></div>
      <div class="field"><label for="ce">E-mail (opcional)</label><input type="email" id="ce" name="email" value="${esc(c.email||"")}" autocomplete="email"></div></div>
      <div class="two"><div class="field"><label for="cc">CEP</label><input type="text" id="cc" name="cep" required inputmode="numeric" maxlength="9" value="${esc(cep)}" autocomplete="postal-code"></div>
      <div class="field"><label for="cu">Cidade / UF</label><input type="text" id="cu" name="cidade" required value="${esc(c.cidade||"")}" autocomplete="address-level2"></div></div>
      <div class="field"><label for="cr">Endereço e número</label><input type="text" id="cr" name="rua" required value="${esc(c.rua||"")}" autocomplete="street-address"></div>
      <div class="two"><div class="field"><label for="cb">Bairro</label><input type="text" id="cb" name="bairro" required value="${esc(c.bairro||"")}"></div>
      <div class="field"><label for="cx">Complemento</label><input type="text" id="cx" name="comp" value="${esc(c.comp||"")}"></div></div>
      <div class="lbl">Pagamento</div>
      <label class="opt"><input type="radio" name="pag" value="Pix" ${pag==="Pix"?"checked":""}><span><b>Pix</b><br><span class="note">QR Code e copia e cola na próxima tela.</span></span></label>
      <label class="opt"><input type="radio" name="pag" value="Cartão" ${pag==="Cartão"?"checked":""}><span><b>Cartão de crédito</b><br><span class="note">Pagamento em ambiente seguro na próxima tela.</span></span></label>
      <div class="field"><label for="co">Observações (opcional)</label><textarea id="co" name="obs" style="min-height:60px"></textarea></div>
      <p class="err" id="ckMsg" hidden></p>
    </div>
    <div class="df">${resumo()}<button class="btn full" type="submit">Ir para o pagamento</button></div></form>`;
  }else{
    d.innerHTML=`<div class="dh"><h2>Pedido ${esc(pedido.num)}</h2><button class="x" data-a="closeAll" aria-label="Fechar">✕</button></div>
    <div class="db">
      <p class="note" style="margin:0">Guarde este número. Com ele você acompanha o pedido a qualquer momento.</p>
      <div class="box"><span class="step">Passo 1 · Enviar o pedido</span><span class="note">A loja recebe os itens e o endereço pelo WhatsApp.</span>
        <a class="btn wa full" href="${pedido.link}" target="_blank" rel="noopener">Enviar pedido no WhatsApp</a></div>
      <div class="box"><span class="step">Passo 2 · Pagar ${brl(pedido.total)}</span>${blocoPagamento()}
        <span class="note">A loja confere o pagamento e confirma no acompanhamento do pedido.</span></div>
      <div class="box"><span class="step">Passo 3 · Acompanhar</span><button class="btn alt full" data-a="trackPedido">Acompanhar este pedido</button></div>
      <div class="opt" style="display:block"><span class="lbl">Resumo</span><div style="margin-top:6px;white-space:pre-wrap;font-size:13px">${esc(pedido.resumo)}</div></div>
      <button class="link" data-a="closeAll">Continuar comprando</button>
    </div>`;
  }
}
function montaPedido(f){
  const dt=new Date(), num="OUT-"+String(dt.getMonth()+1).padStart(2,"0")+String(dt.getDate()).padStart(2,"0")+"-"+Math.floor(1000+Math.random()*9000);
  const fr=frete(), d=desc(), tot=sub()-d+(fr||0);
  const itens=cart.map(i=>{const p=byId(i.id);return `• ${i.q}x ${p.nome} — ${i.t} / ${COR[i.c][0]} — ${brl(p.preco*i.q)}`}).join("\n");
  const resumo=`${itens}\n\nSubtotal: ${brl(sub())}${d?`\nCupom ${cupom}: − ${brl(d)}`:""}\nFrete: ${fr===null?"a combinar":fr===0?"Grátis":brl(fr)}\nTotal: ${brl(tot)}\nPagamento: ${f.pag}`;
  const txt=`*Novo pedido ${STORE.nome}* ${num}\n\n*Cliente:* ${f.nome}\n*WhatsApp:* ${f.tel}${f.email?`\n*E-mail:* ${f.email}`:""}\n\n*Itens*\n${resumo}\n\n*Entrega*\n${f.rua}${f.comp?`, ${f.comp}`:""}\n${f.bairro} · ${f.cidade}\nCEP ${f.cep}${f.obs?`\n\n*Obs.:* ${f.obs}`:""}`;
  return {num,pag:f.pag,resumo,link:wa(txt),total:tot,itens:cart.map(i=>({id:i.id,t:i.t,c:i.c,q:i.q}))};
}

/* ============ ACOMPANHAR PEDIDO ============ */
const trk={num:"",remote:null,unsub:null,erro:""};
function limpaRemoto(r){
  if(!r||typeof r!=="object")return null;
  const status=ROT[r.status]?r.status:"recebido";
  const hist=(Array.isArray(r.hist)?r.hist:[]).slice(-40).map(h=>({s:ROT[h&&h.s]?h.s:"recebido",t:Number(h&&h.t)||0,n:String((h&&h.n)||"").slice(0,200)}));
  return {status,hist,rastreio:String(r.rastreio||"").slice(0,40),updatedAt:Number(r.updatedAt)||0};
}
function openTrack(num){
  $("#track").classList.add("on");$("#veil").classList.remove("on");travaScroll();
  if(num)buscar(num);else renderTrack();
  $("#track").scrollTop=0;
}
function fecharTrack(){$("#track").classList.remove("on");if(trk.unsub){try{trk.unsub()}catch(e){}trk.unsub=null}travaScroll()}
function buscar(n,refaz){
  const num=normNum(n);
  if(!NUMRE.test(num)){trk.erro="Confira o número. Ele tem o formato OUT-0000-0000.";trk.num="";trk.remote=null;renderTrack();return}
  trk.erro="";
  if(trk.unsub){try{trk.unsub()}catch(e){}trk.unsub=null}
  trk.num=num;trk.remote=null;
  if(db){
    try{trk.unsub=db.doc("status/"+num).onSnapshot(s=>{trk.remote=s.exists?limpaRemoto(s.data()):null;renderTrack()},()=>{trk.remote=null;renderTrack()})}catch(e){}
  }
  renderTrack();
}
function linhaTempo(status,hist){
  if(status==="cancelado"){
    const h=hist.filter(x=>x.s==="cancelado").pop();
    return `<ul class="tl">${ETAPAS.slice(0,1).map(([k,l])=>`<li class="done"><span class="d">✓</span><div><b>${l}</b></div></li>`).join("")}<li class="done cur"><span class="d" style="background:var(--warn);border-color:var(--warn)">✕</span><div><b style="color:var(--warn)">Cancelado</b>${h?`<span class="when">${fmtDt(h.t)}${h.n?` · ${esc(h.n)}`:""}</span>`:""}</div></li></ul>`;
  }
  const idx=ETAPAS.findIndex(e=>e[0]===status);
  return `<ul class="tl">${ETAPAS.map(([k,l],i)=>{
    const h=hist.filter(x=>x.s===k).pop();
    return `<li class="${i<=idx?"done":""} ${i===idx?"cur":""}"><span class="d">${i<=idx?"✓":""}</span><div><b>${l}</b>${h?`<span class="when">${h.t?fmtDt(h.t):""}${h.n?` · ${esc(h.n)}`:""}</span>`:""}</div></li>`}).join("")}</ul>`;
}
function renderTrack(){
  const loc=meus.find(o=>o.num===trk.num), rem=trk.remote;
  let corpo="";
  if(trk.num&&(loc||rem)){
    const status=rem?rem.status:"recebido", hist=rem&&rem.hist.length?rem.hist:(loc?loc.hist:[]);
    corpo=`<div class="box"><div class="row" style="justify-content:space-between"><b style="font-family:var(--display);font-stretch:112%;font-size:20px">${esc(trk.num)}</b><span class="pill ${status==="cancelado"?"bad":"on"}">${ROT[status]}</span></div>
      ${loc?`<span class="note">Feito em ${fmtDt(loc.em)} · Total ${brl(loc.total)} · ${esc(loc.pag||"")}</span>`:""}
      ${linhaTempo(status,hist)}
      ${rem&&rem.rastreio?`<div class="opt" style="display:block"><span class="lbl">Código de rastreio</span><br><b style="word-break:break-all">${esc(rem.rastreio)}</b></div>`:""}
      ${rem&&rem.updatedAt?`<span class="note">Última atualização da loja: ${fmtDt(rem.updatedAt)}</span>`:""}
      ${!rem?`<p class="note" style="margin:0">${db?"A loja ainda não lançou atualizações para este pedido.":"Atualizações automáticas não estão disponíveis neste navegador. A loja avisa pelo WhatsApp, e você pode pedir a posição do pedido pelo botão abaixo."}</p>`:""}
      <a class="btn wa full" href="${wa(`Olá, Outsiders! Pode me atualizar sobre o pedido ${trk.num}?`)}" target="_blank" rel="noopener">Pedir atualização no WhatsApp</a></div>`;
  }else if(trk.num){
    corpo=`<div class="box"><b>Pedido não encontrado</b><p class="note" style="margin:0">Não achamos o ${esc(trk.num)} neste aparelho nem na loja. Confira o número ou fale com a gente.</p>
      <a class="btn wa full" href="${wa(`Olá, Outsiders! Quero saber do pedido ${trk.num}.`)}" target="_blank" rel="noopener">Falar no WhatsApp</a></div>`;
  }
  $("#trackSheet").innerHTML=`<button class="x" data-a="fecharTrack" aria-label="Fechar">✕</button>
  <div class="pad"><h2>Acompanhar pedido</h2>
  <form id="trkForm" class="inl" autocomplete="off"><input type="text" id="trkNum" name="num" placeholder="OUT-0000-0000" value="${esc(trk.num)}" aria-label="Número do pedido" maxlength="14"><button class="btn" type="submit">Buscar</button></form>
  ${trk.erro?`<p class="err" style="margin:0">${esc(trk.erro)}</p>`:""}
  ${corpo}
  ${meus.length?`<div><div class="lbl" style="margin-bottom:8px">Pedidos feitos neste aparelho</div><div class="mine">${meus.slice(0,8).map(o=>`<button data-a="verPedido" data-n="${o.num}"><b>${o.num}</b><span>${brl(o.total)}</span><span class="note">${fmtDt(o.em)}</span><span class="note">${esc(o.pag||"")}</span></button>`).join("")}</div></div>`:""}
  </div>`;
}

/* ============ CATALOGO EDITAVEL (precos, fotos, camisetas novas) ============ */
let CAT_OV={prod:{},novos:[]};
try{const j=JSON.parse(document.getElementById("catjson").textContent);if(j&&typeof j==="object"){CAT_OV={prod:j.prod||{},novos:j.novos||[]}}}catch(e){}
const BASEV={};
const hd=s=>{s=String(s||"");return /^img\/.+-[fb]\.jpg$/.test(s)?s.replace(/\.jpg$/,"-hd.jpg"):s};
function aplicaCat(){
  P.forEach(p=>{if(!BASEV[p.id]&&!(CAT_OV.novos||[]).some(n=>n&&n.id===p.id))BASEV[p.id]=Object.fromEntries(p.v.map(v=>[v.c,{f:v.f,b:v.b}]))});
  for(const [id,o] of Object.entries(CAT_OV.prod||{})){
    const p=P.find(x=>x.id===id);if(!p||!o)continue;
    if(typeof o.nome==="string"&&o.nome)p.nome=o.nome.slice(0,60);
    if(typeof o.preco==="number"&&o.preco>0)p.preco=o.preco;
    if(typeof o.desc==="string")p.desc=o.desc.slice(0,600);
    if(CATS.includes(o.cat))p.cat=o.cat;
    if(ESTILOS.includes(o.estilo))p.estilo=o.estilo;
    if(Array.isArray(o.esgotado))p.esgotado=o.esgotado.filter(t=>TAMANHOS.includes(t));
    p.oculto=!!o.oculto;
    for(const [c,im] of Object.entries(o.img||{})){const v=p.v.find(x=>x.c===c);if(v){if(typeof im.f==="string")v.f=im.f;if(typeof im.b==="string")v.b=im.b;if(Array.isArray(im.x))v.x=im.x.filter(s=>typeof s==="string"&&s)}}
    for(const c of o.rm||[]){p.v=p.v.filter(v=>v.c!==c)}
    for(const x of o.vx||[]){if(COR[x.c]&&!p.v.some(v=>v.c===x.c))p.v.push({c:x.c,f:x.f||"",b:x.b||"",x:Array.isArray(x.x)?x.x:[]})}
  }
  P.forEach(p=>{const ok=p.v.filter(v=>v.f||v.b||(v.x||[]).length);if(ok.length&&ok.length<p.v.length)p.v=ok});
  for(const n of CAT_OV.novos||[]){if(!n||!n.id)continue;const ex=P.find(p=>p.id===n.id);if(ex){Object.assign(ex,n,{v:(n.v||[]).map(v=>({c:v.c,f:v.f||"",b:v.b||"",x:Array.isArray(v.x)?v.x:[]}))});continue}P.push({ordem:P.length,esgotado:[],...n,v:(n.v||[]).map(v=>({c:v.c,f:v.f||"",b:v.b||"",x:Array.isArray(v.x)?v.x:[]}))})}
}
function snapProd(p){
  const nv=CAT_OV.novos.findIndex(x=>x.id===p.id);
  const base={id:p.id,nome:p.nome,cat:p.cat,estilo:p.estilo,preco:p.preco,desc:p.desc,esgotado:p.esgotado,oculto:!!p.oculto};
  if(nv>=0){CAT_OV.novos[nv]={...base,v:p.v.map(v=>({c:v.c,f:v.f,b:v.b,x:v.x||[]}))}}
  else{
    const bv=BASEV[p.id]||{},img={},vx=[];
    p.v.forEach(v=>{const b=bv[v.c];if(!b)vx.push({c:v.c,f:v.f,b:v.b,x:v.x||[]});else{const o={};if(v.f!==b.f)o.f=v.f;if(v.b!==b.b)o.b=v.b;if(v.x&&v.x.length)o.x=v.x;if("f" in o||"b" in o||o.x)img[v.c]=o}});
    const rm=Object.keys(bv).filter(c=>!p.v.some(v=>v.c===c));const {id,...rest}=base;CAT_OV.prod[p.id]={...rest,img,vx,rm};
  }
  catDirty=true;salvaRascunho();
}
let catDirty=false, aTab="prod", edId=null, aMsg2="", aMsg2Ok=false;
const SAFE=s=>s.replace(/</g,"\\u003c").split(String.fromCharCode(8232)).join("\\u2028").split(String.fromCharCode(8233)).join("\\u2029");
function indexHtml(){
  return '<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover"><style>:root{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}html{scroll-padding-top:env(safe-area-inset-top,0px)}body{margin:0;padding:0;font:14px -apple-system,BlinkMacSystemFont,sans-serif;background:#fff;color:#000}img{max-width:100%}[hidden]:not([hidden=until-found i]){display:none!important}</style></head><body>\n'+INDEX_BODY.replace("/*CATJSON*/",SAFE(JSON.stringify(CAT_OV)))+'\n</body></html>';
}
function lerImg(file){return new Promise((res,rej)=>{
  if(!file||!/^image\//.test(file.type)){rej(new Error("tipo"));return}
  const u=URL.createObjectURL(file),im=new Image();
  im.onload=()=>{const M=1600,w=im.naturalWidth,h=im.naturalHeight,s=Math.min(1,M/Math.max(w,h));const c=document.createElement("canvas");c.width=Math.round(w*s);c.height=Math.round(h*s);const x=c.getContext("2d");x.imageSmoothingQuality="high";x.drawImage(im,0,0,c.width,c.height);URL.revokeObjectURL(u);res(c.toDataURL("image/jpeg",.88))};
  im.onerror=()=>{URL.revokeObjectURL(u);rej(new Error("leitura"))};im.src=u})}
function girarImg(src){return new Promise((res,rej)=>{const im=new Image();im.onload=()=>{const c=document.createElement("canvas");c.width=im.naturalHeight;c.height=im.naturalWidth;const x=c.getContext("2d");x.translate(c.width/2,c.height/2);x.rotate(Math.PI/2);x.drawImage(im,-im.naturalWidth/2,-im.naturalHeight/2);res(c.toDataURL("image/jpeg",.9))};im.onerror=()=>rej(new Error("girar"));im.src=src})}
function admTabs(){return `<div class="row" style="gap:8px"><button class="chip" data-a="aTab" data-t="prod" aria-pressed="${aTab==="prod"}">Produtos e preços</button><button class="chip" data-a="aTab" data-t="ped" aria-pressed="${aTab==="ped"}">Pedidos</button></div>`}
function renderAdmin(){aTab==="prod"?renderAdminProd():renderAdminPed()}
function thumb(s){return s?`<img src="${esc(s)}" alt="" style="width:100%;aspect-ratio:900/1020;object-fit:contain;background:var(--photo);border-radius:3px;display:block">`:`<div class="empty" style="padding:30px 4px;font-size:12px">Sem foto</div>`}
function renderAdminProd(){
  const sh=$("#adminSheet"), keep=sh.scrollTop;
  const head=`<button class="x" data-a="fecharAdmin" aria-label="Fechar">✕</button><div class="pad"><h2>Painel da loja</h2>${admTabs()}`;
  const pub0=`<div class="box" style="display:grid;gap:8px"><button class="btn full" data-a="publicarCat" ${catDirty?"":"disabled"}>${window.OUTSIDERS_ADMIN?"Baixar site atualizado":"Publicar alterações no site"}</button><p class="${aMsg2Ok?"good":"err"}" style="margin:0" role="status">${esc(aMsg2||(catDirty?""+(window.OUTSIDERS_ADMIN?"Você tem alterações. Toque em Baixar site atualizado e envie o arquivo index.html para a hospedagem.":"Você tem alterações ainda não publicadas. Os clientes só veem depois de publicar.")+"":""))}</p></div>`;
  const pub=window.OUTSIDERS_ADMIN?pubGit():pub0;
  if(edId){
    const p=byId(edId);if(!p){edId=null;return renderAdminProd()}
    const novo=CAT_OV.novos.some(x=>x.id===p.id);
    sh.innerHTML=head+`<button class="btn ghost" data-a="voltaProd">← Todas as camisetas</button>
    <div class="box" style="display:grid;gap:12px">
      <div class="field"><label>Nome</label><input type="text" data-p="${p.id}" data-f="nome" value="${esc(p.nome)}" maxlength="60"></div>
      <div class="field"><label>Preço (R$)</label><input type="text" inputmode="decimal" data-p="${p.id}" data-f="preco" value="${esc(String(p.preco).replace(".",","))}"></div>
      <div class="field"><label>Categoria</label><select data-p="${p.id}" data-f="cat">${CATS.slice(1).map(c=>`<option ${p.cat===c?"selected":""}>${c}</option>`).join("")}</select></div>
      <div class="field"><label>Estilo</label><select data-p="${p.id}" data-f="estilo">${ESTILOS.slice(1).map(c=>`<option ${p.estilo===c?"selected":""}>${c}</option>`).join("")}</select></div>
      <div class="field"><label>Descrição</label><input type="text" data-p="${p.id}" data-f="desc" value="${esc(p.desc||"")}" maxlength="600"></div>
      <div><div class="lbl" style="margin-bottom:6px">Tamanhos esgotados (toque para marcar)</div><div class="sizes">${TAMANHOS.map(t=>`<button class="sz" type="button" data-a="tgEsg" data-t="${t}" aria-pressed="${p.esgotado.includes(t)}">${t}</button>`).join("")}</div></div>
      <div class="box" style="display:grid;gap:8px;border-color:${p.oculto?"var(--warn)":"var(--ok)"}"><b>${p.oculto?"Esta camiseta está ESCONDIDA — os clientes não veem":"Esta camiseta está VISÍVEL na loja"}</b><button class="btn ${p.oculto?"":"alt"} full" type="button" data-a="tgOculto">${p.oculto?"Mostrar na loja":"Esconder da loja"}</button></div>
    </div>
    <div class="lbl">Fotos por cor</div>
    ${p.v.map(v=>{const ph=(s,k,lab,ex)=>`<div>${thumb(s)}<div class="row" style="gap:6px;margin-top:6px;flex-wrap:wrap"><label class="btn ghost" style="cursor:pointer;padding:6px 10px">${s?"Trocar":"Adicionar"}<input type="file" accept="image/*" hidden data-p="${p.id}" data-f="img" data-c="${v.c}" data-s="${k}"></label>${s?`<button class="btn ghost" style="padding:6px 10px" type="button" data-a="girar" data-c="${v.c}" data-s="${k}">Girar</button><button class="btn ghost" style="padding:6px 10px" type="button" data-a="tirar" data-c="${v.c}" data-s="${k}">Excluir</button>${ex||""}`:""}</div></div>`;
      const xs=v.x||[];
      return `<div class="box" style="display:grid;gap:10px"><b>${esc(COR[v.c][0])}</b>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px"><div><div class="lbl" style="margin-bottom:4px">Frente</div>${ph(v.f,"f")}</div><div><div class="lbl" style="margin-bottom:4px">Costas</div>${ph(v.b,"b")}</div></div>
      <div class="lbl">Outras fotos (detalhes, modelo vestindo…)</div>
      ${xs.length?`<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">${xs.map((s,k)=>`<div>${thumb(s)}<div class="row" style="gap:6px;margin-top:6px;flex-wrap:wrap"><button class="btn ghost" style="padding:6px 10px" type="button" data-a="girar" data-c="${v.c}" data-s="x${k}">Girar</button><button class="btn ghost" style="padding:6px 10px" type="button" data-a="tirar" data-c="${v.c}" data-s="x${k}">Excluir</button><button class="btn ghost" style="padding:6px 10px" type="button" data-a="comoFrente" data-c="${v.c}" data-k="${k}">Usar de frente</button><button class="btn ghost" style="padding:6px 10px" type="button" data-a="comoCostas" data-c="${v.c}" data-k="${k}">Usar de costas</button></div></div>`).join("")}</div>`:`<p class="note" style="margin:0">Nenhuma foto extra.</p>`}
      <label class="btn ghost full" style="text-align:center;cursor:pointer">+ Adicionar fotos<input type="file" accept="image/*" multiple hidden data-p="${p.id}" data-f="imgx" data-c="${v.c}"></label>
      <button class="btn alt full" style="border-color:var(--warn);color:var(--warn)" type="button" data-a="delCor" data-c="${v.c}">${p.v.length>1?"Excluir esta cor e as fotos":"Excluir todas as fotos desta cor"}</button></div>`}).join("")}
    <div class="box" style="display:flex;gap:8px;align-items:center"><select id="novaCor" style="flex:1">${Object.keys(COR).filter(c=>!p.v.some(v=>v.c===c)).map(c=>`<option value="${c}">${COR[c][0]}</option>`).join("")}</select><button class="btn ghost" type="button" data-a="addCor">Adicionar cor</button></div>
    ${novo?`<button class="btn ghost" data-a="delProd">Excluir esta camiseta nova</button>`:""}
    ${pub}</div>`;
  }else{
    sh.innerHTML=head+`<p class="note" style="margin:0">Edite preços, fotos e estoque e depois toque em Publicar. Fotos novas ficam nítidas na ampliação (até 1600 px).</p>
    <button class="btn full" data-a="novoProd">+ Cadastrar camiseta nova</button>
    <div class="alist">${P.map(p=>`<button data-a="abrirProd" data-id="${p.id}"><span style="display:flex;gap:10px;align-items:center;min-width:0"><span style="width:44px;flex:none">${thumb(p.v[0].b||p.v[0].f)}</span><span style="min-width:0"><b style="display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(p.nome)}</b><span class="note">${brl(p.preco)}${p.oculto?" · escondida":""}</span></span></span><span class="note">Editar</span></button>`).join("")}</div>
    ${pub}</div>`;
  }
  sh.scrollTop=keep;
}
async function publicarCat(){
  aMsg2Ok=false;
  let art=null;try{art=await window.claude.use("artifact")}catch(e){}
  if(!art){aMsg2="Publicar não está disponível neste acesso. Abra o painel pela conta dona da loja.";renderAdminProd();return}
  const html=indexHtml();
  if(html.length>15e6){aMsg2="As fotos novas passaram do limite do site. Publique poucas camisetas por vez.";renderAdminProd();return}
  aMsg2="Publicando…";renderAdminProd();
  try{
    const vis=P.filter(p=>!p.oculto&&p.v.some(v=>v.f||v.b)),esc2=P.filter(p=>p.oculto);
    try{sessionStorage.setItem("outsiders_pubmsg",window.OUTSIDERS_ADMIN?"Arquivo baixado. Envie o index.html para a hospedagem para atualizar o site. Na loja ficarão: ":"Publicado. Na loja agora: "+vis.length+" camisetas."+(esc2.length?" Escondidas (clientes não veem): "+esc2.map(p=>p.nome).join(", ")+".":""))}catch(e2){}
    await art.publish(html);if(window.OUTSIDERS_ADMIN){aMsg2="Arquivo index.html baixado. Agora envie ele para a hospedagem (substitua o antigo).";aMsg2Ok=true;catDirty=false}else{aMsg2="Publicado. A página vai recarregar.";aMsg2Ok=true;catDirty=false}}
  catch(e){const c=e&&e.code;try{salvaRascunho()}catch(e3){}aMsg2=c==="conflict"?"A loja foi atualizada enquanto você editava. A página vai recarregar e recuperar suas alterações; depois toque em Publicar de novo.":c==="not_writer"||c==="not_granted"?"Esta conta não tem permissão para publicar.":c==="too_large"?"Fotos demais de uma vez. Publique em partes.":c==="rate_limited"?"Muitas publicações seguidas. Espere um instante.":"Não foi possível publicar agora ("+(c||"erro")+"). Tente de novo."}
  if(!aMsg2Ok)toast(aMsg2);
  renderAdminProd();
}

function avisoPub(){let m="";try{m=sessionStorage.getItem("outsiders_pubmsg")||"";sessionStorage.removeItem("outsiders_pubmsg")}catch(e){}
  if(m){toast(m);clearTimeout(toastT);toastT=setTimeout(()=>$("#toast").classList.remove("on"),8000)}}

const DRAFT_KEY="outsiders_rascunho";
let rascTimer,editVer=0,pubBusy=false,autoTimer;
function salvaRascunho(){editVer++;autoPub();clearTimeout(rascTimer);rascTimer=setTimeout(()=>{try{localStorage.setItem(DRAFT_KEY,JSON.stringify(CAT_OV))}catch(e){}},600)}
function restauraRascunho(){
  try{
    const d=localStorage.getItem(DRAFT_KEY);if(!d)return;
    if(d===JSON.stringify(CAT_OV)){localStorage.removeItem(DRAFT_KEY);return}
    const o=JSON.parse(d);if(!o||typeof o!=="object")return;
    CAT_OV={prod:o.prod||{},novos:o.novos||[]};aplicaCat();catDirty=true;refresh();
    toast("Recuperei suas alterações que ainda não tinham sido publicadas. Toque em Publicar de novo.");clearTimeout(toastT);toastT=setTimeout(()=>$("#toast").classList.remove("on"),9000);
  }catch(e){}
}

let modoCliente=false;
function ownerInit(){
  try{modoCliente=sessionStorage.getItem("outsiders_cliente")==="1"}catch(e){}
  document.documentElement.classList.toggle("owner",canEdit);
  document.documentElement.classList.toggle("vcliente",canEdit&&modoCliente);
  if(canEdit&&!modoCliente&&/painel/.test(location.hash))openAdmin();
  try{refresh()}catch(e){}
  if(canEdit)restauraRascunho();
}
function setCliente(v){modoCliente=v;try{sessionStorage.setItem("outsiders_cliente",v?"1":"0")}catch(e){}ownerInit();if(v)fecharAdmin();refresh()}
const verOcultas=()=>canEdit&&!modoCliente;

/* ============ PAINEL DA LOJA ============ */
let aLista=[], aUnsub=null, aMsg="", aLink="";
function openAdmin(){
  $("#admin").classList.add("on");travaScroll();
  if(db&&!aUnsub){try{aUnsub=db.collection("status").orderBy("updatedAt","desc").limit(40).onSnapshot(s=>{aLista=s.docs.map(d=>({id:d.id,...limpaRemoto(d.data())}));renderAdmin()},()=>{})}catch(e){}}
  renderAdmin();$("#admin").scrollTop=0;
}
function fecharAdmin(){$("#admin").classList.remove("on");travaScroll()}
function renderAdminPed(){
  const f=window.__adm||{};
  $("#adminSheet").innerHTML=`<button class="x" data-a="fecharAdmin" aria-label="Fechar">✕</button>
  <div class="pad"><h2>Painel da loja</h2>${admTabs()}
  ${db?"":`<p class="err" style="margin:0">O banco de dados não está disponível neste acesso. Abra o painel pela conta dona da loja.</p>`}
  <p class="note" style="margin:0">Quando um pedido chegar no WhatsApp, lance aqui o número e o status. O cliente vê a linha do tempo em Acompanhar pedido.</p>
  <form id="admForm" class="box" autocomplete="off">
    <div class="field"><label for="an">Número do pedido</label><input type="text" id="an" name="num" placeholder="OUT-0000-0000" maxlength="14" value="${esc(f.num||"")}" required></div>
    <div class="field"><label for="as">Status</label><select id="as" name="status">${Object.entries(ROT).map(([k,l])=>`<option value="${k}" ${f.status===k?"selected":""}>${l}</option>`).join("")}</select></div>
    <div class="field"><label for="ar">Código de rastreio (opcional)</label><input type="text" id="ar" name="rastreio" maxlength="40" value="${esc(f.rastreio||"")}"></div>
    <div class="field"><label for="ao">Observação para o cliente (opcional)</label><input type="text" id="ao" name="nota" maxlength="200" placeholder="Ex.: Pix recebido, separando hoje"></div>
    <div class="field"><label for="ap">WhatsApp do cliente (opcional, para avisar)</label><input type="tel" id="ap" name="fone" placeholder="(00) 90000-0000"></div>
    <button class="btn full" type="submit" ${db?"":"disabled"}>Salvar atualização</button>
    <p class="${aMsg.startsWith("Salvo")?"good":"err"}" style="margin:0" role="status">${esc(aMsg)}</p>
    ${aLink?`<a class="btn wa full" href="${aLink}" target="_blank" rel="noopener">Avisar o cliente no WhatsApp</a>`:""}
  </form>
  <div><div class="lbl" style="margin-bottom:8px">Pedidos lançados</div>
  <div class="alist">${aLista.length?aLista.map(o=>`<button data-a="editaStatus" data-n="${esc(o.id)}"><b>${esc(o.id)}</b><span class="pill ${o.status==="cancelado"?"bad":"on"}">${ROT[o.status]}</span></button>`).join(""):`<div class="empty">Nenhum pedido lançado ainda.</div>`}</div></div>
  </div>`;
}
async function salvarStatus(f){
  const num=normNum(f.num.value), st=f.status.value, nota=f.nota.value.trim().slice(0,200), rast=f.rastreio.value.trim().slice(0,40), fone=f.fone.value.replace(/\D/g,"");
  aLink="";
  if(!NUMRE.test(num)){aMsg="Confira o número do pedido (OUT-0000-0000).";renderAdmin();return}
  if(!db||!ROT[st]){aMsg="Banco de dados indisponível.";renderAdmin();return}
  try{
    const ref=db.doc("status/"+num), atual=await ref.get(), antigo=atual.exists?(limpaRemoto(atual.data())||{}):{};
    const hist=(antigo.hist||[]).concat([{s:st,t:Date.now(),n:nota}]).slice(-40);
    await ref.set({num,status:st,rastreio:rast||antigo.rastreio||"",hist,updatedAt:Date.now()});
    aMsg="Salvo. O cliente já vê a atualização.";
    if(fone.length>=10){const tel=fone.length<=11?"55"+fone:fone;aLink=wa(`Olá! Seu pedido ${num} da ${STORE.nome} foi atualizado: ${ROT[st]}.${rast?` Rastreio: ${rast}.`:""}${nota?` ${nota}`:""} Acompanhe em Acompanhar pedido, no site.`,tel)}
    window.__adm={num,status:st,rastreio:rast||antigo.rastreio||""};
  }catch(e){aMsg="Não foi possível salvar. Confira se você está com a conta dona da loja."}
  renderAdmin();
}

/* ============ EVENTOS ============ */
const A = {
  filtro(el){F[el.dataset.k]=el.dataset.v;renderFiltros();renderGrid()},
  abrir(el){abrir(el.dataset.id,el.dataset.c)},
  fechar,
  cor(el){cur.cor=el.dataset.c;$("#corn").textContent=COR[cur.cor][0];document.querySelectorAll(".sw").forEach(b=>b.setAttribute("aria-pressed",b.dataset.c===cur.cor));galeria();zap()},
  lado(el){cur.lado=el.dataset.l;galeria()},
  zoom(el){const s=el.getAttribute("src"),L=$("#lbImg");L.onerror=()=>{L.onerror=null;L.src=s};L.src=hd(s);$("#lb").hidden=false},
  lbFechar(){$("#lb").hidden=true},
  tam(el){cur.size=el.dataset.t;$("#szerr").hidden=true;renderSizes()},
  q(el){cur.qty=Math.min(10,Math.max(1,cur.qty+Number(el.dataset.d)));$("#qn").textContent=cur.qty},
  add:addCart,
  nota(el){pick=Number(el.dataset.n);document.querySelectorAll("#pick button").forEach(b=>b.classList.toggle("on",Number(b.dataset.n)<=pick))},
  openCart:abrirCarrinho,
  closeAll(){fecharCarrinho();fechar()},
  cq(el){const ix=Number(el.dataset.i),i=cart[ix];i.q=Math.min(10,i.q+Number(el.dataset.d));if(i.q<1)cart.splice(ix,1);save();renderCart()},
  rm(el){cart.splice(Number(el.dataset.i),1);save();renderCart()},
  cep(){const v=$("#cepIn").value.replace(/\D/g,"");const m=$("#cartMsg");if(v.length!==8){m.hidden=false;m.textContent="Digite um CEP com 8 números.";return}cep=v.slice(0,5)+"-"+v.slice(5);save();renderCart()},
  cupom(){const v=$("#cupIn").value.trim().toUpperCase();const m=$("#cartMsg");if(v&&!STORE.cupons[v]){m.hidden=false;m.textContent="Cupom inválido.";return}cupom=v;save();renderCart();if(v)toast("Cupom aplicado")},
  ir(){view="checkout";renderCart()},
  volta(){view="cart";renderCart()},
  pagTab(el){pagTab=el.dataset.v;renderCart()},
  copiar(){const t=$("#pixcode");const txt=t.value;const fim=()=>toast("Código Pix copiado");const falha=()=>{t.select();toast("Selecione e copie o código")};try{navigator.clipboard.writeText(txt).then(fim,falha)}catch(e){falha()}},
  openTrack(){openTrack()},
  fecharTrack,
  trackPedido(){fecharCarrinho();openTrack(pedido.num)},
  verPedido(el){buscar(el.dataset.n)},
  openAdmin,
  fecharAdmin,
  aTab(el){aTab=el.dataset.t;aMsg="";renderAdmin()},
  voltaProd(){edId=null;renderAdmin()},
  abrirProd(el){edId=el.dataset.id;aMsg2="";renderAdmin()},
  novoProd(){const id="n"+Date.now().toString(36);const p={id,ordem:P.length,nome:"Nova camiseta",cat:CATS[1],estilo:ESTILOS[2],preco:149.9,desc:"",esgotado:[],oculto:false,v:[{c:"preto",f:"",b:""}]};P.push(p);CAT_OV.novos.push({id});snapProd(p);edId=id;aMsg2="Preencha nome, preço e as fotos. A camiseta aparece na loja assim que tiver foto e você tocar em Publicar.";renderAdmin()},
  tgEsg(el){const p=byId(edId),t=el.dataset.t;p.esgotado=p.esgotado.includes(t)?p.esgotado.filter(x=>x!==t):p.esgotado.concat(t);snapProd(p);renderAdmin();refresh()},
  addCor(){const p=byId(edId),c=$("#novaCor")&&$("#novaCor").value;if(!c)return;p.v.push({c,f:"",b:""});snapProd(p);renderAdmin()},
  delCor(el){const p=byId(edId);if(!p)return;const c=el.dataset.c;if(p.v.length>1){p.v=p.v.filter(v=>v.c!==c)}else{const v=p.v[0];v.f='';v.b='';v.x=[];v._xc=1}snapProd(p);aMsg2=p.v.length>1||!p.v[0].f?'Cor excluída. Toque em Publicar para valer na loja.':'';renderAdmin();refresh()},
  delProd(){const i=P.findIndex(x=>x.id===edId);if(i>=0)P.splice(i,1);CAT_OV.novos=CAT_OV.novos.filter(x=>x.id!==edId);catDirty=true;edId=null;renderAdmin();refresh()},
  girar:async el=>{const p=byId(edId);const v=p&&p.v.find(x=>x.c===el.dataset.c);if(!v)return;const k=el.dataset.s;try{if(k[0]==="x"){const i=+k.slice(1);v.x[i]=await girarImg(v.x[i])}else v[k]=await girarImg(v[k]);snapProd(p);renderAdmin();refresh()}catch(e){aMsg2="Não consegui girar essa foto.";renderAdmin()}},
  tgOculto(){const p=byId(edId);if(!p)return;p.oculto=!p.oculto;snapProd(p);renderAdmin();refresh()},
  verCliente(){setCliente(true)},
  voltaDono(){setCliente(false)},
  tirar(el){const p=byId(edId);const v=p&&p.v.find(x=>x.c===el.dataset.c);if(!v)return;const k=el.dataset.s;if(k[0]==="x"){v.x.splice(+k.slice(1),1)}else v[k]="";snapProd(p);renderAdmin();refresh()},
  comoFrente(el){const p=byId(edId);const v=p&&p.v.find(x=>x.c===el.dataset.c);if(!v)return;const k=+el.dataset.k;const t=v.f;v.f=v.x[k];if(t)v.x[k]=t;else v.x.splice(k,1);snapProd(p);renderAdmin();refresh()},
  comoCostas(el){const p=byId(edId);const v=p&&p.v.find(x=>x.c===el.dataset.c);if(!v)return;const k=+el.dataset.k;const t=v.b;v.b=v.x[k];if(t)v.x[k]=t;else v.x.splice(k,1);snapProd(p);renderAdmin();refresh()},
  publicarCat,publicarGit,gitSalvar,gitTrocar,entrar,
  editaStatus(el){const o=aLista.find(x=>x.id===el.dataset.n);window.__adm={num:el.dataset.n,status:o?o.status:"recebido",rastreio:o?o.rastreio:""};aLink="";aMsg="";renderAdmin()}
};
document.addEventListener("click",e=>{const el=e.target.closest("[data-a]");if(!el)return;const fn=A[el.dataset.a];if(fn){fn(el,e)}});
document.addEventListener("submit",e=>{
  e.preventDefault();
  const id=e.target.id;
  if(id==="revForm"){enviarAvaliacao(e.target);return}
  if(id==="trkForm"){buscar(e.target.num.value);return}
  if(id==="admForm"){salvarStatus(e.target);return}
  if(id==="ckForm"){
    const f=e.target, m=$("#ckMsg");
    const v={nome:f.nome.value.trim(),tel:f.tel.value.trim(),email:f.email.value.trim(),cep:f.cep.value.trim(),cidade:f.cidade.value.trim(),rua:f.rua.value.trim(),bairro:f.bairro.value.trim(),comp:f.comp.value.trim(),obs:f.obs.value.trim(),pag:f.pag.value};
    if(v.cep.replace(/\D/g,"").length!==8){m.hidden=false;m.textContent="Confira o CEP: são 8 números.";return}
    if(v.tel.replace(/\D/g,"").length<10){m.hidden=false;m.textContent="Confira o número de WhatsApp com DDD.";return}
    cep=v.cep;pag=v.pag;pagTab=v.pag;cliente={nome:v.nome,tel:v.tel,email:v.email,cidade:v.cidade,rua:v.rua,bairro:v.bairro,comp:v.comp};
    LS.set("outsiders_cliente",cliente);
    pedido=montaPedido(v);
    meus=[{num:pedido.num,em:Date.now(),total:pedido.total,pag:pedido.pag,hist:[{s:"recebido",t:Date.now(),n:"Pedido feito no site"}]},...meus].slice(0,20);
    LS.set("outsiders_pedidos",meus);
    cart=[];save();view="pay";renderCart();
  }
});
document.addEventListener("change",async e=>{
  const el=e.target.closest&&e.target.closest("[data-f]");if(!el)return;const p=byId(el.dataset.p||edId);if(!p)return;const f=el.dataset.f;
  if(f==="img"){const file=el.files&&el.files[0];if(!file)return;
    try{const dd=await lerImg(file);const v=p.v.find(x=>x.c===el.dataset.c);if(v){v[el.dataset.s]=dd;snapProd(p);aMsg2="";renderAdmin();refresh()}}
    catch(err){aMsg2="Não consegui ler essa foto. Use JPG ou PNG.";renderAdmin()}return}
  if(f==="imgx"){const files=[...(el.files||[])].slice(0,8);if(!files.length)return;const v=p.v.find(x=>x.c===el.dataset.c);if(!v)return;
    try{v.x=v.x||[];for(const fl of files)v.x.push(await lerImg(fl));snapProd(p);aMsg2="";renderAdmin();refresh()}
    catch(err){aMsg2="Não consegui ler uma das fotos. Use JPG ou PNG.";renderAdmin()}return}
  if(f==="preco"){let s=String(el.value).trim().replace(/[^\d.,]/g,"");if(s.includes(","))s=s.replace(/\./g,"").replace(",",".");const n=parseFloat(s);
    if(!(n>0&&n<100000)){toast("Digite um preço válido, por exemplo 159,90");el.value=String(p.preco).replace(".",",");return}
    p.preco=Math.round(n*100)/100;el.value=String(p.preco).replace(".",",")}
  else if(f==="oculto")p.oculto=el.checked;
  else if(f==="nome")p.nome=el.value.trim().slice(0,60)||p.nome;
  else if(f==="desc")p.desc=el.value.slice(0,600);
  else if(f==="cat"&&CATS.includes(el.value))p.cat=el.value;
  else if(f==="estilo"&&ESTILOS.includes(el.value))p.estilo=el.value;
  else return;
  snapProd(p);aMsg2="";refresh();
  document.querySelectorAll('[data-a="publicarCat"],[data-a="publicarGit"]').forEach(b=>{if(b.dataset.a==='publicarCat'||ghCfg())b.disabled=false});
});
document.addEventListener("keydown",e=>{
  if(e.key!=="Escape")return;
  if(!$("#lb").hidden)$("#lb").hidden=true;
  else if($("#admin").classList.contains("on"))fecharAdmin();
  else if($("#track").classList.contains("on"))fecharTrack();
  else if($("#modal").classList.contains("on"))fechar();
  else if($("#drawer").classList.contains("on"))fecharCarrinho();
});
$("#q").addEventListener("input",e=>{F.q=e.target.value;renderGrid()});
$("#sort").addEventListener("change",e=>{F.sort=e.target.value;renderGrid()});
["modal","track","admin"].forEach(id=>$("#"+id).addEventListener("click",e=>{if(e.target.id===id){id==="modal"?fechar():id==="track"?fecharTrack():fecharAdmin()}}));

/* ============ INICIO ============ */
const hi=`Olá, ${STORE.nome}! Quero tirar uma dúvida.`;
["heroWa","faqWa","fab"].forEach(id=>$("#"+id).href=wa(hi));
if(location.hash==="#acompanhar")openTrack();
aplicaCat();avisoPub();updN();renderFiltros();renderGrid();initDb();
/* ===== Publicar direto no site (GitHub) — só no painel ===== */
const GH_KEY="outsiders_gh";
function ghCfg(){try{const c=JSON.parse(localStorage.getItem(GH_KEY)||"null");return c&&c.repo&&c.token?c:null}catch(e){return null}}
async function sha1(t){const b=await crypto.subtle.digest("SHA-1",new TextEncoder().encode(t));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")}
async function ghApi(c,path,opt){
  const h={"Authorization":"Bearer "+c.token,"Accept":"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28"};
  if(opt&&opt.body)h["Content-Type"]="application/json";
  const r=await fetch("https://api.github.com/repos/"+c.repo+path,Object.assign({},opt,{headers:h}));
  let j=null;try{j=await r.json()}catch(e){}
  if(!r.ok){const er=new Error((j&&j.message)||("HTTP "+r.status));er.status=r.status;throw er}
  return j}
function pubGit(){
  const c=ghCfg(),local=location.protocol==="file:";
  let info;
  if(local)info=`<p class="err" style="margin:0">Para publicar direto, abra o painel pelo endereço do seu site (ex.: seusite.com.br/admin.html). Aqui no computador só dá para baixar o arquivo.</p>`;
  else if(!c)info=`${PAINEL_URL?"":`<div class="field"><label>Endereço do servidor do painel</label><input id="srvUrl" type="text" placeholder="https://outsiders-painel.xxx.workers.dev" autocomplete="off"></div>`}
    <div class="field"><label>Senha do painel</label><input id="pwd" type="password" autocomplete="current-password"></div>
    <button class="btn full" type="button" data-a="entrar">Entrar</button>
    <details><summary class="note" style="cursor:pointer">Avançado: colar token do GitHub</summary><div style="display:grid;gap:8px;margin-top:8px">
    <div class="field"><label>Repositório (usuario/nome)</label><input id="ghRepo" type="text" placeholder="meuusuario/outsiders" autocomplete="off"></div>
    <div class="field"><label>Branch</label><input id="ghBranch" type="text" value="main" autocomplete="off"></div>
    <div class="field"><label>Token do GitHub</label><input id="ghTok" type="password" autocomplete="off"></div>
    <button class="btn ghost full" type="button" data-a="gitSalvar">Salvar conexão</button></div></details>`;
  else info=`<div class="row" style="gap:8px;justify-content:space-between;align-items:center"><span class="note">Conectado. Publicação automática ligada: ao editar, o site atualiza sozinho.</span><button class="btn ghost" type="button" data-a="gitTrocar" style="padding:6px 10px">Sair</button></div>`;
  const can=!local&&c&&catDirty;
  const msg=`<p id="ghMsg" class="${aMsg2Ok?"good":"err"}" style="margin:0" role="status">${aMsg2?esc(aMsg2):(catDirty&&c&&!local?"Você tem alterações. Toque em Publicar no site.":"")}</p>`;
  return `<div class="box" style="display:grid;gap:10px"><b>Publicar no site</b>${info}
    <button class="btn full" type="button" data-a="publicarGit" ${can?"":"disabled"}>Publicar no site agora</button>${msg}
    <button class="btn ghost full" type="button" data-a="publicarCat">Baixar arquivo (reserva)</button></div>`}
function gitSalvar(){
  const repo=($("#ghRepo").value||"").trim().replace(/^https?:\/\/github\.com\//,"").replace(/\.git$/,"").replace(/\/$/,""),branch=($("#ghBranch").value||"main").trim()||"main",token=($("#ghTok").value||"").trim();
  if(!/^[\w.-]+\/[\w.-]+$/.test(repo)){aMsg2="Escreva o repositório assim: usuario/nome (ex.: brayan/outsiders).";aMsg2Ok=false;renderAdminProd();return}
  if(token.length<20){aMsg2="Cole o token do GitHub completo.";aMsg2Ok=false;renderAdminProd();return}
  try{localStorage.setItem(GH_KEY,JSON.stringify({repo,branch,token}))}catch(e){aMsg2="Este navegador não deixou salvar a conexão.";aMsg2Ok=false;renderAdminProd();return}
  aMsg2="Conexão salva. Recarregando o painel…";aMsg2Ok=true;renderAdminProd();setTimeout(()=>location.reload(),700)}
function gitTrocar(){try{localStorage.removeItem(GH_KEY)}catch(e){}aMsg2="";renderAdminProd()}
function pubStatus(t,ok){let d=document.getElementById("autoPubSt");if(!d){d=document.createElement("div");d.id="autoPubSt";d.setAttribute("role","status");d.style.cssText="position:fixed;left:12px;bottom:12px;z-index:99999;padding:8px 12px;border-radius:8px;font:600 13px sans-serif;background:#1c1c1c;color:#fff;box-shadow:0 2px 10px rgba(0,0,0,.3);max-width:80vw";document.body.appendChild(d)}d.textContent=t;d.style.background=ok===false?"#9a3b3b":ok?"#2f6b3f":"#1c1c1c";d.hidden=!t}
function autoPub(){
  if(!window.OUTSIDERS_ADMIN||location.protocol==="file:"||!ghCfg())return;
  clearTimeout(autoTimer);pubStatus("Alterações detectadas… publicando em instantes");
  autoTimer=setTimeout(()=>{if(pubBusy){autoPub();return}publicarGit(true)},4000)}
async function publicarGit(auto){
  if(auto&&auto.nodeType)auto=false;
  const c=ghCfg();aMsg2Ok=false;
  if(!c||location.protocol==="file:"){renderAdminProd();return}
  if(pubBusy)return;pubBusy=true;const v0=editVer;
  aMsg2="Publicando… não feche esta página.";pubStatus("Publicando no site…");if(!auto)renderAdminProd();
  try{
    const copy=JSON.parse(JSON.stringify(CAT_OV)),blobs=new Map();
    const walk=async o=>{for(const k of Object.keys(o)){const v=o[k];
      if(typeof v==="string"&&/^data:image\/[a-z]+;base64,/.test(v)){const path="img/u/"+(await sha1(v)).slice(0,20)+".jpg";blobs.set(path,v.slice(v.indexOf(",")+1));o[k]=path}
      else if(v&&typeof v==="object")await walk(v)}};
    await walk(copy);
    const old=CAT_OV;CAT_OV=copy;let html;try{html=indexHtml()}finally{CAT_OV=old}
    const ref=await ghApi(c,"/git/ref/heads/"+c.branch),head=ref.object.sha,cm=await ghApi(c,"/git/commits/"+head);
    const mk=async(content,encoding)=>(await ghApi(c,"/git/blobs",{method:"POST",body:JSON.stringify({content,encoding})})).sha;
    const tree=[{path:"index.html",mode:"100644",type:"blob",sha:await mk(html,"utf-8")}];
    for(const [p,b] of blobs)tree.push({path:p,mode:"100644",type:"blob",sha:await mk(b,"base64")});
    const nt=await ghApi(c,"/git/trees",{method:"POST",body:JSON.stringify({base_tree:cm.tree.sha,tree})});
    const nc=await ghApi(c,"/git/commits",{method:"POST",body:JSON.stringify({message:"Atualização da loja ("+new Date().toLocaleString("pt-BR")+")",tree:nt.sha,parents:[head]})});
    await ghApi(c,"/git/refs/heads/"+c.branch,{method:"PATCH",body:JSON.stringify({sha:nc.sha})});
    if(editVer===v0){catDirty=false;try{localStorage.removeItem(DRAFT_KEY)}catch(e){}}
    aMsg2="Publicado! O site atualiza sozinho em cerca de 1 a 2 minutos.";aMsg2Ok=true;pubStatus("✓ Publicado. O site atualiza em 1 a 2 minutos.",true);setTimeout(()=>{if(!pubBusy&&editVer===v0)pubStatus("")},6000);
  }catch(e){
    const st=e&&e.status;
    aMsg2=st===401?"O token é inválido ou venceu. Toque em Trocar e conecte com um token novo.":
      st===403||st===404?"Sem acesso ao repositório. Confira o nome (usuario/nome), o branch e se o token tem permissão de escrita em Contents.":
      st===409||st===422?"O site mudou enquanto você editava. Toque em Publicar de novo.":
      e instanceof TypeError?"Sem conexão com o GitHub. Verifique a internet e tente de novo.":
      "Não foi possível publicar ("+((e&&e.message)||"erro")+"). Suas alterações continuam aqui; tente de novo.";
    toast(aMsg2);pubStatus("Não publicou: "+aMsg2,false)}
  pubBusy=false;renderAdminProdSafe(auto)}
function renderAdminProdSafe(auto){if(!auto||!document.activeElement||!/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName))renderAdminProd()}

/* ===== Entrar com senha (servidor do painel) ===== */
let PAINEL_URL="";
try{PAINEL_URL=(localStorage.getItem("outsiders_srv")||"").replace(/\/$/,"")}catch(e){}
if(window.OUTSIDERS_ADMIN&&location.protocol!=="file:"){
  fetch("painel-config.json?"+Date.now(),{cache:"no-store"}).then(r=>r.ok?r.json():null).then(j=>{
    if(j&&typeof j.servidor==="string"&&/^https:\/\//.test(j.servidor.trim())){PAINEL_URL=j.servidor.trim().replace(/\/$/,"");
      try{if(!ghCfg()&&document.getElementById("adminSheet")&&!edId)renderAdminProd()}catch(e){}}
  }).catch(()=>{})}
async function entrar(){
  const si=document.getElementById("srvUrl"),pw=document.getElementById("pwd");
  let srv=PAINEL_URL;if(si){srv=(si.value||"").trim().replace(/\/$/,"")}
  const senha=pw?pw.value:"";
  if(!/^https:\/\/[^\s/]+/.test(srv)){ghStat("Escreva o endereço do servidor (começa com https://).",false);return}
  if(!senha){ghStat("Digite a senha.",false);return}
  ghStat("Entrando…",true);
  try{
    const r=await fetch(srv+"/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({senha})});
    let j=null;try{j=await r.json()}catch(e){}
    if(r.status===401){ghStat("Senha incorreta.",false);return}
    if(!r.ok||!j||!j.token){ghStat(j&&j.erro==="servidor_sem_configuracao"?"O servidor ainda não foi configurado (faltam variáveis na Cloudflare).":"O servidor recusou o acesso ("+r.status+").",false);return}
    localStorage.setItem(GH_KEY,JSON.stringify({repo:j.repo,branch:j.branch||"main",token:j.token}));
    localStorage.setItem("outsiders_srv",srv);
    ghStat("Pronto! Recarregando o painel…",true);setTimeout(()=>location.reload(),600)
  }catch(e){ghStat("Não consegui falar com o servidor. Confira o endereço e a internet.",false)}}

function ghStat(t,ok){aMsg2=t;aMsg2Ok=!!ok;const e=document.getElementById("ghMsg");if(e){e.textContent=t;e.className=ok?"good":"err"}else renderAdminProd()}
