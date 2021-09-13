import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import CenteredContainer from "./CenteredContainer";

const Profile = () => {
  const history = useHistory();
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      history.push("/signin");
    } catch {
      setError("Failed To Log Out");
    }
  };
  return (
    <CenteredContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update_profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </CenteredContainer>
  );
};

export default Profile;
