import React from "react";
import { FiFile } from "react-icons/fi";

const File = ({ file }) => {
  return (
    <a
      href={file.url}
      target="_blank"
      rel="noreferrer"
      className="btn btn-outline-dark text-truncate w-100"
    >
      <FiFile size="1.1rem" className="mx-2" />
      {file.name}
    </a>
  );
};

export default File;
