# Password Generator

Password generation is an increasingly important part of internet security. Many websites only accept certain parameters for their passwords such as excluding special characters or only allowing lower case letters. 

I was tasked with creating a website that can generate a novel password depending on the user's needs. The following website takes the user's input in the form of prompts and confirms, and generates a random password. The user input accepts the following character types:
* special characters ```~`!@#$%^&*()_-+={}[]|':;<>,.?/```
* lower case letters ```a-z```
* upper case letters ```A-Z```
* digits ```0-9```

In addition the user can set the length of the password within a limit of 8 to 128 characters. The underlying JavaScript uses ```Math.random()``` to randomly select one of the user selected character types and randomly select a character within that character type. 

## Usage
The site can be accessed with the following link:

[Password Generator](https://dgtlctzn.github.io/password-generator/)

## Credits
Special thanks to GA Tech Bootcamp for providing the necessary materials and information.

## License
MIT License

Copyright (c) 2020 Joseph Perry

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 