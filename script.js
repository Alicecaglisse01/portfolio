const fileExplorer = document.getElementById("file-explorer");
const google = document.getElementById("google");
const vscode = document.getElementById("vscode");

fileExplorer.addEventListener("dblclick", () => {
  const windowEl = document.createElement("div");
  windowEl.classList.add("window");

  const windowHeaderEl = document.createElement("div");
  windowHeaderEl.classList.add("window-header");
  windowHeaderEl.style.backgroundColor = "#202020";
  windowEl.style.border = "solid 3px #A44021";

  const windowHeaderTitleEl = document.createElement("div");
  windowHeaderTitleEl.classList.add("window-header-title");
  windowHeaderTitleEl.textContent = "🏠 Accueil";
  windowHeaderTitleEl.style.backgroundColor = "#4D4D4D";
  windowHeaderTitleEl.style.borderTopRightRadius = "10px 10px";
  windowHeaderTitleEl.style.borderTopLeftRadius = "10px 10px";
  windowHeaderTitleEl.style.paddingLeft = "10px";
  windowHeaderTitleEl.style.paddingRight = "10px";
  windowHeaderTitleEl.style.color = "white";

  const windowHeaderCloseEl = document.createElement("div");
  windowHeaderCloseEl.classList.add("window-header-close");
  windowHeaderCloseEl.innerHTML =
    '<span id="close" class="material-icons">close</span>';

  windowHeaderCloseEl.addEventListener("click", () => {
    windowEl.remove();
    windowHeaderEl.remove();
  });

  const windowContentEl = document.createElement("div");
  windowContentEl.classList.add("window-content");

  const windowContentTitleEl = document.createElement("div");
  windowContentTitleEl.classList.add("window-content-title");
  windowContentTitleEl.textContent = "Dossiers";

  const windowContentListEl = document.createElement("div");
  windowContentListEl.classList.add("window-content-list");

  const folders = [
    "Documents",
    "Téléchargements",
    "Musiques",
    "Images",
    "Videos",
  ];
  const folderIcons = {
    Documents: "Images/documents.png",
    Téléchargements: "Images/downloads.png",
    Musiques: "Images/music.png",
    Images: "Images/images.png",
    Videos: "Images/videos.png",
  };

  folders.forEach((folder) => {
    const windowContentItemEl = document.createElement("div");
    windowContentItemEl.classList.add("window-content-item");

    const windowContentItemImageEl = document.createElement("img");
    windowContentItemImageEl.src = folderIcons[folder];

    const windowContentItemSpanEl = document.createElement("span");
    windowContentItemSpanEl.textContent = folder;

    windowContentItemEl.appendChild(windowContentItemImageEl);
    windowContentItemEl.appendChild(windowContentItemSpanEl);
    windowContentListEl.appendChild(windowContentItemEl);
  });

  windowHeaderEl.appendChild(windowHeaderTitleEl);
  windowHeaderEl.appendChild(windowHeaderCloseEl);
  windowContentEl.appendChild(windowContentTitleEl);
  windowContentEl.appendChild(windowContentListEl);
  windowEl.appendChild(windowHeaderEl);
  windowEl.appendChild(windowContentEl);
  document.body.appendChild(windowEl);
});

google.addEventListener("dblclick", () => {
  const windowEl = document.createElement("div");
  windowEl.classList.add("window");

  const windowHeaderEl = document.createElement("div");
  windowHeaderEl.classList.add("window-header");
  windowHeaderEl.style.backgroundColor = "#4285F4";
  windowEl.style.width = "800px";
  windowEl.style.height = "600px";
  windowEl.style.left = "calc(50% - 400px)";
  windowEl.style.top = "calc(50% - 300px)";
  windowEl.style.border = "solid 3px #A44021";
  windowEl.style.position = "absolute";

  const windowHeaderTitleEl = document.createElement("div");
  windowHeaderTitleEl.classList.add("window-header-title");
  windowHeaderTitleEl.textContent = "Google";
  windowHeaderTitleEl.style.backgroundColor = "#F1F1F1";
  windowHeaderTitleEl.style.borderTopRightRadius = "10px 10px";
  windowHeaderTitleEl.style.borderTopLeftRadius = "10px 10px";
  windowHeaderTitleEl.style.paddingLeft = "10px";
  windowHeaderTitleEl.style.paddingRight = "10px";
  windowHeaderTitleEl.style.color = "#202020";
  windowHeaderEl.style.backgroundColor = "#A44021";

  const windowHeaderCloseEl = document.createElement("div");
  windowHeaderCloseEl.classList.add("window-header-close");
  windowHeaderCloseEl.innerHTML =
    '<span id="close" class="material-icons">close</span>';

  windowHeaderCloseEl.addEventListener("click", () => {
    windowEl.remove();
    windowHeaderEl.remove();
  });

  const windowContentEl = document.createElement("div");
  windowContentEl.classList.add("window-content");
  windowContentEl.style.backgroundColor = "white";

  const googleIframeEl = document.createElement("iframe");
  googleIframeEl.src = "http://146.59.196.129/Acme/public/index.php";
  googleIframeEl.style.width = "100%";
  googleIframeEl.style.height = "calc(100% - 40px)";
  googleIframeEl.style.border = "none";

  windowHeaderEl.appendChild(windowHeaderTitleEl);
  windowHeaderEl.appendChild(windowHeaderCloseEl);
  windowContentEl.appendChild(googleIframeEl);
  windowEl.appendChild(windowHeaderEl);
  windowEl.appendChild(windowContentEl);
  windowEl.style.left = "calc(50% - " + windowEl.offsetWidth / 2 + "px)"; // Add this line
  windowEl.style.top = "calc(50% - " + windowEl.offsetHeight / 2 + "px)"; // Add this line

  document.body.appendChild(windowEl);
});

vscode.addEventListener("dblclick", () => {
  window.open("https://code.visualstudio.com/", "_blank");
});
