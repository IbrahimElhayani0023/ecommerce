import { Button } from "./ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Field, FieldGroup } from "./ui/field";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
const CategoryPopup = () => {

    const [open, setOpen] = useState<boolean>(false)
    const { data, setData, post, reset, errors } = useForm<{
        name: string;
        description: string;
        image: File | null;
    }>({
        name: "",
        description: "",
        image: null,
    })


    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('/dashboard/categories')
        setOpen(false)
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <div>
                <DialogTrigger asChild>
                    <Button > + Create Category</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-sm">
                    <form onSubmit={submit}>
                        <DialogHeader>
                            <DialogTitle>Create Category</DialogTitle>
                            <DialogDescription>
                                You can create a new category here.
                            </DialogDescription>
                        </DialogHeader>
                        <FieldGroup className="mb-4">
                            <Field>
                                <Label htmlFor="name-1">Name</Label>
                                <Input
                                    id="name-1"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                            </Field>
                            <Field>
                                <Label htmlFor="description">Description</Label>
                                <Input
                                    id="description"
                                    name="description"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                />
                            </Field>
                            <Field>
                                <Label htmlFor="image">Image</Label>
                                <Input
                                    id="image"
                                    name="image"
                                    type="file"
                                    onChange={(e) => setData('image', e.target.files?.[0] || null)}
                                />
                            </Field>
                        </FieldGroup>
                        <Button type="submit">Create Category</Button>
                    </form>
                </DialogContent>
            </div>
        </Dialog>
    )
}

export default CategoryPopup