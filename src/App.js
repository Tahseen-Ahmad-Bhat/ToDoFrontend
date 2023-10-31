import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Done from "./components/Done";
import Nav from "./components/Nav";
import ToDo from "./components/ToDo";
import AddTaskModal from "./components/modals/AddTaskModal";
import Task from "./components/Task";
import Main from "./components/Main";

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

      {showAddTaskModal && <AddTaskModal onClose={handleCloseTaskModal} />}
    </div>
  );
}

export default App;
