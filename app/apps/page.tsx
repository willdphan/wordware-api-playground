"use client";

"use client";

import * as React from "react";
import Link from "next/link";
import {
  History,
  KeyRound,
  LayoutGrid,
  Settings,
  Cog,
  HelpCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";

export default function Component() {
  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <Sidebar className="border-r">
          <SidebarHeader>
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <span className="text-lg">wordware</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#" className="flex items-center gap-2">
                    <KeyRound className="h-5 w-5" />
                    <span>API Keys</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <Link href="#" className="flex items-center gap-2">
                    <LayoutGrid className="h-5 w-5" />
                    <span>Apps</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#" className="flex items-center gap-2">
                    <History className="h-5 w-5" />
                    <span>History</span>
                    <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-sm text-red-600">
                      2
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#" className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    <span>Support</span>
                    <span className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-sm text-red-600">
                      2
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#" className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <div className="flex flex-col">
          <div className="relative">
            <div
              className="absolute inset-0 bg-green-100"
              style={{ height: "120px" }}
            />
            <div className="relative px-6">
              <div className="translate-y-[60px]">
                <div className="h-[84px] w-[84px] rounded-xl bg-green-600 text-white flex items-center justify-center">
                  <Cog className="h-10 w-10" />
                </div>
              </div>
            </div>
          </div>
          <main className="flex-1 p-6 pt-14">
            <div className="mb-4">
              <h1 className="text-2xl font-bold">Automated Lead Generation</h1>
              <p className="text-sm text-gray-500">
                Click + New To create new list and wait for project manager
                card. Don&apos;t Create a card by yourself to manage a good
                collaboration.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Tabs defaultValue="inputs" className="w-full">
                  <TabsList>
                    <TabsTrigger value="inputs">Inputs</TabsTrigger>
                    <TabsTrigger value="runs">Runs</TabsTrigger>
                  </TabsList>
                </Tabs>
                <Button className="bg-green-100 text-green-700 hover:bg-green-200 hover:text-green-800">
                  Run
                </Button>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="app-id">App ID</Label>
                    <Input
                      id="app-id"
                      placeholder="Insert your inputs here, whether it be video, images, etc."
                    />
                  </div>
                  <div>
                    <Label htmlFor="url">URL</Label>
                    <Input
                      id="url"
                      placeholder="Insert your inputs here, whether it be video, images, etc."
                    />
                  </div>
                  <div>
                    <Label htmlFor="inputs">Inputs</Label>
                    <Input
                      id="inputs"
                      placeholder="Insert your inputs here, whether it be video, images, etc."
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="question">Question</Label>
                    <Input id="question" />
                  </div>
                  <div>
                    <Label htmlFor="context">Context</Label>
                    <Input id="context" />
                  </div>
                  <div>
                    <Label htmlFor="user-id">User-ID</Label>
                    <Input id="user-id" />
                  </div>
                </div>
              </div>
              <Separator />
              <div>
                <h2 className="text-lg font-semibold mb-4">Runs</h2>
                <Input
                  placeholder="Insert your inputs here, whether it be video, images, etc."
                  className="max-w-xl"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
