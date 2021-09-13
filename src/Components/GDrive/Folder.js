import React from "react";
import { Link } from "react-router-dom";
import { BsFillFolderFill } from "react-icons/bs";
import { Button } from "react-bootstrap";

const Folder = ({ folder }) => {
  return (
    <Button
      to={{
        pathname: `/folder/${folder.id}`,
        state: { folder: folder },
      }}
      variant="outline-dark"
      className="text-truncate w-100"
      as={Link}
    >
      <BsFillFolderFill style={{ marginRight: "0.5rem" }} />
      {folder.name}
    </Button>
  );
};

export default Folder;
