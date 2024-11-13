"use client";

import * as React from "react";
import Link from "next/link";
import {
  Bell,
  ChevronDown,
  Edit2,
  Home,
  MoreVertical,
  Search,
  Settings,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from "@/components/ui/sidebar";

export default function Component() {
  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full md:grid-cols-[auto_1fr]">
        <Sidebar collapsible="icon" className="border-r">
          <SidebarHeader>
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <span className="text-lg group-data-[collapsible=icon]:hidden">
                wordware
              </span>
              <span className="text-lg hidden group-data-[collapsible=icon]:block">
                W
              </span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Home className="h-5 w-5" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <Link href="#">
                    <Bell className="h-5 w-5" />
                    <span>Notifications</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 9.5V4a2 2 0 0 1 2-2h3.5" />
                      <path d="M2 14.5V20a2 2 0 0 0 2 2h3.5" />
                      <path d="M22 9.5V4a2 2 0 0 0-2-2h-3.5" />
                      <path d="M22 14.5V20a2 2 0 0 1-2 2h-3.5" />
                      <path d="M7 8h10" />
                      <path d="M7 12h10" />
                      <path d="M7 16h10" />
                    </svg>
                    <span>Projects</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>Tasks</span>
                    <span className="ml-auto text-sm text-muted-foreground">
                      10
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                    <span>Reporting</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Users className="h-5 w-5" />
                    <span>Users</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <Button className="w-full justify-start gap-3" variant="ghost">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Button>
            <Separator />
            <div className="p-4">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage alt="User avatar" src="/placeholder-user.jpg" />
                  <AvatarFallback>FS</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Frankie Sullivan</span>
                  <span className="text-xs text-muted-foreground">
                    @frankie
                  </span>
                </div>
                <Button className="ml-auto" size="icon" variant="ghost">
                  <ChevronDown className="h-4 w-4" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="flex flex-col">
          <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6">
              <SidebarTrigger />
              <h1 className="text-lg font-semibold">Customers</h1>
              <div className="ml-auto flex items-center gap-4">
                <Button variant="outline">
                  <svg
                    className=" mr-2 h-4 w-4"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" x2="12" y1="3" y2="15" />
                  </svg>
                  Import
                </Button>
                <Button>
                  <svg
                    className=" mr-2 h-4 w-4"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  Add Customer
                </Button>
              </div>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Total Customers</div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">More</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Export Data</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-3xl font-bold">2,420</div>
                    <Badge
                      className="bg-green-100 text-green-700"
                      variant="secondary"
                    >
                      +20%
                    </Badge>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Members</div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">More</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Export Data</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-3xl font-bold">1,210</div>
                    <Badge
                      className="bg-green-100 text-green-700"
                      variant="secondary"
                    >
                      +15%
                    </Badge>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Active Now</div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoreVertical className="h-4 w-4" />
                          <span className="sr-only">More</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Export Data</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold">316</div>
                    <div className="flex -space-x-2">
                      <Avatar className="border-2 border-background">
                        <AvatarImage alt="Avatar" src="/placeholder.svg" />
                        <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background">
                        <AvatarImage alt="Avatar" src="/placeholder.svg" />
                        <AvatarFallback>B</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background">
                        <AvatarImage alt="Avatar" src="/placeholder.svg" />
                        <AvatarFallback>C</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background">
                        <AvatarImage alt="Avatar" src="/placeholder.svg" />
                        <AvatarFallback>D</AvatarFallback>
                      </Avatar>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium">
                        +2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button className="h-8 rounded-full bg-green-50 px-3 text-green-600 hover:bg-green-100 hover:text-green-700">
                  All time
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
                <Button className="h-8 rounded-full bg-green-50 px-3 text-green-600 hover:bg-green-100 hover:text-green-700">
                  US, AU, +4
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
                <Button className="h-8" variant="outline">
                  More filters
                </Button>
                <div className="ml-auto">
                  <Input
                    className="w-[300px]"
                    placeholder="Search..."
                    type="search"
                  />
                </div>
              </div>
              <div className="rounded-lg border bg-card">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[300px]">About</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Version</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-blue-500" />
                          <div>
                            <div className="font-medium">
                              Content curating app
                            </div>
                            <div className="text-sm text-gray-500">
                              Brings all your new into one place
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Marketing</Badge>
                      </TableCell>
                      <TableCell>2.7</TableCell>
                      <TableCell className="text-right">
                        <Button size="icon" variant="ghost">
                          <Edit2 className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-green-500" />
                          <div>
                            <div className="font-medium">Design software</div>
                            <div className="text-sm text-gray-500">
                              Super lightweight design app
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Finance</Badge>
                      </TableCell>
                      <TableCell>2.7</TableCell>
                      <TableCell className="text-right">
                        <Button size="icon" variant="ghost">
                          <Edit2 className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-purple-500" />
                          <div>
                            <div className="font-medium">Data prediction</div>
                            <div className="text-sm text-gray-500">
                              AI and machine learning data
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Sales</Badge>
                      </TableCell>
                      <TableCell>3.1</TableCell>
                      <TableCell className="text-right">
                        <Button size="icon" variant="ghost">
                          <Edit2 className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-blue-500" />
                          <div>
                            <div className="font-medium">Productivity app</div>
                            <div className="text-sm text-gray-500">
                              Time management and productivity
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">HR</Badge>
                      </TableCell>
                      <TableCell>4.2</TableCell>
                      <TableCell className="text-right">
                        <Button size="icon" variant="ghost">
                          <Edit2 className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-blue-500" />
                          <div>
                            <div className="font-medium">
                              Web app integration
                            </div>
                            <div className="text-sm text-gray-500">
                              Connect web apps seamlessly
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Marketing</Badge>
                      </TableCell>
                      <TableCell>5.1</TableCell>
                      <TableCell className="text-right">
                        <Button size="icon" variant="ghost">
                          <Edit2 className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-blue-500" />
                          <div>
                            <div className="font-medium">Sales CRM</div>
                            <div className="text-sm text-gray-500">
                              Web based sales doc management
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Sales</Badge>
                      </TableCell>
                      <TableCell>2.3</TableCell>
                      <TableCell className="text-right">
                        <Button size="icon" variant="ghost">
                          <Edit2 className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="flex items-center justify-between p-4">
                  <Button variant="ghost">Previous</Button>
                  <div className="text-sm">Page 1 of 10</div>
                  <Button variant="ghost">Next</Button>
                </div>
              </div>
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
interface TableProps extends React.HTMLAttributes<HTMLTableElement> {}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, ...props }, ref) => (
    <div className="w-full overflow-auto">
      <table
        ref={ref}
        className={`w-full caption-bottom text-sm ${className}`}
        {...props}
      />
    </div>
  )
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={`[&_tr]:border-b ${className}`} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={`[&_tr:last-child]:border-0 ${className}`}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${className}`}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}
    {...props}
  />
));
TableCell.displayName = "TableCell";
