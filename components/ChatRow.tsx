import React, { use } from 'react'
import { Doc } from "@/convex/_generated/dataModel";
import { Id } from "@/convex/_generated/dataModel";
import { useRouter } from "next/navigation";
import { UserIcon } from 'lucide-react';
import { NavigationContext } from '@/lib/NavigationProvider';

function ChatRow({ chat, onDelete }: { chat: Doc<"chats">, onDelete: (id: Id<"chats">) => void }) {
  const router = useRouter();
  const  { closeMobileNav } = use(NavigationContext);

  const handleClick = () => {
    router.push(`/dashboard/chat/${chat._id}`);
    closeMobileNav();
  }

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200/50">
      <div className="flex items-center gap-2">
        <UserIcon className="w-5 h-5 text-gray-500" />
        <p className="text-sm text-gray-700">{chat.title}</p>
      </div>
    </div>
  )
}

export default ChatRow