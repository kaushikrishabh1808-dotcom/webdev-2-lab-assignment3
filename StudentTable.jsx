import StudentRow from './StudentRow';

function StudentTable({ students, onScoreChange }) {
  return (
    <div className="panel">
      <div className="panel__header">
        <span className="panel__title">All Students</span>
        <span className="panel__count">{students.length} records</span>
      </div>

      <div className="table-wrap">
        {students.length === 0 ? (
          <div className="empty">
            <span className="empty__icon">📋</span>
            <p className="empty__text">No students yet. Add one using the form →</p>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Score / 100</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, i) => (
                <StudentRow
                  key={student.id}
                  student={student}
                  rank={i + 1}
                  onScoreChange={onScoreChange}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="hint">
        ↑ Click any score to edit it directly. Changes reflect instantly.
      </div>
    </div>
  );
}

export default StudentTable;
