/**
 * add a shadow to the header if the user scrolled.
 */

const addHeaderShadow = () => {
  const element = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (scrollY !== 0) {
      element.style.boxShadow = "0 3px 15px #171a2140";
    } else {
      element.style.boxShadow = "none";
    }
  });
};
addHeaderShadow();

/**
 * make the work section appear on window scroll
 */

const workAppearance = () => {
  const workContainer = document.querySelector(".work");

  window.addEventListener("scroll", () => {
    if (scrollY > 800) {
      workContainer.style.transform = "translateY(0)";
    } else {
      workContainer.style.transform = "translateY(25%)";
    }
  });
};
workAppearance();

/**
 * create work items:
 * on the home page, we can only see two projects.
 */

const createWorkItem = () => {
  const workContainer = document.querySelector(".work__content");

  for (let data of projects) {
    // create item
    const workItem = document.createElement("article");
    workItem.classList.add("work__content__item");
    workContainer.appendChild(workItem);

    // create link (website)
    const workItemLink = document.createElement("a");
    workItemLink.classList.add("work__content__item__link");
    workItemLink.href = data.links.website;
    workItemLink.target = "_blank";
    workItemLink.rel = "noopener noreferrer";
    workItem.appendChild(workItemLink);

    // create img
    const workItemCover = document.createElement("img");
    workItemCover.classList.add("work__content__item__link__img");
    workItemCover.src = "./images/work/" + data.picture;
    workItemCover.alt = "couverture du projet" + " - " + data.title;
    workItemLink.appendChild(workItemCover);

    // create description block
    const workItemInfo = document.createElement("div");
    workItemInfo.classList.add("work__content__item__desc");
    workItem.appendChild(workItemInfo);

    // create title
    const workItemHdg = document.createElement("h3");
    workItemHdg.classList.add("work__content__item__desc__hdg");
    workItemHdg.textContent = data.title;
    workItemInfo.appendChild(workItemHdg);

    // create link (code)
    const workItemGithubLink = document.createElement("a");
    workItemGithubLink.classList.add("work__content__item__desc__btn", "btn");
    workItemGithubLink.href = data.links.code;
    workItemGithubLink.target = "_blank";
    workItemGithubLink.rel = "noopener noreferrer";
    workItemGithubLink.title = data.title + " repository";
    workItemInfo.appendChild(workItemGithubLink);

    // create icon
    const workItemIcon = document.createElement("i");
    workItemIcon.classList.add("fa-solid", "fa-code");
    workItemGithubLink.appendChild(workItemIcon);
  }
};
createWorkItem();

/**
 * duplication arrow icon
 */

const duplicateCodeIcon = () => {
  const links = document.getElementsByClassName(
    "work__content__item__desc__btn"
  );

  for (const i of links) {
    const icon = document.querySelector(".fa-code");
    const copy = icon.cloneNode(true);
    i.appendChild(copy);
  }
};
duplicateCodeIcon();

/**
 * make the lists of the values section appear on window scroll
 */

const listOfValuesAnimation = () => {
  const valueContentLists = document.getElementsByClassName(
    "values__content__list"
  );

  window.addEventListener("scroll", () => {
    // check the screen size
    // if the user is using a desk
    if (innerWidth > 992) {
      // user scroll down
      // the first content list move to the left
      // it return to its init position
      if (valueContentLists[0]) {
        if (scrollY > 1750) {
          valueContentLists[0].style.transform = "translateX(0)";
        } else {
          valueContentLists[0].style.transform = "translateX(25%)";
        }
      }

      // the second one move to the right
      if (valueContentLists[1]) {
        if (scrollY > 1750) {
          valueContentLists[1].style.transform = "translateX(0)";
        } else {
          valueContentLists[1].style.transform = "translateX(-25%)";
        }
      }
    } else {
      for (const list of valueContentLists) {
        list.style.transform = "none";
      }
    }
  });
};
listOfValuesAnimation();

/**
 * display the rest of the article on click
 */

const displayAllArticle = () => {
  const readMoreBtn = document.querySelector(".article__btn");
  const articleTexts = document.getElementsByClassName(
    "article__element__content__text"
  );

  readMoreBtn.addEventListener("click", () => {
    if (readMoreBtn.textContent === "Lire la suite") {
      articleTexts[1].style.display = "flex";
      readMoreBtn.textContent = "Replier l'article";
    } else {
      articleTexts[1].style.display = "none";
      readMoreBtn.textContent = "Lire la suite";
    }
  });
};
displayAllArticle();

/**
 * duplication logos slide
 */

const copyLogoSlide = () => {
  const logos = document.querySelector(".skills__logos");
  const slide = document.querySelector(".skills__logos__container");
  const copy = slide.cloneNode(true);
  logos.appendChild(copy);
};
copyLogoSlide();
