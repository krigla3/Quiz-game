# Random Quiz

## Interactive Frontend Development Milestone Project 2, Project Example Idea 2

Read Me file. Live site here.



![mockup](https://github.com/krigla3/Quiz-game/blob/main/docs/quiz%20mockup.jpg)

The project I have chosen to create is an interactive multiple choice answer quiz utilising the learned languages of HTML, CSS and current learning JavaScript.



## Structure 
The quiz is deliberately simplistic with a clean, uniform look. My focus was on the functionality of the code and this leaves me room to improve when using JavaScript again.

* Landing page
    * The landing page is also the start page for the quiz. Here we have a black background with white intro text and name. Below there is a green 'Play' button which is clickable.

    ![start](https://github.com/krigla3/Quiz-game/blob/main/docs/landing-page.jpg)

    * When you click on 'Play' the quiz will start and the first question will be displayed.

    * This functionality is the same across all devices.

* Question Time

    ![question](https://github.com/krigla3/Quiz-game/blob/main/docs/question.jpg)

    * The questions are displayed on a similar screen to the landing page. Questions are displayed in white text with solution options contained in green boxes. When the user hovers over a solution it will pop out. A score counter runs in the bottom left of the screen and a quiz status bar updates in the bottom right of the screen. The questions run intuitively when the user selects an answer. In total there are 20 available questions, however the user will get the chance to answer 5 questions per game.

* Score result

    ![score](https://github.com/krigla3/Quiz-game/blob/main/docs/score.jpg)

    * The score counter updates when a correct answer is selected.

* Quiz status

    ![status](https://github.com/krigla3/Quiz-game/blob/main/docs/score-bar.jpg)

    The quiz status is a progress bar that updates on the turn of each question, showing what question number you are currently on.

* Answers

    ![Correct](https://github.com/krigla3/Quiz-game/blob/main/docs/correct-answer.jpg)

    A correct answer will change the solution container colour to yellow.

    ![Wrong](https://github.com/krigla3/Quiz-game/blob/main/docs/wrong-answer.jpg)

    A wrong answer will change the solution container colour to red.

* Quiz end page

    ![Quiz end](https://github.com/krigla3/Quiz-game/blob/main/docs/result-page.jpg)

    The end screen shows the final quiz core and gives the option to 'Play again' or 'Go home'.

* Typography
    * The font used throughout is Acme, sans serif as backup.

* Responsiveness

    * Responsiveness is good across all screen size and devices. 
      This was achieved by adding multiple media queries in CSS that take effect on the following resolutions: 650px, 380px.

* Features left to implement

    * A feature I would like to implement in the future is the option to insert a username. This would work alongside a feature that could also be implemented to allow a returning user to keep track of their score history. A fun feature to implement would be a celebratory pop-up of confetti or fireworks when a user scores the maximum points.

## Technologies Used

* HTML
* CSS
* Font Awesome
* Github
* Google fonts
* JavaScript

## Deployment

Quiz game site was deployed to GitHub Pages by following the below steps:

1. Navigate to the ["Quiz-Game" repository](https://github.com/krigla3/Quiz-game) on GitHub.
1. Navigate to the 'Settings' tab.
1. Navigate to 'Pages' from the menu on the left. 
1. Select 'master' branch in the source drop-down.
1. Click 'Save'.
1. A link to the live deployed page is generated and can be found here: https://krigla3.github.io/Quiz-game/




## Project Status

* The project is a work in progress. There are several features I would like to implement in the future. I will work on the overall responsiveness of the site and update the aesthetic.  
  Potentially audio would be added to the page.


## Testing

* Check the responsiveness of the website on different screen sizes across different browsers (Google Chrome, Microsoft Edge).

    * Test: 
        1. Open the website in each of the aforementioned browsers.
        1. Right-click on the screen and choose 'Inspect'.
        1. Grab and drag the responsive window slowly down to 320px and then back again, checking that everything is displayed correctly in each size / breakpoint.
    * Result:
        1. All elements are responsive and display correctly in two of the tested browsers and in each of the window sizes. (Google Chrome and Microsoft Edge) 

* Check the responsiveness of the website on different mobile devices. Samsung S20, Samsung S21, Huawei P9 lite.

    * Test: 
        1. Open the website with each of the mentioned devices.
        1. Click on all navigation items (Play  button, choice buttons, Play again button, Go home button) one by one to make sure the buttons are displaying in the correct colour, that the correct score is tracked and that they lead the user to the correct parts of the quiz. 
        1. Monitor the score tracker and status bar through question selection for errors.
    * Result:
        1. All buttons working and directing user to the correct pages.
        1. Score tracker and status bar update correctly.

* Functionality testing done on different browsers (Google Chrome, Microsoft Edge) as well as different mobile devices. Samsung S20, Samsung S21, Huawei P9 lite.

    * Test: 
        1. Open the website with each of the mentioned devices.
        1. Click on all navigation items (Play  button, choice buttons, Play again button, Go home button) one by one to make sure the buttons are displaying in the correct colour, that the correct score is tracked and that they lead the user to the correct parts of the quiz. 
        1. Monitor the score tracker and status bar through question selection for errors.
    * Result:
        1. All buttons working and directing user to the correct pages.
        1. Score tracker and status bar update correctly.

## Issues/Resolutions?
* Issue - On devices with small screens, the user has to scroll in order to see all of the quiz interface, especially where questions are longer. 
    Resolution - Update the aesthetic for smaller screens so it redueces the need to scroll on the page, with all quiz items displaying in the screen area. 

## Validators
    The site has been tested in JShint, WC3 and Jigsaw. No errors were found on the HTML, CSS and JavaScript.    
  
## Sources

* [Google Fonts](https://fonts.google.com/) have been used to import Acme font. 
* [Font Awesome](https://fontawesome.com/) used to insert Owl icon on the landing page.

## Credits

* [FlexBox](https://www.w3schools.com/css/css3_flexbox.asp) tutorial has been used to address the site responsiveness on smaller devices.
* [JavaScript Crash Course](https://www.youtube.com/watch?v=hdI2bqOjy3c&t=3s) Youtube tutorial on JavaScript concepts.
* [JavaScript Beginer Course](https://www.youtube.com/watch?v=PkZNo7MFNFg) Another course for beginers that I used to gain knowledge on JavaSript.
* [JavaScript Quiz Tutorial](https://www.youtube.com/watch?v=f4fB9Xg2JEY) Youtube tutorial on how to build a quiz game using Javascript.


## Acknowledgements
* Special thanks to my mentor Daisy McG for her guidance and continuous support throughout the project.
* A big thank you for providing moral support through the project to my girfriend Roberta Carroll.

## Contact
* For any queries on the creation of this project, please contact David Maric. email: david.maric4@gmail.com







     








     
















