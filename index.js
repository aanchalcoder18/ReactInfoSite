import React from "react";
import ReactDOM from "react-dom";



//Lesson 1
// ReactDOM.render(
//     <h1>hello, everyone!</h1>, document.getElementById("root")
// )

//practice within lessson 1
// ReactDOM.render(
//     <h2>by aanchal</h2>, document.getElementById("root")
// )

//CHALLENGE 1
// Try to write that 1-liner ofreact code again! This time,
// see if you can figure out how to render an <ul> with 2+ <li>'s inside.

// ReactDOM.render(
//     <ul>
//         <li> hello </li>
//         <li> world </li>
//     </ul> , document.getElementById("root")


/* 
Challenge 2: 
Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/
// const navbar = (
//     <nav>
//         <h1>aanchal's website</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )
// ReactDOM.render(
//     navbar, document.getElementById("root")
// )

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code

 4. now fix code  
 */

// const page = (
//   <div>
//     <h1>awesome website</h1>
//     <h3>reasons i love things</h3>
//     <ol>
//       <li>1</li>
//       <li>2</li>
//       <li>3</li>
//       <li>4</li>
//     </ol>
//   </div>
// )
// // for step 3
// // document.getElementById("root").append(JSON.stringify(page));

// //for step 4
// ReactDOM.render(
//   page, document.getElementById("root")
// )

/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

// const markup = (
//   <div>
//     <img src="./react-logo.png" width="40px" />
//     <h1>Fun facts about React!</h1>
//     <ul>
//       <li>was released in 2013</li>
//       <li>was orginally created by jordan walke</li>
//       <li>has well over 100k stars on github</li>
//       <li>is maintianed by facebook</li>
//       <li>powers thousdans of enterprise apps, inclusing mobile  apps</li>
//     </ul>
//   </div>
// )

// ReactDOM.render(
//   markup, document.getElementById("root")
// )

/* POP QUIZ
1. Why do we need to `import React from "react"` in our files?
React is what defines JSX

2. If I were to console.log(page) in index.js, what would show up?
A JavaScript object. React elements that describe what React should
eventually add to the real DOM for us.

3. What's wrong with this code:
div element needed to be wrapped around h1 and p
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
We need our JSX to be nested under a single parent element

4. What does it mean for something to be "declarative" instead of "imperative"?
Declarative means I can tell the computer WHAT to do 
and expect it to handle the details. Imperative means I need
to tell it HOW to do each step.

5. What does it mean for something to be "composable"?
We have small pieces that we can put together to make something
larger/greater than the individual pieces.
*/

/* CLASS COMPONENTS */

// function TempName() {
//   return(
//     <div>
//       <img src="./react-logo.png" width="40px" />
//       <h1>Fun facts about React!</h1>
//       <ul>
//         <li>was released in 2013</li>
//         <li>was orginally created by jordan walke</li>
//         <li>has well over 100k stars on github</li>
//         <li>is maintianed by facebook</li>
//         <li>powers thousdans of enterprise apps, inclusing mobile  apps</li>
//       </ul>
//     </div>
//   )
  
// }
// ReactDOM.render(
//   <TempName />,document.getElementById("root")
// )

/** Challenge: 
Part 1: Create a page of your own using a custom Page component
It should return an ordered list with the reasons why you're
excited to be learning React :)
Render your list to the page

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/

/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/


/**
Header Challenge : 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
*/

function Header(){
  return(
    <div>
      <header>
        <nav className="nav">
          <img src="./public/react-logo.png" className="nav-logo" />
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  )
 
}

function Footer(){
  return(
    <footer>
      <small>©2022 Saxena development. All rights reserved.</small>
    </footer>
  )
}

function MainContent(){
  return(
    <div>
      <h1>Excited to Learn React</h1>
      <ol>
        <li> I am learning it already and wanted to increase my skills</li>
        <li> can make cool applications with it </li>
        <li> it is a very in demand skill right now</li>
      </ol>
    </div>
  )
}

function Page(){
  return(
    <div> 
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <Page />, document.getElementById("root")
)
