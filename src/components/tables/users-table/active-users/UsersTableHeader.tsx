import UsersFilters from "../active-users/UsersFilters";

export default function UsersTableHeader() {
  return (
    <div className="flex items-center gap-3  ">
      <UsersFilters />
    </div>
  );
}
