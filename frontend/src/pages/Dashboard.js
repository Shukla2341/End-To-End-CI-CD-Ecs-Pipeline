import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Academic"
  });
  const [search, setSearch] = useState("");

  const token = localStorage.getItem("token");

  // 🔒 Protect route
  if (!token) {
    window.location.href = "/login";
  }

  // 📥 Fetch all grievances
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/grievances",
        { headers: { Authorization: token } }
      );
      setData(res.data);
    } catch {
      alert("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ➕ Submit grievance
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/grievances",
        form,
        { headers: { Authorization: token } }
      );

      setForm({
        title: "",
        description: "",
        category: "Academic"
      });

      fetchData();

    } catch {
      alert("Error submitting grievance");
    }
  };

  // ❌ Delete grievance
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/grievances/${id}`,
        { headers: { Authorization: token } }
      );
      fetchData();
    } catch {
      alert("Error deleting");
    }
  };

  // 🔍 Search grievance
  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `https://aifsd-mse-2-qy3k.onrender.com/api/grievances/search?title=${search}`,
        { headers: { Authorization: token } }
      );
      setData(res.data);
    } catch {
      alert("Search error");
    }
  };

  // 🚪 Logout
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <button onClick={logout}>Logout</button>

      {/* ➕ Submit Form */}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          required
        />

        <input
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          required
        />

        <select
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        >
          <option>Academic</option>
          <option>Hostel</option>
          <option>Transport</option>
          <option>Other</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      {/* 🔍 Search */}
      <input
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
      <button onClick={fetchData}>Reset</button>

      {/* 📋 List */}
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            <b>{item.title}</b> ({item.category}) - {item.status}
            <button onClick={() => handleDelete(item._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}