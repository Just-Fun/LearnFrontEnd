/*var http = require('http');
var url = require('url');
var querystring = require('querystring');

function accept(req, res) {

    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-cache'
    });

    res.end("OK");
}

http.createServer(accept).listen(8080);*/

/*

var http = require('http'); // предоставляет базовые методы для взаимодействия
var url = require('url'); // позволяет парсить url
var querystring = require('querystring'); // инструмент для парсинга и форматирования раздела query в url
var static = require('node-static'); // статический сервер, поддерживающий GET и HEAD запросы
var file = new static.Server('.');

// функция, определяет был ли запрос к серверу или на получение статики и присваивающая ответу соответственно ответ сервера или статику
var accept = function(req,res) {
    // если url запроса /vote
    if (req.url == '/vote') {
        setTimeout(function () {
            res.end('Ваш голос принят:' + new Date());
        }, 1500)
    } else {
// иначе считаем это запросом к обычному файлу и выводим его
    }
};*/
