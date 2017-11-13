# DeviantArt React Exercise

## Returning the exercise

* Please create a local git branch with your solution and send us a diff of that branch and master
```
git checkout -b solution
git add -A "🎉 tada!"
git format-patch master --stdout > diff.patch
```
* Please do not post this exercise or your solution on any sites including github.

## About the exercise

This is not real-world code but is simplified version of things that you may experience working as a developer at DeviantArt.
Please treat it as production code for the purpose of the exercise.

## Instructions

Please read the instructions carefully.

### General

* The exercise is expected to take no more than 4-6 hours, please don't spend days on it. If you feel at the end you would normally add or improve something please just write about it.
* Do not modify the build/webpack configuration
* We are unable to answer any questions about the program or these requirements. If any of the instructions seem ambiguous, use your best judgement.

### Tasks

* Add css styles to the "NavBar" component to make it match the designs found in "imgs/designs" directory.
 * Pay attention to the details: shadows, borders

* Fix the bug in the "Modals" section. Find out why hitting the "Esc" key collapses all of the opened modals instead of collapsing only the top one after opening both modals.
 * Extra Credit: Figure out why clicking on the semi-transparent overlay has an affect on the behavior.

* Implement the "artworks" section to function the same way as the existing "artists" section. The array of artworks is stored in `src/components/Pages/Artworks/index.js`. Please avoid duplicating code and follow React best practices - https://reactjs.org/docs/composition-vs-inheritance.html#specialization.
 * Extra Credit: Make the "artworks" section not change the URL when you select an artwork.
