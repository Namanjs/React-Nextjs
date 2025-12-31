import { useState } from "react";
import QueueForm from './components/QueueForm.jsx'
import "./App.css";
import QueueDisplay from "./components/QueueDisplay.jsx";

export default function App() {

  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
  }

  const updateStatus = (id, newStatus) => {
    setQueue(
      queue.map((customer) => {
        if (customer.id === id) {
          return { ...customer, status: newStatus };
        }
        return customer;
      })
    );
  };

  const removeFromQueue = (id) => {
    setQueue(queue.filter((customer) => {
      return customer.id !== id;
    }))
  }

  return (
    <div className="app">

      <header>

        <h1>Queue Management System</h1>
        <p>Manage your customers efficiently</p>
      </header>

      <main>

        <QueueForm onAdd={addToQueue} />
        <QueueDisplay 
        data = {queue}
        onUpdate = {updateStatus}
        onRemove = {removeFromQueue}
        />

      </main>
    </div>
  )
}