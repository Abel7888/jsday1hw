console.log('intro to Java script');

var x = 5
var y = 3
console.log(x + y);


var instructors = ['christian', 'dylan', 'christopher'];
console.log(typeof instructors, instructors)

// if else 

const check_weather = (temp) => {
    if (temp < 60) {
        return 'it\'s super cold! #hoodieseason';
    } else if (temp < 80) {
        return 'it\'s nice weater enoy your day';
    } else {
        return 'it\'s cooking outside';
    }
}
console.log(check_weather(65));
console.log(check_weather(85))


//for loop  wwith numbers
for(let i=0; i < 29; i++) {
    console.log(i);
}

// loop through an array
thieves_students = ['ashley', 'abela', 'taps', 'jag'];

const students = (abel) => {
    for(let i=0; i < abel.length; i++){
        console.log(abel[i]);
    }
}
students(thieves_students)


let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
function findWords(dog_names, dog_string){
    for(let i = 0; i < dog_names.length; i++)
    {
        if (dog_string.includes(dog_names[i])) {
            console.log(`Matched ${dog_names[i]}`)
        }
        else {
            console.log("No Matches")
        }
    }
}
console.log(findWords(dog_names, dog_string))


