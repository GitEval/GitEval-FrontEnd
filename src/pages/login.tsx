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
  const handleGithub = () => {
    // const state = Math.floor(Math.random() * Math.pow(10, 8));
    // localStorage.setItem("state", state.toString());
    window.open(
      `https://github.com/login/oauth/authorize?client_id=Ov23linmpwhcW9E53dNb&redirect_uri=http://localhost:5173/home`,
      "_blank"
    );
    const code = new URLSearchParams(window.location.search).get("code")||'';
    
  }
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
            <Button className="w-full inline-flex gap-4" onClick={handleGithub}>
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
