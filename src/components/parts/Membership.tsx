import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export function Membership() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-72 h-14 text-white text-xl bg-red-500 rounded-full hover:bg-white hover:text-red-500 hover:bor:border-red-500 hover:border-2 hover:scale-105">Become a Member!</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
         
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
