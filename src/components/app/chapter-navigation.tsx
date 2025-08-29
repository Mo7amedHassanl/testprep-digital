"use client";

import type { Chapter, Scores } from "@/lib/types";
import { BookOpen } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Badge } from "../ui/badge";

interface ChapterNavigationProps {
  chapters: Chapter[];
  scores: Scores;
  selectedChapterId: number;
  onSelectChapter: (chapterId: number) => void;
}

export function ChapterNavigation({
  chapters,
  scores,
  selectedChapterId,
  onSelectChapter,
}: ChapterNavigationProps) {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
           <SidebarTrigger />
           <h2 className="font-headline text-lg font-semibold">Chapters</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {chapters.map((chapter) => {
            const score = scores[chapter.id];
            const totalQuestions = chapter.questions.length;
            return (
              <SidebarMenuItem key={chapter.id}>
                <SidebarMenuButton
                  onClick={() => onSelectChapter(chapter.id)}
                  isActive={selectedChapterId === chapter.id}
                  tooltip={{
                    children: chapter.title,
                    className: "font-headline",
                  }}
                >
                  <BookOpen />
                  <span>{chapter.title}</span>
                  {score && totalQuestions > 0 && (
                     <Badge variant="secondary" className="ml-auto">
                       {score.correct}/{score.total}
                     </Badge>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
