import * as Dialog from "@radix-ui/react-dialog";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { X } from "lucide-react";

interface NoteCardProps {
  note: {
    date: Date;
    content: string;
  };
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className=" focus-visible:ring-2 flex flex-col focus-visible:ring-lime-400 outline-none rounded-md text-left p-5 gap-3 bg-slate-800 overflow-hidden relative hover:ring-2 hover:ring-slate-600">
        <span className=" text-sm font-medium text-slate-300">
          {note.date.toISOString()}
        </span>
        <p className=" text-sm leading-6 text-slate-400">{note.content}</p>

        <div className=" pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-black/0"></div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className=" inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 max-w-[640px] h-[60vh] w-full overflow-hidden flex flex-col outline-none bg-slate-700 rounded-md -translate-y-1/2 -translate-x-1/2">
          <Dialog.Close className=" absolute top-0 right-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
            <X className=" size-5" />
          </Dialog.Close>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className=" text-sm font-medium text-slate-300">
              {formatDistanceToNow(note.date, {
                locale: ptBR,
                addSuffix: true,
              })}
            </span>
            <p className=" text-sm leading-6 text-slate-400">{note.content}</p>
          </div>

          <button
            type="button"
            className="w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none font-medium group"
          >
            Deseja{" "}
            <span className="text-red-400 group-hover:underline">
              apagar essa nota
            </span>
            ?
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
