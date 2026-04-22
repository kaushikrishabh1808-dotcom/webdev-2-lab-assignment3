import { useState, useCallback } from 'react';
import Header from './components/Header';
import StatsBar from './components/StatsBar';
import StudentTable from './components/StudentTable';
import AddStudentForm from './components/AddStudentForm';
import Toast from './components/Toast';

const INITIAL_STUDENTS = [
  { id: 1, name: 'Arjun Mehta',    score: 82 },
  { id: 2, name: 'Priya Sharma',   score: 37 },
  { id: 3, name: 'Rohit Verma',    score: 61 },
  { id: 4, name: 'Sneha Kapoor',   score: 55 },
  { id: 5, name: 'Dev Nair',       score: 28 },
];

let nextId = INITIAL_STUDENTS.length + 1;

function App() {
  const [students, setStudents] = useState(INITIAL_STUDENTS);
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
  };

  const handleScoreChange = useCallback((id, newScore) => {
    setStudents(prev =>
      prev.map(s => s.id === id ? { ...s, score: newScore } : s)
    );
  }, []);

  const handleAdd = useCallback((name, score) => {
    const student = { id: nextId++, name, score };
    setStudents(prev => [...prev, student]);
    showToast(`${name} added with score ${score}`);
  }, []);

  return (
    <>
      <Header total={students.length} />

      <StatsBar students={students} />

      <div className="layout">
        <StudentTable
          students={students}
          onScoreChange={handleScoreChange}
        />
        <AddStudentForm onAdd={handleAdd} />
      </div>

      <footer className="footer">
        <span className="footer__left">Student Scoreboard · Web Dev II · Assignment 3</span>
        <span className="footer__right">Pass threshold: <span>≥ 40</span></span>
      </footer>

      {toast && (
        <Toast message={toast} onDone={() => setToast(null)} />
      )}
    </>
  );
}

export default App;
