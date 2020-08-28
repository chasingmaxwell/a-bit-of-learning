# A bit of learning

I created this repository while learning about number systems with the goal of
putting into practice what I had learned. The main `index.js` file exposes
functions to convert between text and binary, octal, and hexadecimal numbers. It
has a limited set of supported characters and does not support ascii. I opted
instead to map characters to decimals based on frequency of usage in the english
language to improve performance on lookup.

## To run tests

```
yarn test
```

## @TODO

- [ ] Create a cli to convert any input text from the command line.
- [ ] Consider using ascii decimals for character map.
