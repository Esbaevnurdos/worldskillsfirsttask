// Dummy database to store workspaces
let workspacesDB = [];

// Function to create a new workspace
function createWorkspace(userId, title, description = "") {
  // Check if the title is unique for the user
  const isTitleUnique = !workspacesDB.some(
    (workspace) => workspace.userId === userId && workspace.title === title
  );

  if (!isTitleUnique) {
    return { success: false, message: "Title must be unique for the user" };
  }

  // Create the workspace object
  const newWorkspace = {
    userId: userId,
    title: title,
    description: description,
  };

  // Add the workspace to the database
  workspacesDB.push(newWorkspace);

  return { success: true, workspace: newWorkspace };
}

// Function to edit an existing workspace
function editWorkspace(userId, workspaceTitle, newTitle, newDescription) {
  // Find the workspace by title
  const workspace = workspacesDB.find(
    (workspace) =>
      workspace.userId === userId && workspace.title === workspaceTitle
  );

  // If workspace not found or not owned by user, return error
  if (!workspace) {
    return {
      success: false,
      message: "Workspace not found or not owned by user",
    };
  }

  // Check if the new title is unique for the user
  const isTitleUnique = !workspacesDB.some(
    (ws) =>
      ws.userId === userId &&
      ws.title === newTitle &&
      ws.title !== workspaceTitle
  );

  if (!isTitleUnique) {
    return { success: false, message: "Title must be unique for the user" };
  }

  // Update the workspace
  workspace.title = newTitle;
  workspace.description = newDescription;

  return { success: true, workspace: workspace };
}

// Function to get all workspaces of a user
function getUserWorkspaces(userId) {
  // Filter workspaces by user id
  const userWorkspaces = workspacesDB.filter(
    (workspace) => workspace.userId === userId
  );

  // Return only titles and descriptions
  return userWorkspaces.map((workspace) => ({
    title: workspace.title,
    description: workspace.description,
  }));
}

// Function to display workspaces list
function displayWorkspaces(userId) {
  const workspacesList = document.getElementById("workspacesList");
  workspacesList.innerHTML = "";

  const userWorkspaces = getUserWorkspaces(userId);
  userWorkspaces.forEach((workspace) => {
    const li = document.createElement("li");
    li.textContent = workspace.title;
    if (workspace.description) {
      const span = document.createElement("span");
      span.textContent = " - " + workspace.description;
      li.appendChild(span);
    }
    workspacesList.appendChild(li);
  });
}

// Event listener for create workspace form submission
document
  .getElementById("createWorkspaceForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const title = this.elements.title.value;
    const description = this.elements.description.value;

    // Dummy user id for testing
    const userId = 1;

    const result = createWorkspace(userId, title, description);
    if (result.success) {
      displayWorkspaces(userId);
      alert("Workspace created successfully");
    } else {
      alert(result.message);
    }
  });

// Event listener for edit workspace form submission
document
  .getElementById("editWorkspaceForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const editTitle = this.elements.editTitle.value;
    const editDescription = this.elements.editDescription.value;

    // Dummy user id for testing
    const userId = 1;

    const result = editWorkspace(userId, editTitle, editTitle, editDescription);
    if (result.success) {
      displayWorkspaces(userId);
      alert("Workspace edited successfully");
    } else {
      alert(result.message);
    }
  });

// Dummy initialization for testing
createWorkspace(1, "Workspace 1", "Description for Workspace 1");
createWorkspace(1, "Workspace 2", "Description for Workspace 2");
displayWorkspaces(1);
