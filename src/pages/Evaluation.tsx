import { AppSidebar } from '@/components/app-sidebar';
import AnimatedMarkdown from '@/components/common/AnimatedMarkdown';
import UserProfile from '@/components/common/userProfile';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { get } from '@/fetch';
import { ResponseUserInfo, UserInfo } from '@/type';
import { Separator } from '@radix-ui/react-separator';
import { useEffect, useState } from 'react';

export function Evaluation() {
  useEffect(() => {
    handleUser();
  }, []);
  const handleUser = () => {
    get<ResponseUserInfo>('/api/v1/user/getUserInfo', true).then((res) => {
      setUser(res.data.user);
    });
  };
  
  const [user, setUser] = useState<UserInfo>({
    Bio: 'Default bio', // 确保这里是一个非 undefined 的字符串
    avatar_url: 'string',
    blog: 'string',
    collaborators: 0,
    company: '',
    email: '',
    evaluation: '',
    followers: 0,
    following: 0,
    location: '',
    login_name: '',
    name: '',
    nationality: '',
    public_repos: 0,
    score: 0,
    total_private_repos: 0,
  });
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">GitEval</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min flex">
              <UserProfile user={user}></UserProfile>
              <AnimatedMarkdown content=""></AnimatedMarkdown>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
