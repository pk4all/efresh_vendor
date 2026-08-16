import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="portal active">
      <Sidebar />
      <main className="main">
        <Topbar />
        <div className="content">
          {children}
        </div>
      </main>
    </div>
  );
}
