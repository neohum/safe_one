import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDeviceDetect } from './hooks/useDeviceDetect';
import Header from './components/Header';
import Footer from './components/Footer';
import DevTools from './components/DevTools';
import Home from './pages/Home';
import Select from './pages/Select';
import NotSupported from './pages/NotSupported';

function App() {
  const { isMobile } = useDeviceDetect();

  // 모바일 기기인 경우 NotSupported 페이지로 리다이렉트
  if (isMobile) {
    return <NotSupported />;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col p-6">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select" element={<Select />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />

        {/* 개발 환경에서만 표시되는 개발자 도구 */}
        <DevTools />
      </div>
    </Router>
  );
}

export default App;
