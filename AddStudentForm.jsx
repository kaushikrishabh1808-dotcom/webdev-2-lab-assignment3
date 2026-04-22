import { useState } from 'react';

function AddStudentForm({ onAdd }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [error, setError] = useState('');

  const scoreNum = Number(score);
  const scorePercent = score !== '' ? Math.min(100, Math.max(0, scoreNum)) : 0;
  const isPass = scorePercent >= 40;

  const handleSubmit = () => {
    if (!name.trim()) {
      setError('Student name is required.');
      return;
    }
    if (score === '' || isNaN(scoreNum) || scoreNum < 0 || scoreNum > 100) {
      setError('Enter a valid score between 0 and 100.');
      return;
    }
    onAdd(name.trim(), scoreNum);
    setName('');
    setScore('');
    setError('');
  };

  return (
    <div className="panel">
      <div className="panel__header">
        <span className="panel__title">Add Student</span>
      </div>

      <div className="add-form">
        {/* Name */}
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-input"
            placeholder="e.g. Arjun Mehta"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError('');
            }}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          />
        </div>

        {/* Score */}
        <div className="form-group">
          <label className="form-label">Score (0 – 100)</label>
          <input
            type="number"
            className="form-input"
            placeholder="e.g. 78"
            value={score}
            min={0}
            max={100}
            onChange={(e) => {
              setScore(e.target.value);
              setError('');
            }}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          />
          {/* live preview bar */}
          {score !== '' && (
            <div className="score-preview">
              <div
                className={`score-preview__fill ${isPass ? '' : 'fail'}`}
                style={{ width: `${scorePercent}%` }}
              />
            </div>
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="form-group" style={{ paddingTop: 0, paddingBottom: 0 }}>
            <p style={{ color: 'var(--danger)', fontSize: '12px' }}>⚠ {error}</p>
          </div>
        )}

        {/* Submit */}
        <div className="form-footer">
          <button className="btn btn-primary" onClick={handleSubmit}>
            + Add Student
          </button>
        </div>
      </div>

      <div className="hint">
        Pass threshold: score ≥ 40
      </div>
    </div>
  );
}

export default AddStudentForm;
