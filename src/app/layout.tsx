import './globals.css';
import NotificationBar from './components/NotificationBar';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'TalkEdge - AI Chatbot Solutions',
  description: 'Build, train, and deploy AI chatbots with ease.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="vsc-initialized">
        <NotificationBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
