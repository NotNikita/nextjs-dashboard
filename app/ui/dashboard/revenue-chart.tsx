import { BarChart } from "@tremor/react";
import { lusitana } from "@/app/ui/fonts";
import { Revenue } from "@/app/lib/definitions";

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/ <<<---
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default function RevenueChart({ revenue }: { revenue: Revenue[] }) {
  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Recent Revenue
      </h2>
      {/* NOTE: Uncomment this code in Chapter 7 */}

      <div className="rounded-xl bg-gray-50 p-4">
        <BarChart
          data={revenue}
          index="month"
          categories={["revenue"]}
          colors={["blue"]}
          yAxisWidth={48}
        />
      </div>
    </div>
  );
}
