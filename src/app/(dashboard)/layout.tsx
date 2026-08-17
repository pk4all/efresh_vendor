import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import MobileAppbar from '@/components/MobileAppbar';
import BottomNav from '@/components/BottomNav';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="portal active">
      <div className="desktop-only"><Sidebar /></div>
      <MobileAppbar />
      <main className="main">
        <div className="desktop-only"><Topbar /></div>
        <div className="content">
          {children}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
