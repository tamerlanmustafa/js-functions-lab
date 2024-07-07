/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/
// function isCharAVowel(char) {
        
//     switch (char) {
//         case 'a':
//             return true
//             break;
//         case 'e':
//             return true;
//             break;
//         case 'i':
//             return true;
//             break;
//         case 'o':
//             return true;
//             break;
//         case 'u':
//             return true;
//             break;
//         default:
//             console.log('not a vowel!')
        
//     }
// }

// console.log('Exercise 3 Result:', isCharAVowel('o'));


/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

// function generateEmail(name, domain) {
//     return `${name}@${domain}`
// }


// console.log('Exercise 4 Result:', generateEmail("blackswan", "gmail.com"));




/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/
// function greetUser(name, timeOfDay) {
//     timeOfDay = new Date().getHours()
//     if (timeOfDay >= 0 && timeOfDay < 12) {
//         return `Good morning, ${name}`
//     } else if (timeOfDay >= 12 && timeOfDay < 18) {
//         return `Good afternoon, ${name}`
//     } else {
//         `Good evening, ${name}`
//     }
// }


// console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

// function maxOfThree(num1, num2, num3) {
//     return Math.max(num1, num2, num3)
// }

// console.log('Exercise 6 Result:', maxOfThree(5, 10, 18));


/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/
function calculateTip(billAmount, tipPercentage) {
    return (billAmount*tipPercentage)/100
}


console.log('Exercise 7 Result:', calculateTip(150, 20));
