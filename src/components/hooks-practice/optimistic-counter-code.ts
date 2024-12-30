export const optimisticCounterCodeSnippet = `import { useState } from "react";
import { Button } from "../ui/button";

const fakeServer = (newCount: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve(newCount);
      } else {
        reject("Server error");
      }
    }, 1000);
  });
};

export function OptimisticCounter() {
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleIncrement = async () => {
    const optimisticCount = count + 1;
    setCount(optimisticCount);
    setIsLoading(true);

    try {
      await fakeServer(optimisticCount);
    } catch (error) {
      setCount(count);
    } finally {
      setIsLoading(false);
    }
  };

  return (
   <div className="space-y-2 p-4">
    <p className="text-lg">Count: {count}</p>
    <Button onClick={handleIncrement} disabled={isLoading}>
      {isLoading ? "Loading..." : "Increment"}{" "}
    </Button>
    </div>
  )
}`