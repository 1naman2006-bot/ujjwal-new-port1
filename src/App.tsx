import { MotionConfig } from 'framer-motion';
import Index from './pages/Index';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Index />
    </MotionConfig>
  );
}
