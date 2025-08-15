 import React from "react";
 import ReactDOM from "react-dom/client";
//  const heading=React.createElement("div",{id:"parents"},[
//                      React.createElement("div",{id:"child1"},[
//                          React.createElement("h1",{id:"childInside1"},"Hello friends i am kishan"),
//                         React.createElement("h1",{id:"childInside2"},"Hello i am the Billionaire")
//                     ] ),
//                      React.createElement("div",{id:"child2"},[
//                         React.createElement("h1",{id:"childInside3"},"Hiiiii friends i am kishan"),
//                         React.createElement("h1",{id:"childInside4"},"Hiiiii i am the Billionaire")
                    
//                       ]) ]);
const h1 = React.createElement("h1",{id:"childInside1"},"Hello friends i am before  after afterkishan");
const h2 = React.createElement("h1",{id:"childInside2"},"Hello i am the before after theeeeeeeeeee Billionaire");
const h3 = React.createElement("h1",{id:"childInside3"},"Hiiiii friends i am before after kishan");
const h4 = React.createElement("h1",{id:"childInside4"},"Hiiiii i am before  after it");
const child1=React.createElement("div",{id:"child1"},h1,h2);
const child2=React.createElement("div",{id:"child2"},h3,h4);
const heading=React.createElement("div",{id:"parent"},child1,child2);
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);    