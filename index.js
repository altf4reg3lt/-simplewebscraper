const PORT = 8000

const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const nodemon = require('nodemon')


const app = express()

print("target website")
const url = 'https://www.welt.de/' 

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articels = []



        $('.c-page-wrapper', html).each(function() {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articels.push({
                title,
                url

            })


        } )
        console.log(articels)


         
        
            
        
            
         
    } ).catch(error => console.log('server running on port'))



app.listen(PORT, () => console.log('server running on PORT ${PORT}') )

