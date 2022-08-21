var http = require("http");
var fs = require("fs");
var formidable = require("formidable");

// http.createServer(function (req, res) {
//     fs.readFile('../primeiro.html', function(err, data){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write('Iniciando servidor...');
//         console.log('Iniciando o servidor...');
//         res.write(data);
//         res.end('Servidor criado');
//         console.log('Servidor montado em http://localhost:8085');
//     })   
// }).listen(8085);

// fs.appendFile('dados.txt', 'Gravação de dados...!', 
//     function(err) {
//         if(err) throw err;
//         console.log('Arquivo salvo!');
//     });

// fs.open('dados2.txt', 'w', function(err, file) {
//     if(err) throw err;
//     console.log('Arquivo criado!');
// });

// fs.writeFile('dados3.txt', 'Criação de arquivo utilizando fs.writefile',
//     function(err) {
//         if(err) throw err;
//         console.log('Arquivo criado com sucesso!');
//     });

// fs.appendFile('dados.txt', '\n Atualizar arquivo de dados...!', 
//     function(err) {
//         if(err) throw err;
//         console.log('Arquivo atualizado!');
//     });

// fs.writeFile('dados3.txt', 'Novos dados no arquivo dados3', 
//     function (err) {
//         if (err) throw err;
//         console.log('Arquivo com dados trocados');
//     });

// fs.unlink('dados2.txt', function(err){
//     if(err) throw err;
//     console.log('Arquivo apagado!');
// });

// var rs = fs.createReadStream('./dados.txt');
// rs.on('open', function(){
//     console.log('O arquivo esta aberto!');
// });

http
  .createServer(function (req, res) {
    if (req.url == "/upload") {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        var oldpath = files.arquivo.filepath;
        var newpath =
          "./files/" + files.arquivo.originalFilename;
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write("Arquivo enviado para o servidor");
          res.end();
        });
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="upload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="arquivo"><br>');
      res.write('<input type="submit">');
      res.write("</form>");
      return res.end();
    }
  })
  .listen(8085);