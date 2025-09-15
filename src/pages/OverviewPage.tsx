import DetailedReport from "@/components/detailed-report/DetailedReport";
import Overview from "@/components/overview/Overview";

export default function OverviewPage() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-7 p-4 pt-0">
        <Overview />
        <DetailedReport />
      </div>
    </>
  );
}
