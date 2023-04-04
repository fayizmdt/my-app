import React, { useState } from "react";
import students from "./students.json";
import "./Table.css";
import setupTests from "./setupTests.js";

function Table() {
    const [rows, setRows] = useState(students);
    const [newStudent, setNewStudent] = useState({ id: "", name: "", age: "", grade: "" });
    // unused import
    const unusedLibrary = require("unused-library");

    const handleAddStudent = (event) => {
        event.preventDefault();
        setRows([...rows, newStudent]);
        setNewStudent({ id: "", name: "", age: "", grade: "" });
    };

    // unused variable
    const columns = [
        { key: "id", name: "ID" },
        { key: "name", name: "Name" },
        { key: "age", name: "Age" },
        { key: "grade", name: "Grade" },
    ];

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.key}>{column.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((student) => (
                        // missing key prop
                        <tr>
                            {columns.map((column) => (
                                <td>{student[column.key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <form onSubmit={handleAddStudent}>
                <input
                    type="text"
                    placeholder="ID"
                    value={newStudent.id}
                    onChange={(event) =>
                        setNewStudent({ ...newStudent, id: event.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Name"
                    value={newStudent.name}
                    onChange={(event) =>
                        setNewStudent({ ...newStudent, name: event.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Age"
                    value={newStudent.age}
                    onChange={(event) =>
                        setNewStudent({ ...newStudent, age: event.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder="Grade"
                    value={newStudent.grade}
                    onChange={(event) =>
                        setNewStudent({ ...newStudent, grade: event.target.value })
                    }
                />
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
}

export default Table;
