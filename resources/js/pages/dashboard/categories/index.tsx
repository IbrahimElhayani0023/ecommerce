import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import CategoryPopup from '@/components/category-popup';
import EditCategoryPopup from '@/components/edit-category-popup';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Categories',
        href: '/dashboard/categories',
    },
];

type Category = {
    name: string;
    slug: string;
    description: string;
    image: string;
}

export default function Categories({ categories }: { categories: Category[] }) {
    console.log(categories);

    const handleEdit = (category: Category) => {
        console.log('edit');
    };

    const handleDelete = (category: Category) => {
        console.log('delete');
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Categories" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Categories</h2>
                    <CategoryPopup />
                </div>
                <hr className="border-muted" />

                {/* create table */}
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Slug</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Image</TableHead>
                            <TableHead>Is Active</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {categories.map((category: any) => (
                            <TableRow key={category.id}>
                                <TableCell>
                                    <img src={`../storage/${category.image}`} alt={category.name} className="w-15 h-15 rounded" />
                                </TableCell>
                                <TableCell>{category.name}</TableCell>
                                <TableCell>{category.slug}</TableCell>
                                <TableCell>{category.description}</TableCell>
                                <TableCell>{category.is_active ? 'Yes' : 'No'}</TableCell>
                                <TableCell className='flex justify-center aline-center gap-2'>
                                    <EditCategoryPopup category={category} />
                                    <Button variant='destructive' size="sm" onClick={() => handleDelete(category)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </AppLayout>
    );
}
