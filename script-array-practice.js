//STEP 1
let movie=['Pursuit of happiness','Departed','Pretty women','Moana']
console.log(movie[1])

//STEP 2
let movies = new Array(5);
movies[0]='Eat Pray Love',
movies[1]='The taking of Pelham 123',
movies[2]='Toy Story',
movies[3]='The devil wears prada',
movies[4]='Christmas Jars'
console.log(movies[0])

//STEP 3
movies.splice(2,0,'Run away bride')
console.log(movies)
console.log(movies.length)

//STEP 4
movielist = ['Kingkong','inception','Avatar','Jumangi','Tangled']
movielist.shift()
console.log(movielist)

//STEP 5
movielist = ['Kingkong','inception','Avatar','Jumangi','Tangled','Rio','Home Alone']
for(let i in movielist)
{
    console.log(movielist[i])
}

//STEP 6
movielist = ['Kingkong','inception','Avatar','Jumangi','Tangled','Rio','Home Alone']
for(let i of movielist)
{
    console.log(i)
}

//STEP 7

movielist = ['Kingkong','inception','Avatar','Jumangi','Tangled','Rio','Home Alone']
movielist.sort()
for (let i of movielist)
{
    console.log(i)
}

//STEP 8

movielist = ['Inception','Avatar','Mean girls','Barbie','Batman','Home Alone']
let leastFavMovie = movielist.splice(2,3)
console.log('Movie I like')
console.log('-------------')
movielist.forEach((movie)=>{
    console.log(movie)
})
console.log(`...\n`)
console.log('Movie I regret watching')
console.log('-----------------------')
leastFavMovie.forEach((movies)=>{
    console.log(movies)
})
console.log(`...\n`)

//STEP 9

movielist = ['Inception','Avatar','Mean girls','Barbie','Batman','Home Alone']
leastFavMovie = movielist.splice(2,3)
console.log('Movie I like')
console.log('-------------')
movielist.forEach((movie)=>{
    console.log(movie)
})
console.log(`...\n`)
console.log('Movie I regret watching')
console.log('-----------------------')
leastFavMovie.forEach((movies)=>{
    console.log(movies)
})
console.log(`...\n`)
movies = leastFavMovie.concat(movielist)
console.log(movies)
console.log(movies.reverse())

//STEP 10 

movies = ['Kingkong','inception','Avatar','Jumangi','Tangled','Rio','Home Alone']
console.log(movies.pop())

//STEP 11

movies = ['Kingkong','inception','Avatar','Jumangi','Tangled','Rio','Home Alone']
console.log(movies.shift())

//STEP 12

movielist = ['Inception','Avatar','Mean girls','Barbie','Batman','Home Alone','Da vinci code']
movielist[movielist.indexOf('Mean girls')] ='Rio'
movielist[movielist.indexOf('Barbie')] ='Eat pray Love'
movielist[movielist.indexOf('Batman')] ='Indiana Jones'
console.log(movielist)


//STEP 13

myFavMovieList = [['Pursuit of Happiness', 1],['Inception', 2],['Avatar',3],['Taken', 4],['Home Alone', 5]]
myFavMovieList.forEach((list)=>
{
    let movieName= list.filter((item) =>{
        return typeof item === 'string'
    })
    console.log(movieName)

})


//STEP 14

employees = ['ZAK','JESSICA','MARK','FRED','SALLY']

showEmployee(employees)

function showEmployee(arr)
{
    console.log("Employees:\n")
    for(let emp in arr)
    {
        console.log(arr[emp])
    }
}

//STEP 15

filterarray = [58, '', 'abcd', true, null, false, 0]
let filtervalues = filterarray.filter((item) =>{
    return item !== '' && item !== 0 && item !== null && item !== false
})
console.log(filtervalues)

//STEP 16

array1 = [1,3,6,8,9,11,43,25,36]
function getRandomItem(array) {

    const randomIndex = (Math.floor(Math.random()*array1.length))

    return array[randomIndex];
  }
num= getRandomItem(array1)
console.log(`A random number from array: ${num}`)

//STEP 17

const larNumber= [1,3,6,8,9,11,43,25,36]
largest = Math.max(...larNumber);
console.log(`largest number is: ${largest}`); 
