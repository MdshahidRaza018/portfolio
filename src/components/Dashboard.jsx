import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Dashboard = () => {

  const [authorized, setAuthorized] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {

    const password = prompt("Enter admin password");

    axios.post("http://localhost:5000/api/admin/login", {
      password
    })
    .then(res => {
      if (res.data.success) {
        setAuthorized(true);
        fetchMessages();
      }
    })
    .catch(() => {
      alert("Wrong Password");
      window.location.href = "/";
    });

  }, []);

  const fetchMessages = async () => {
    try{
      const res = await axios.get("http://localhost:5000/api/messages");
      setMessages(res.data);
    }
    catch(err){
      console.log(err);
    }
  };

  if (!authorized) {
    return null;
  }

  return (
    <div className="p-8 text-white">

<Link to="/" className="p-2 mb-2 bg-red-700 rounded-md">Back to Home</Link>
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