//step one, install packages you want to use, here it's express:
//npm init - to create package.json file
//npm install express
//add express
const express = require('express')

//then a variable, so every time we type app.method we're saying hey this is a method that belongs to express.
const app = express()

//install cors with npm install cors, then require it so we can use it.
//cors helps client side code access stuff on other servers
// const cors = require(cors)

//make port into a variable
const PORT = 8000

//tell express to use cors if it needs to.
// app.use(cors())

//creating a library of aliens
const aliens = {
    'humans': {
        'speciesName' : 'Humans',
        'homeworld': 'Earth',
        'features':'Rounded ears, hair on head and face (sometimes)',
        'interestingFact': 'Founded the United Federation of Planets after first contact with the Vulcans' ,
        'notableExamples' : "James T. Kirk, Zephram Cochran, Abraham Lincoln",
        'image': 'https://static.wikia.nocookie.net/aliens/images/6/68/The_City_on_the_Edge_of_Forever.jpg'
    },
    'vulcans': {
        'speciesName' : 'Vulcans',
        'homeworld': 'Vulcan',
        'features':'Pointed ears, upward-curving eyebrows',
        'interestingFact': 'Practice an extreme form of emotional regulation that focuses on logic above all else, pioneered by a Vulcan named Surak' ,
        'notableExamples' : "Spock, T'Pol, Sarek",
        'image': 'https://static.wikia.nocookie.net/aliens/images/7/75/Vulcans-FirstContact.jpg'
    },
    'klingons': {
        'speciesName' : 'Klingons',
        'homeworld': "Qo'noS",
        'features':'Large stature, pronounced ridges on the forehead, stylized facial hair',
        'interestingFact': 'Highly skilled in weapons and battle. Their facial ridges were lost as the result of a virus in 2154, but were subsequently restored by 2269.' ,
        'notableExamples' : "Worf, Kor, Kang",
        'image': 'https://static.wikia.nocookie.net/aliens/images/7/74/Kruge.jpg'
    },
    'romulans': {
        'speciesName' : 'Romulans',
        'homeworld': "Romulus",
        'features':'Pointed ears, upward-curving eyebrows,green tinge to the skin, diagonal smooth forehead ridges (sometimes)',
        'interestingFact': 'Share a common ancestory with Vulcans, though none of the emotional discipline. Romulus has a sister planet, Remus, on which the Remans are seen as lesser beings.' ,
        'notableExamples' : "Pardek, Tal'aura, Narissa",
        'image': 'https://static.wikia.nocookie.net/aliens/images/1/1d/Zzzd7.jpg'
    },
    'borg' : {
        'speciesName' : '(The) Borg',
        'homeworld': 'unknown (Delta Quadrant)',
        'features':'pale skin, numerous interior and exterior biological modifications',
        'interestingFact': 'No single genetic lingeage, species propagates by assimilating individuals via nanotechnology, led by a hive mind guided by a single "queen" individual. DO NOT APPROACH unless under specific diplomatic orders from Starfleet Command.' ,
        'notableExamples' : "Borg Queen, Seven of Nine, Locutus",
        'image': 'https://static.wikia.nocookie.net/aliens/images/7/76/Borg.jpg'
    },
    'gorn' : {
        'speciesName' : 'Gorn',
        'homeworld': 'unknown (Alpha Quadrant)',
        'features':'scaly green skin, large, iridescent eyes, powerful build, sharp teeth',
        'interestingFact': 'Extremely militaristic and driven to conquer, but also possess advanced scientific knowledge allowing for superior bio-weapons.' ,
        'notableExamples' : "Gorn Captain",
        'image': 'https://static.wikia.nocookie.net/aliens/images/9/9b/Gorn.jpg'
    },
    'trill' : {
        'speciesName' : 'Trill',
        'homeworld': 'Trill',
        'features':'Outward appearance similar to humans, aside from distinct dark pigment marks running symmetrically down both sides of the face and body',
        'interestingFact': 'Some Trill are willin hosts to a long-lived invertibrate symbiote that merges with the host to create a distinct personality.' ,
        'notableExamples' : "Jadzia Dax, Ezri Dax, Curzon Dax",
        'image': 'https://static.wikia.nocookie.net/aliens/images/4/42/EzriDax.jpg'
    }
}

//Express method to handle request from user to get the homepage
app.get('/', (req, res) => {
    //to send a file back, and then list file you're sending back
    res.sendFile(__dirname + '/index.html')
})
//handling request to get data (json) back from the api. Include parameter in api so user can type in a name and get that info

app.get('/api/:alienName', (req, res) => {


//extracting details from that parameter, lowercasing so there's no case issues, and stored in a variable to shorten it
   const aliensName = req.params.alienName.toLowerCase()

//So we want to grab the alien the user has requested, look through the aliens library assigned above and return the correct one. So to see if what they've looked for is in the library:
    if(aliensName in aliens){
        //if it is in there, we want to return the species information in json
        res.json(aliens[aliensName])
    } else {
        response.json(aliens['humans'])
    }
    })

   //initialize the server - if it's not available, the 'or' tells Heroku it can use a different port
   app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running.')
   })


