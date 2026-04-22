function StatsBar({ students }) {
  const total = students.length;
  const passed = students.filter(s => s.score >= 40).length;
  const failed = total - passed;
  const avg = total > 0
    ? Math.round(students.reduce((sum, s) => sum + s.score, 0) / total)
    : 0;

  return (
    <div className="stats-bar">
      <div className="stats-bar__item">
        <span className="stats-bar__label">Total</span>
        <span className="stats-bar__value">{total}</span>
      </div>
      <div className="stats-bar__item">
        <span className="stats-bar__label">Passed</span>
        <span className="stats-bar__value acid">{passed}</span>
      </div>
      <div className="stats-bar__item">
        <span className="stats-bar__label">Failed</span>
        <span className="stats-bar__value danger">{failed}</span>
      </div>
      <div className="stats-bar__item">
        <span className="stats-bar__label">Avg Score</span>
        <span className="stats-bar__value">{total > 0 ? avg : '—'}</span>
      </div>
    </div>
  );
}

export default StatsBar;
