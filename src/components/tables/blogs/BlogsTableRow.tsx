import { TableCell, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import DeleteBlog from "./DeleteBlog";
import EditBlog from "./EditBlog";

export default function BlogsTableRow({ blog }: { blog: IBlogCard }) {
  return (
    <TableRow>
      <TableCell>{blog.title}</TableCell>
      <TableCell>
        <span> {blog.excerpt}</span>
      </TableCell>
      <TableCell>
        <img
          src={blog.coverImageUrl}
          className="size-16 object-cover rounded-full"
          alt=""
        />
      </TableCell>
      <TableCell>
        <span>
          {format(blog.createdAt, "dd/MM/yyyy", {
            locale: ar,
          })}
        </span>
      </TableCell>
      <TableCell className="flex gap-3">
        <DeleteBlog id={blog.id} />
        <EditBlog blog={blog} />
      </TableCell>
    </TableRow>
  );
}
