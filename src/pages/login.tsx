import GithubIcon from '@/components/common/githubIcon';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function Login() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen p-6">
      <div className="grid gap-6 w-full max-w-sm">
        <h1 className="text-3xl font-bold">登录</h1>
        <Card>
          <CardHeader>
            <CardTitle>GitEval</CardTitle>
            <CardDescription>描述描述描述描述</CardDescription>
          </CardHeader>
          <CardContent>
            <p>内容内容内容内容内容</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full inline-flex gap-4">
              <GithubIcon className="h-4 w-4" />
              GitHub
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
export default Login;
