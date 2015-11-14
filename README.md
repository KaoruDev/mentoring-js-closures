# JS Closures

Learn what is a closure and gain +1 confidence. Areas of hurt:
- closure


### Requirements
- web browser


### Installation
```
git clone git@github.com:KaoruDev/mentoring-js-closures.git
```


### Objective

Finish writing the function `window.addBy()`. It must return a function that adds the number received by the number first passed.


### Examples

```
var addsByFive = window.addBy(5);

addsByFive(10); // returns 15
addsByFive(20); // returns 25
addsByFive(7); // returns 12

var addsBySeven = window.addBy(7);

addsBySeven(10); // returns 17
addsBySeven(20); // returns 27
addsByFive(10); // STILL returns 8
```


### Hints

- What is a closure? How can you create one?
