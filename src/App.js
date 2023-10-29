import { useState } from "react";

import Doing from "./components/Doing";
import Done from "./components/Done";
import Nav from "./components/Nav";
import ToDo from "./components/ToDo";
import AddTaskModal from "./components/modals/AddTaskModal";

function App() {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const showTaskModal = (e) => {
    setShowAddTaskModal(true);
  };

  const handleCloseTaskModal = (e) => {
    setShowAddTaskModal(false);
  };

  return (
    <div className="">
      <Nav showTaskModal={showTaskModal} />
      <div className="grid lg:grid-cols-3 md:grid-cols-2">
        <ToDo />
        <Doing />
        <Done />
      </div>

      {showAddTaskModal && <AddTaskModal onClose={handleCloseTaskModal} />}
    </div>
  );
}

export default App;
