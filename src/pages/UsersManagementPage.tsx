import { StatCard } from "@/components/cards/StatCard";
import UsersTable from "@/components/tables/users-table/UsersTable";
import Box from "@/components/ui/box";
import {  BriefcaseBusiness, Container, Handshake } from "lucide-react";

export default function UsersManagementPage() {
  return (
    <Box className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6 gap-6">
      <StatCard
        title="عدد المستوردين"
        value="32 218"
        change="5.38% فتره التغيير"
        changeDirection="down"
        color="blue"
        icon={<Handshake className="w-6 h-6" />}
      />

    

      <StatCard
        title="عدد الموردين"
        value={218}
        change="3.59% فتره التغيير"
        changeDirection="up"
        color="green"
        icon={<Container   className="w-6 h-6" />}
      />

      <StatCard
        title="عدد الباحثين عن عمل"
        value={298}
        change="6.84% فتره التغيير"
        changeDirection="up"
        color="purple"
        icon={<BriefcaseBusiness  className="w-6 h-6" />}
      />
    </div>
      <UsersTable />
    </Box>
  );
}
