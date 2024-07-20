import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";

export const BusinessStatistics = () => {
  return (
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle>Business Statistics</CardTitle>
        <CardDescription>Abstract of Information</CardDescription>
      </CardHeader>
      <CardContent className="w-full flex flex-wrap justify-between">
        <div className="w-[45%] flex flex-col gap-2">
          <Label className="text-xl">Growth Rate</Label>
          <Label className="text-m text-blue-500">
            22% Higher compared last week
          </Label>

          <Progress value={30} className="h-2 w-full" />
        </div>
        <div className="w-[45%] flex flex-col gap-2">
          <Label className="text-xl">Order Rate</Label>
          <Label className="text-m text-blue-500">
            57% higher compared last week
          </Label>
          <Progress value={57} className="h-2 w-full" />
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
