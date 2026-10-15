'use client';

import { TAWK_ID } from '@/lib/site';
import ChatWidget from './ChatWidget';
import TawkChat from './TawkChat';

// Renders the real Tawk.to live chat when configured, otherwise the built-in
// assistant widget (which still captures leads via Calendly / Instagram / email).
export default function Chat() {
  if (TAWK_ID) return <TawkChat />;
  return <ChatWidget />;
}
