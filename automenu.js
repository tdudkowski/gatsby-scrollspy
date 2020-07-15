import React from "react";
import { Link } from "gatsby";
import { debounce } from "lodash";
import _ from "lodash";

let hrefs = [];
let titles = [];

const Automenu = () => {
  // CREATE DATA FOR NAV LIST
  const start = () => {
    // OMIT ERR IF COLLECTION IS EMPTY
    try {
      const HeadersContainer = Array.from(
        document.getElementsByClassName("content-container")
      )[0];
      const H3List = Array.from(HeadersContainer.getElementsByTagName("h3"));
      hrefs = [];
      titles = [];
      for (let i = 0; i < H3List.length; i++) {
        hrefs.push(H3List[i].id);
        titles.push(H3List[i].textContent);
      }
      console.log(H3List);
      scrollSpy(H3List);
    } catch (e) {
      return;
    }
  };

  // GET POSITONS OF HEADERS FOR SCROLLSPY
  const navList = document.getElementsByClassName("automenu");
  function getPosition(element) {
    let valuesArr = [];
    for (let i = 0; i < element.length; i++) {
      let yPosition = 0;
      yPosition +=
        element[i].offsetTop - element[i].scrollTop + element[i].clientTop;
      valuesArr.push(yPosition - window.scrollY);
    }
    return valuesArr;
  }

  const removeClasses = () => {
    const els = document.getElementsByClassName("currentInnerAnchor");
    if (els[0]) {
      els[0].classList.remove("currentInnerAnchor");
    }
  };

  const scrollSpy = (H3List) => {
    let x = getPosition(H3List);
    for (let i = 0; i < H3List.length; i++) {
      removeClasses();
      if (x[i] <= 0 && (x[i + 1] > 0 || i + 1 === H3List.length)) {
        navList[0].children[i].classList.add("currentInnerAnchor");
        return;
      }
    }
  };

  window.addEventListener("scroll", _.debounce(start, 100));
  window.onload = start();

  return (
    <ul className="automenu">
      {hrefs.map((href, i) => (
        <li key={i}>
          <Link to={"#" + href}>{titles[i]}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Automenu;
