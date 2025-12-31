import { useState } from "react"
import { FaUserPlus } from "react-icons/fa"

export default function QueueForm({ onAdd }) {

    const [name, setName] = useState("");

    const [service, setService] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name.trim() || !service.trim()) {
            return;
        }
        onAdd({ name, service });
        setName("");
        setService("");
    }

    return (
        <>
            <form className="queue-form" onSubmit={handleSubmit}>
                <h2>Add to queue</h2>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Customer name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <select value={service} onChange={(event) => setService(event.target.value)}>
                        <option value="">Select Service</option>
                        <option value="consultation">Consultation</option>
                        <option value="payment">Payment</option>
                        <option value="support">Support</option>
                    </select>
                </div>

                <button type="submit">
                    <FaUserPlus /> Add Customer
                </button>

            </form>
        </>
    )
}