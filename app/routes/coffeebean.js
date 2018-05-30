module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('teste/coffeebean');
    });

    app.post('/coffeebean', function(req, res) {
        var email = req.body.usuario.email;
        var senha = req.body.usuario.senha;

        var regExEmail = /[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~\.]{1,64}@[a-zA-Z0-9\.-]{1,128}/;
        var regExSenha = /^(?=(.*\d){2})(?=.{2,}[A-Z])(?=.{2,}[a-z])(?=.{2,}[!@#$%])[0-9a-zA-Z!@#$%]{10,128}/;

        var resultado = regExEmail.test(email) && regExSenha.test(senha);
        
        if(resultado){
            res.send('E-mail e senha validados com sucesso.')
        }else{
            res.send('E-mail e senha não estão no padrão necessário.')
        }
    });
}
