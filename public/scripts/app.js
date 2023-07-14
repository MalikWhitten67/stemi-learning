const app = new Router()
app.bindRoot('app')
app.use('/')
app.get('/', (req, res)=>{
    res.render('landing')
    res.return()
})
app.get('/login', (req, res)=>{
    res.render('login')
    res.return()
})
app.on('/', (req, res)=>{
    res.render('landing')
    res.return()
})
 