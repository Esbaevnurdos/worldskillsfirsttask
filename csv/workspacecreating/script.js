// document.addEventListener("DOMContentLoaded", function () {
//   const createWorkspaceForm = document.getElementById("createWorkspaceForm");
//   createWorkspaceForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const title = document.getElementById("title").value;
//     const description = document.getElementById("description").value;
//     createWorkspace(title, description);
//   });
// });

// function createWorkspace(title, description) {
//   const workspace = `${title},${description}\n`;

//   fetch("workspaces.csv", {
//     method: "POST",
//     headers: { "Content-Type": "text/csv" },
//     body: workspace,
//   })
//     .then(() => {
//       alert("Workspace created successfully!");
//       document.getElementById("createWorkspaceForm").reset();
//     })
//     .catch((error) => console.error("Error creating workspace:", error));
// }
