let allData = [];

const dataLoad = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      allData = data.data;
      console.log(allData);
      displayData(data.data);
    });
};
dataLoad("https://phi-lab-server.vercel.app/api/v1/lab/issues");

const displayData = (issues) => {
  const issueCount = issues.length;
  const issueCon = document.getElementById("issues-con");
  issueCon.innerHTML = "";
  issues.forEach((issue) => {
    const date = issue.createdAt.split("T")[0];

    const div = document.createElement("div");
    div.innerHTML = `<div class="box rounded-[4px] shadow-md border-t-3  bg-white">
          <div class="py-4 px-4 flex flex-col gap-3">
            <div class="flex items-center justify-between">
              <img class="w-6 h-6" src=${issue.status === "open" ? "../assets/Open-Status.png" : "../assets/Close-Status.png"} alt="" />
              <div
                class="prio w-20 h-6 flex items-center justify-center bg-red-200 text-red-500 rounded-full"
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
              <div class="tags flex gap-2 mt-3">
              ${issue.labels
                .map((lable) => {
                  return `<span
                  class=" flex items-center justify-center border rounded-full  "
                  ><p>${lable}</p></span
                >
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
