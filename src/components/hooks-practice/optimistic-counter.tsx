import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
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
    <div className="p-4">
      <h1 className="text-xl pb-4">Example 1: Counter</h1>

      <Tabs defaultValue="account" className="">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Output</TabsTrigger>
          <TabsTrigger value="password">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="space-y-2 p-4">
            <p className="text-lg">Count: {count}</p>
            <Button onClick={handleIncrement} disabled={isLoading}>
              {isLoading ? "Loading..." : "Increment"}{" "}
            </Button>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <CodeBlock code={optimisticCounterCodeSnippet} language="javascript"/>
        </TabsContent>
      </Tabs>
    </div>
  );
}



const CopyText = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("Text to copy");
    alert("Text copied!");
  };

  return (
    <div className="relative h-48">
      <div className="sticky top-0 bg-blue-500 text-white p-4">
        <button
          className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 focus:outline-none"
          onClick={handleCopy}
        >
          Copy
        </button>
      </div>
     
    </div>
  );
};

