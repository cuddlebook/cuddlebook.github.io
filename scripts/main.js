document.addEventListener("DOMContentLoaded", () => {
  const articles = document.getElementsByTagName("article");
  const upBtn = document.getElementById("up-btn");
  const downBtn = document.getElementById("down-btn");

  upBtn.addEventListener("click", () => {
    const currentIndex = getCurrentArticleIndex();
    if (currentIndex > 0) {
      articles[currentIndex - 1].scrollIntoView({ behavior: "smooth" });
    }
    else {
      articles[0].scrollIntoView({behavior:"smooth"});
    }
  });

  downBtn.addEventListener("click", () => {
    const currentIndex = getCurrentArticleIndex();
    if (currentIndex < articles.length - 1) {
      articles[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
    }
  });

  function getCurrentArticleIndex() {
    const currentArticle = document.elementsFromPoint(0, 10).filter(element => element.tagName.toLowerCase() === "article")[0];
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].isEqualNode(currentArticle)) {
        return i;
      }
    }
    console.error("Did not find current article index");
    return 0;
  }
});
