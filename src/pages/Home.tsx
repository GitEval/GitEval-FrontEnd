//import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card } from '@/components/ui/card';
function Home(): React.ReactElement {
  return (
    <>
      <Card className="w-[40vw] p-2">
        <h1>Rank</h1>
        <Table>
          <TableCaption>Passion!!!!</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>nationality</TableHead>
              <TableHead className="text-right">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">SJN is SB</TableCell>
              <TableCell>x.kejjqnt@qq.com</TableCell>
              <TableCell>xiaoriben</TableCell>
              <TableCell className="text-right">100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">SJN is SB</TableCell>
              <TableCell>x.kejjqnt@qq.com</TableCell>
              <TableCell>xiaoriben</TableCell>
              <TableCell className="text-right">100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">SJN is SB</TableCell>
              <TableCell>x.kejjqnt@qq.com</TableCell>
              <TableCell>xiaoriben</TableCell>
              <TableCell className="text-right">100</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
export default Home;
