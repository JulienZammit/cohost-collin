'use client';

import { useEffect } from 'react';
import { TAWK_ID } from '@/lib/site';

// Loads the real Tawk.to live-chat widget when TAWK_ID is configured.
// Messages are delivered to Collin's Tawk.to inbox / mobile app — the direct
// equivalent of the old Wix Chat, but on any host.
export default function TawkChat() {
  useEffect(() => {
    if (!TAWK_ID) return;
    if (document.getElementById('tawk-script')) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s = document.createElement('script');
    s.id = 'tawk-script';
    s.async = true;
    s.src = `https://embed.tawk.to/${TAWK_ID}`;
    s.charset = 'UTF-8';
    s.setAttribute('crossorigin', '*');
    document.body.appendChild(s);
  }, []);

  return null;
}
