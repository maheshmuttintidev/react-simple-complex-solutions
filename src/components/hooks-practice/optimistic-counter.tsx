import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useOptimistic, useState, useTransition } from "react";
import { CodeBlock } from "../custom-ui/code-block";
import { Button } from "../ui/button";
import { optimisticCounterCodeSnippet } from "./optimistic-counter-code";

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
    <div className="p-4">
      <h1 className="text-xl pb-4">Example 1: Counter</h1>

      <Tabs defaultValue="code" className="">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="output">Output</TabsTrigger>
        </TabsList>
        <TabsContent value="code">
          <CodeBlock
            code={optimisticCounterCodeSnippet}
            language="javascript"
          />
        </TabsContent>
        <TabsContent value="output">
          <div className="space-y-2 p-4">
            <Counter count={count} handleIncrement={handleIncrement} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
