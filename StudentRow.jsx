function StudentRow({ student, rank, onScoreChange }) {
  const isPass = student.score >= 40;
  const scorePercent = Math.min(100, Math.max(0, student.score));

  return (
    <tr className="student-row">
      {/* rank */}
      <td>
        <span className="rank">{rank}</span>
      </td>

      {/* name */}
      <td>
        <span className="student-name">{student.name}</span>
      </td>

      {/* score */}
      <td>
        <div className="score-cell">
          <input
            type="number"
            className="score-input"
            value={student.score}
            min={0}
            max={100}
            onChange={(e) => {
              const val = Math.min(100, Math.max(0, Number(e.target.value)));
              onScoreChange(student.id, val);
            }}
          />
          <div className="score-track">
            <div
              className={`score-track__fill ${isPass ? 'pass' : 'fail'}`}
              style={{ width: `${scorePercent}%` }}
            />
          </div>
        </div>
      </td>

      {/* status */}
      <td>
        <span className={`badge ${isPass ? 'pass' : 'fail'}`}>
          {isPass ? 'Pass' : 'Fail'}
        </span>
      </td>
    </tr>
  );
}

export default StudentRow;
