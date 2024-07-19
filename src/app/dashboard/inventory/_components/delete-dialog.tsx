import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { useToast } from "@/components/ui/use-toast";
import { deleteProduct } from "../_actions/delete-product";
import { Trash } from "lucide-react";

export const DeleteDialog = (props: { id: string }) => {
  const { toast } = useToast();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Trash className="text-red-500 m-auto" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogTitle>
          <Label>Are you sure you want to delete this item?</Label>
        </DialogTitle>
        <DialogClose asChild>
          <Button
            type="button"
            variant="destructive"
            onClick={async () => {
              await deleteProduct(props.id).then(() => {
                setTimeout(() => {
                  window.location.reload();
                }, 1500);
              });
              toast({
                title: "Success!",
                description: "Product has been deleted.",
              });
            }}
          >
            Yes
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
