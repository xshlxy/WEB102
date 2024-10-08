# Web Development Project 2 - _LinguaBrasil_

Submitted by: **Ashley Oliveira Andrade**

This web app: **aims to help users learn some basic portuguese through the usage of flashcards**

Time spent: **3** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess in a box before seeing the flipside of the card**
- [x] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [x] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [x] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [x] A shuffle button is used to randomize the order of the cards
- [x] A user's answer may be counted as correct even when it is slightly different from the target answer
- [x] A counter displays the user's current and longest streak of correct responses
- [x] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:

- [x] The title of the card set and some information about it, such as a short description and the total number of cards are displayed
- [x] A single card at a time is displayed, only showing one of the components of the information pair
- [x] A list of card pairs is created
- [x] Clicking on the card shows the corresponding component of the information pair
- [x] Clicking the next button displays a random new card
- [x] Cards contains images in addition to or in place of text
- [x] Cards have different visual styles such as color based on their category
  - [x] _Colors in the answer that shows difficulty of question. Easy(green), Medium(yellow), Hard(blue)_

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='./src/assets/quiz-app-demo.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with LICEcap  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

When I was implementing the ability to accept close words it was a bit difficult, but fortunately I was able to figure out fuzzyset. It made it easy to implement it and I knew it was needed since portuguese has so many difficult words to spell with different accents that are not common to beginners.

## License

    Copyright 2024 Ashley Oliveira

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.