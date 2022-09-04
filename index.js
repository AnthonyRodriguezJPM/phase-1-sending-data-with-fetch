// Add your code here

/*const addDogs={
    dogName: 'Byron',
    dogBreed: 'Poodle',
};

const configurationObject = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify(addDogs),

};



fetch('http://localhost:3000/dogs', configurationObject)
.then(resp=>resp.json())
.then(data=>console.log(data))
.catch(error=>{
    alert('Bad things! Ragnarok!');
    console.log(error.message);
});
*/


function submitData(userName, UserEmail) {


const addUsers = {
    name: userName,
    email: UserEmail
};
//console.log(JSON.stringify(addUsers))

const configObjectUsers = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(addUsers)
};


return fetch('http://localhost:3000/users', configObjectUsers)
.then(resp=>resp.json())
.then(data=>console.log(data))
.catch(error=>{
    alert('Ooops, something went wrong')
    console.log(error.message)})


};

//submitData('Tony', '123tony@domain.com')
submitData('Tony', 'heytony@gmail')


