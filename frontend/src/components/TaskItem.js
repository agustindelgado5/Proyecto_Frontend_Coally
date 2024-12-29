import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div className="flex items-center justify-between p-2 border rounded">
      <span>{task.title}</span>
      <span>{task.completed ? "✅" : "❌"}</span>
    </div>
  );
};

export default TaskItem;
