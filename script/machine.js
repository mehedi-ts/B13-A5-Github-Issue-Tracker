let allData = [];

const loader = (isloading) => {
  const lodarEl = document.getElementById("loader");
  if (isloading) {
    lodarEl.classList.remove("hidden");
  } else {
    lodarEl.classList.add("hidden");
  }
};

const filterByStatus = (sta) => {
  if (sta === "all") {
    displayData(allData);
    return;
  }
  const filterData = allData.filter((data) => data.status === sta);
  displayData(filterData);
};
const srcIssues = () => {
  loader(true);
  const srcText = document.getElementById("search").value;
  if (srcText === "") {
    alert("Search field cannot be empty!");
    return;
  }
  console.log(srcText);
  let url = `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${srcText}`;
  console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      allData = data.data;
      displayData(data.data);
      loader(false);
    });
};

const cardMOdal = (issue) => {
  const date = issue.createdAt.split("T")[0];
  const title = document.getElementById("title");
  const status = document.getElementById("status");
  const opendBy = document.getElementById("opendby");
  const dateEl = document.getElementById("date");
  const pr = document.getElementById("pr");
  const assigne = document.getElementById("assigne");
  const prio = document.getElementById("prio");
  const labels = document.getElementById("labels");

  title.innerText = issue.title;
  status.innerText = issue.status;
  status.className = `${issue.status === "open" ? "bg-[#00A96E]" : "bg-[#A855F7]"} text-white px-3 py-[6px] rounded-full`;
  opendBy.innerText = issue.author;
  dateEl.innerText = date;
  pr.innerText = issue.description;
  assigne.innerText = issue.assignee;
  prio.innerText = issue.priority;
  prio.className = `px-4 py-1 rounded-full ${issue.priority === "high" ? "bg-[#EF4444] text-[white]" : issue.priority === "medium" ? "bg-[#F59E0B] text-[white]" : "bg-[#9CA3AF] text-[white]"}`;
  labels.innerHTML = "";
  issue.labels.forEach((element) => {
    const span = document.createElement("span");
    span.className = `rounded-full px-4 py-2 text-xs font-medium ${element === "help wanted" ? "bg-[#FFF8DB] text-[#D97706]" : element === "bug" ? "bg-[#FEECEC] text-[#EF4444]" : "bg-[#DEFCE8] text-[#00A96E]"}`;
    span.innerText = element;
    labels.appendChild(span);
  });

  document.getElementById("my_modal_6").checked = true;
};

const dataLoad = (url) => {
  loader(true);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      allData = data.data;
      console.log(allData);
      displayData(data.data);
      loader(false);
    });
};
dataLoad("https://phi-lab-server.vercel.app/api/v1/lab/issues");

const displayData = (issues) => {
  const issueCount = issues.length;
  const countUp = document.getElementById("count");
  countUp.innerText = issueCount;
  const issueCon = document.getElementById("issues-con");
  issueCon.innerHTML = "";
  issues.forEach((issue) => {
    const date = issue.createdAt.split("T")[0];

    const div = document.createElement("div");
    div.addEventListener("click", () => {
      cardMOdal(issue);
    });
    div.innerHTML = `<div class="box h-[315px] rounded-[4px] shadow-md border-t-3 ${issue.status === "open" ? "border-[#00A96E]" : "border-[#A855F7]"}  bg-white">
          <div class="py-4 px-4 flex flex-col gap-3">
            <div class="flex items-center justify-between">
              <img class="w-6 h-6" src=${issue.status === "open" ? "../assets/Open-Status.png" : "./assets/Close-Status.png"} alt="" />
              <div
                class="prio w-20 h-6 flex items-center justify-center ${issue.priority === "high" ? "bg-[#FEECEC] text-[#EF4444]" : issue.priority === "medium" ? "bg-[#FFF6D1] text-[#F59E0B]" : "bg-[#EEEFF2] text-[#9CA3AF]"} rounded-full"
              >
                <p class="text-[12px] font-medium">${issue.priority}</p>
              </div>
            </div>
            <div class="text">
              <h3 class="text-sm font-semibold mt-2 text-[#1F2937]">
                ${issue.title}
              </h3>
              <p class="text-[12px] text-[#64748B]">
                ${issue.description}
              </p>
              <div class="tags flex flex-wrap gap-2 mt-3">
              ${issue.labels
                .map((lable) => {
                  return `<p class="rounded-full flex gap-1 px-4 py-1 text-xs font-medium ${lable === "help wanted" ? "bg-[#FFF8DB] text-[#D97706]" : lable === "bug" ? "bg-[#FEECEC] text-[#EF4444]" : "bg-[#DEFCE8] text-[#00A96E]"}"><img class=" w-[12px]" src=${lable === "bug" ? "./assets/bug.svg" : lable === "help wanted" ? "./assets/lifebuoy.svg" : "./assets/enh.svg"} alt="" /> ${lable}</p>
                
                `;
                })
                .join("")}


                
              </div>
            </div>
          </div>
          <div class="divider m-0"></div>
          <div class="auth py-4 px-4">
            <p>#1 ${issue.author}</p>
            <p>${date}</p>
          </div>
        </div>`;
    issueCon.appendChild(div);
  });
};
