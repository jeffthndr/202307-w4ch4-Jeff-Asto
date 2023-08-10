export function Keys() {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  return (
    <ol className="keyboard">
      {numbers.map((item) => (
        <li className="key">
          <button className="key">{item}</button>
        </li>
      ))}
      <li>
        <button className="key big">Delete</button>
      </li>
    </ol>
  );
}
