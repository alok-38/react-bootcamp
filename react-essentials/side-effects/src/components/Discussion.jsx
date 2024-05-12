import { useState, useEffect } from "react";

export default function Discussion() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // Increment count each time component renders
    setCount(count + 1);
  }, []); // Empty dependency array to ensure effect runs only once

  return (
    <li>
      <div>
        <p>
          <a href="#">Discussion {count}</a>
        </p>
        <div>
          <p>
            <a href="#">Leslie Alexander</a>
          </p>
          <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
            <circle cx={1} cy={1} r={1} />
          </svg>
          <p>
            <time>2d ago</time>
          </p>
        </div>
      </div>
    </li>
  );
}
