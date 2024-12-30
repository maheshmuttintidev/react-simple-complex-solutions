import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OptimisticCounter } from "../hooks-practice/optimistic-counter";

export function TabsControlsForReact19() {
  return (
    <Tabs defaultValue="useOptimistic" className="w-full">
      <TabsList className="grid w-full grid-cols-2 ">
        <TabsTrigger value="useOptimistic">useOptimistic</TabsTrigger>
        <TabsTrigger value="useFormStatus">useFormStatus</TabsTrigger>
      </TabsList>
      <TabsContent value="useOptimistic" className="grid w-full grid-cols-1">
        <Card>
          {/* <CardHeader>
            <CardTitle>UseOptimistic</CardTitle>
            <CardDescription>
              Make changes to your useOptimistic here. Click save when you're done.
            </CardDescription>
          </CardHeader> */}
          <CardContent className="space-y-2">
            <OptimisticCounter />
            {/* <OptimisticTodos /> */}
          </CardContent>
          {/* <CardFooter>
            <Button>Save changes</Button>
          </CardFooter> */}
        </Card>
      </TabsContent>
      <TabsContent value="useFormStatus">
        <Card>
          {/* <CardHeader>
            <CardTitle>UseFormStatus</CardTitle>
            <CardDescription>
              Change your useFormStatus here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader> */}
          <CardContent className="py-2">Coming Soon...</CardContent>
          {/* <CardFooter>
            <Button>Save useFormStatus</Button>
          </CardFooter> */}
        </Card>
      </TabsContent>
    </Tabs>
  );
}
