import './globals.css';
import NotificationBar from './components/NotificationBar';
import Navbar from './components/Navbar';
import SpinnerWrapper from "./components/SpinnerWrapper";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

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
        <SpinnerWrapper>{children}</SpinnerWrapper>

        {/* Ensure ChatBot has a higher z-index */}
        <div className="relative z-30">
          <ChatBot />
        </div>

        <Footer />
      </body>
    </html>
  );
}
