import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [authorized, setAuthorized] = useState(false);
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const login = async () => {
      try {
        const password = prompt("Enter admin password");

        const res = await axios.post("https://portfolio-mdshahidraza.vercel.app/api/admin/login", {
          password
        });

        if (res.data.success) {
          setAuthorized(true);
          fetchMessages();
        }
      }catch (err) {
  console.log(err);
  alert(err.response?.data?.message || "Server Error");
}
    };

    login();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("https://portfolio-mdshahidraza.vercel.app/messages");
      setMessages(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!authorized) {
    return <p className="text-white">Checking authorization...</p>;
  }

  return (
    <div className="p-8 text-white">
      <Link to="/" className="p-2 mb-2 bg-red-700 rounded-md">
        Back to Home
      </Link>

      <h1 className="text-3xl mb-6">Admin Dashboard</h1>

      {messages.length === 0 ? (
        <p>No messages yet</p>
      ) : (
        messages.map(msg => (
          <div key={msg._id} className="bg-gray-800 p-4 mb-4 rounded">
            <h2 className="font-bold">{msg.name}</h2>
            <p>{msg.email}</p>
            <p>{msg.message}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;