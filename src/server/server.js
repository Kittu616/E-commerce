import node from "node:http";
import express from 'express';
import path from 'path';
import fs from 'fs';
import {fileURLToPath} from "url"



const __filename= fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)



const app = express();



let i=0
app.get('/', (req, res, next) => {
res.send('About page');
i+=1;
console.log(`ith as passed `);
return next(new Error('Something went wrong'));
});

var url ="https://newsapi.org/v2/everything?q=tesla&from=2024-09-03&sortBy=publishedAt&apiKey=0bbb834064de496582ce94d2ea1055c0"
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

app.listen(3000);