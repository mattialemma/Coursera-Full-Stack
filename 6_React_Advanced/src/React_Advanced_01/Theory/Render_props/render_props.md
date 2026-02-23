```jsx
import { useEffect, useState } from "react";

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["cake", "pie", "ice cream"]);
    } else {
      setData(["pizza", "burger", "pasta"]);
    }
  }, [url]);

  return render(data);
};

const DessertsCount = () => {
  return (
    <DataFetcher
      url="/desserts"
      render={(data) => <p>Number of desserts: {data.length}</p>}
    />
  );
};

const DrinksCount = () => {
  return (
    <DataFetcher
      url="/drinks"
      render={(data) => <p>Number of drinks: {data.length}</p>}
    />
  );
};

const App = () => {
  return (
    <div>
      <DessertsCount />
      <DrinksCount />
    </div>
  );
};
```


Implementing scroller position with render props at exercise 14.