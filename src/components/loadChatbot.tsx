/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

function loadChatbot(): void {
  useEffect(() => {
    const script: HTMLScriptElement = document.createElement('script');
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '6460324262fa7f0007dcf7ed' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
      });
    };
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
  }, []);
}

export default loadChatbot;
