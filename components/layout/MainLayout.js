// components/layout/MainLayout.js
import Header from './Header';
import Footer from './Footer';
import ChatbotWidget from '../ui/ChatbotWidget';

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
      <ChatbotWidget />
    </>
  );
}