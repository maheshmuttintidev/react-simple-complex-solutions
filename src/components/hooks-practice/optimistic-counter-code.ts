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
  const [count, setCount] = useState({ value: 0, status: "idle" });
  
  const handleIncrement = async () => {
    setCount({ value: count.value + 1, status: "pending" });
    try {
      await fakeServer(1);
      setCount({ value: count.value + 1, status: "success" });
    } catch (error) {
      setCount({ value: count.value + 1, status: "failure" });
      console.log("error", error);
    }
  };

  return (
    <div className="space-y-2 p-4">
      <Counter count={count} handleIncrement={handleIncrement} />
    </div>
  )
}

const Counter = ({ count, handleIncrement }: any) => {
  const [, startTransition] = useTransition();
  const [optimisticCount, setOptimisticCount] = useOptimistic(
    count,
    (prevState: any, newState: any) => {
      const updatedValue = prevState.value + newState;
      return { value: updatedValue, status: "success" };
    }
  );
  return (
    <>
      <p className="text-lg">Count: {optimisticCount.value}</p>
      <Button
        disabled={optimisticCount.status === "pending"}
        onClick={() => {
          startTransition(() => {
            setOptimisticCount(1);
            handleIncrement();
          });
        }}
      >
        {optimisticCount.status === "pending" ? "Updating" : "Increment"}
      </Button>
    </>
  );
};
`;
