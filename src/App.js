import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import AddTaskModal from "./components/modals/AddTaskModal";
import Task from "./components/Task";
import Main from "./components/Main";
import NotificationContainer from "./util/Notification.js";

function App() {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const showTaskModal = (e) => {
    setShowAddTaskModal(true);
  };

  const handleCloseTaskModal = (e) => {
    setShowAddTaskModal(false);
  };

  return (
    <div className="w-full h-screen">
      <Nav showTaskModal={showTaskModal} />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/task/:taskId" element={<Task />} />
      </Routes>

      {/* Add Task modal */}
      {showAddTaskModal && <AddTaskModal onClose={handleCloseTaskModal} />}

      {/* Notificaiton container */}
      <NotificationContainer />
    </div>
  );
}

export default App;
