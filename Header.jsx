function Header({ total }) {
  return (
    <header className="header">
      <div>
        <p className="header__eyebrow">Web Dev II · Unit 3 · Assignment 3</p>
        <h1 className="header__title">
          Student<br /><span>Score</span>board
        </h1>
      </div>
      <div className="header__meta">
        <strong>{total}</strong>
        enrolled students
      </div>
    </header>
  );
}

export default Header;
