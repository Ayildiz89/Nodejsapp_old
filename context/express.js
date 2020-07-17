var express = require('express');
var app = express();
var fs = require('fs');

app.get('/Listele',function(req,res) {
//res.send('Kullanicilari Listeler');
fs.readFile('kullanici.json','utf8',function(err,data) {
console.log(data);
res.end(data);
});

});

app.get('/Ekle',function(req,res){
//res.end('Kullanicilari Ekler');
var yenikullanici = {
"k3" : {

"isim" : "Deli",
"soyisim" : "YILDIZ",
"mail" : "yildizdeli87@hotmail.com"
}
};

fs.readFile('kullanici.json','utf8',function(err,data) {
data = JSON.parse(data);
data["k3"] = yenikullanici["k3"];
console.log(data);
res.end(JSON.stringify(data));
fs.writeFile('kullanici.json',JSON.stringify(data),function(err) {
console.log('Personel Bilgileri');
});

});


});

app.get('/Sil',function(req,res){
res.end('Kullanicilari Siler');

});


var server = app.listen(7000, function () {
	console.log('Sunucu Dinleniyor');
});
