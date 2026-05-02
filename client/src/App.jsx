import React from "react";

const Content = () => {
  return (
    <div style={styles.container}>
      
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.title}>Student Information</h1>
      </header>

      {/* Content Section */}
      <div style={styles.contentBox}>
        <h2>Student Details</h2>

        <p>
          <strong>Name:</strong> Kushagra Pitre
        </p>

        <p>
          <strong>SAP ID:</strong> 590027989
        </p>

        <p>
          <strong>Course:</strong> Bachelor of Computer Applications
        </p>

        <p>
          <strong>Specialization:</strong> Cybersecurity & Digital Forensics
        </p>

        <p>
          This React component displays student information and can be used
          in projects, assignments, or portfolio applications. It demonstrates
          basic React component structure and styling using inline CSS.
        </p>
      </div>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <p>© 2026 Kushagra Pitre | SAP ID: 590027989</p>
      </footer>

    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    backgroundColor: "#f4f6f8",
    minHeight: "100vh",
    padding: "20px"
  },

  header: {
    backgroundColor: "#007bff",
    color: "black",
    padding: "15px",
    borderRadius: "8px"
  },

  title: {
    margin: 0
  },

  contentBox: {
    backgroundColor: "white",
    marginTop: "20px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },

  footer: {
    marginTop: "30px",
    padding: "10px",
    fontSize: "14px",
    color: "#170b0b"
  }
};

export default Content;