import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OptimisticTodos } from "../hooks-practice";
import { OptimisticCounter } from "../hooks-practice/optimistic-counter";

export function TabsControlsForReact19() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">useOptimistic</TabsTrigger>
        <TabsTrigger value="password">useFormStatus</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          {/* <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader> */}
          <CardContent className="space-y-2">
           <OptimisticCounter />
           <OptimisticTodos />
          </CardContent>
          {/* <CardFooter>
            <Button>Save changes</Button>
          </CardFooter> */}
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          {/* <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader> */}
          <CardContent className="py-2">
           Coming Soon...
          </CardContent>
          {/* <CardFooter>
            <Button>Save password</Button>
          </CardFooter> */}
        </Card>
      </TabsContent>
    </Tabs>
  );
}
