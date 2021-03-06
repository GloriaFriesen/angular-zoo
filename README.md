# Angular Zoo

#### _By Gloria Friesen_

### Zoo Animal Tracking Web Application
Current Version: 1.0 - 04.28.2017

### Description

Web based animal tracking application using Angular2 framework. Users are able to add, edit, and view zoo animals.

### Intended Users

Zoo employees including caretakers and administrators.

## Installation/Setup

* In the terminal, run:
  * `$ git clone <https://github.com/GloriaFriesen/angular-zoo>`
  * `$ cd angular-zoo`
  * `$ npm install`
  * `$ bower install`
  * `$ gulp build`
  * `$ gulp serve`
* In your browser, go to [http://localhost:3000](http://localhost:3000)

## Preparations

#### Stuff it needs:
- [x] animal properites
  - [x] name
  - [x] species
  - [x] age
  - [x] diet
  - [x] location
  - [x] number of caretakers
  - [x] sex
  - [x] likes
  - [x] dislikes
- [x] add animals
- [x] edit animals
- [x] view animals
- [x] view based on age
  - all
  - young (< 2 years old)
  - mature (> 2 years old)

#### Stuff it wants:
- [x] styling
  - [x] accessible design
    - [x] Add dyslexic font
    - [x] high contrast colors
    - [x] descriptive links and buttons
    - [x] large font size
  - [ ] SASS
  - [x] dispaly animals in table
  - [x] toggle form to add new animal
- [x] view based on diet
  - herbivore
  - carnivore
  - omnivore
  - meat eaters (carnivore and omnivore)
- [ ] display number of caretakers needed
- [ ] additional animal properties
  - [ ] sick (boolean)
  - [ ] special needs
  - [ ] medications

#### Stuff it would love:
- [ ] record animal admit date
- [ ] view based on species
- [ ] calculate caretakers needed for each species
- [ ] average age of species
- [ ] sort animals based on properties

## Application Map
* Components needed
  - [x] root component
  - [x] animal-list
  - [x] new-animal
  - [x] edit-animal

## Accessibility Features
* Contrast ratio (primary font color: background color): 10.69
  * Source: <http://colorsafe.co>
* Dyslexic friendly font
  * Source: <https://fontlibrary.org/en/font/opendyslexic>
* All font size increased by 150%

## Known Bugs
None that I know of.

## Support and contact details
Questions? Concerns? Suggestions? Reach out to me via github: <https://github.com/GloriaFriesen>.

## Technologies Used
* _Angular2.js_
* _TypeScript_
* _HTML_
* _CSS_
* _npm_
* _Bower_
* _Bootstrap_

## License
This software is licensed under the MIT license.
Copyright (c) 2017 Gloria Friesen.
