const axios = require('axios')

const url = 'https://api.github.com/users/wagnerlobo/repos'

async function getRepos() {

 axios
 .get(url)
 .then(response => {

     console.log(response.data) 
     console.log('sucess')

 })

 .catch(e => {

    console.log(e)
    console.log('error')
    
 })

}
getRepos()

// 

//