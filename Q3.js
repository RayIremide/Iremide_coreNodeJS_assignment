const http =require('http')

const hostname = 'localhost'
const port = 5050

function requestHandler(request,response){
    console.log(request)
    response.write("My name is Iremide Olatunji")
    response.write("\n This is the first local server i built")
    response.end("\n Hello World")	
}

const server =http.createServer(requestHandler)
server.listen(port,hostname, ()=>{
    console.log(`Server running successfully at http://${hostname}:${port}`)
})