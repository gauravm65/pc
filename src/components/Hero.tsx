import React, { useEffect, useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

// Unicorn Studio types
interface UnicornStudioAPI {
  launchProject: (config: UnicornConfig) => Promise<UnicornProject>;
}

interface UnicornConfig {
  dpi: number;
  scale: number;
  lazyLoad: boolean;
  element: HTMLElement;
  projectId: string;
}

interface UnicornProject {
  destroy: () => void;
}

declare global {
  interface Window {
    UnicornStudio: UnicornStudioAPI;
  }
}

const Hero: React.FC = () => {
  const animationRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<UnicornProject | null>(null);

  useEffect(() => {
    let pollTimeoutId: NodeJS.Timeout;
    let isComponentMounted = true;

    const initializeAnimation = async () => {
      try {
        console.log('🦄 Initializing Unicorn Studio animation...');
        
        if (!animationRef.current) {
          console.error('❌ Animation container element not found');
          return;
        }

        console.log('✅ Animation container found:', animationRef.current);
        console.log('📏 Container dimensions:', {
          width: animationRef.current.offsetWidth,
          height: animationRef.current.offsetHeight,
          rect: animationRef.current.getBoundingClientRect()
        });

        console.log('🚀 Launching Unicorn Studio project: HTiK3tBRpBBsuLhO0T5h');

        const project = await window.UnicornStudio.launchProject({
          dpi: 1,
          scale: 1,
          lazyLoad: false,
          element: animationRef.current,
          projectId: 'HTiK3tBRpBBsuLhO0T5h'
        });

        if (isComponentMounted) {
          projectRef.current = project;
          console.log('✅ Unicorn Studio animation loaded successfully');
          console.log('🎬 Project object:', project);
          
          // Check if canvas was created
          const canvas = animationRef.current?.querySelector('canvas');
          if (canvas) {
            console.log('✅ Canvas element found:', canvas);
            console.log('📏 Canvas dimensions:', {
              width: canvas.width,
              height: canvas.height,
              style: canvas.style.cssText
            });
          } else {
            console.warn('⚠️ No canvas element found in animation container');
          }
        } else {
          // Component was unmounted, clean up immediately
          project.destroy();
        }

      } catch (error) {
        console.error('❌ Failed to load Unicorn Studio animation:', error);
        console.error('Error details:', {
          message: error instanceof Error ? error.message : 'Unknown error',
          stack: error instanceof Error ? error.stack : 'No stack trace'
        });
      }
    };

    const waitForUnicornStudio = (attempts = 0, maxAttempts = 20) => {
      if (!isComponentMounted) return;

      console.log(`🔍 Checking for Unicorn Studio SDK (attempt ${attempts + 1}/${maxAttempts})`);
      console.log('Window.UnicornStudio exists:', !!window.UnicornStudio);
      
      if (window.UnicornStudio) {
        console.log('UnicornStudio object:', window.UnicornStudio);
        console.log('launchProject method type:', typeof window.UnicornStudio.launchProject);
      }

      // Check if UnicornStudio exists and launchProject is a function
      if (window.UnicornStudio && typeof window.UnicornStudio.launchProject === 'function') {
        console.log('✅ Unicorn Studio SDK fully loaded and ready');
        initializeAnimation();
        return;
      }

      if (attempts >= maxAttempts) {
        console.error('❌ Unicorn Studio SDK failed to load after maximum attempts');
        console.error('Final state check:', {
          unicornStudioExists: !!window.UnicornStudio,
          launchProjectType: window.UnicornStudio ? typeof window.UnicornStudio.launchProject : 'N/A'
        });
        return;
      }

      pollTimeoutId = setTimeout(() => {
        waitForUnicornStudio(attempts + 1, maxAttempts);
      }, 500);
    };

    // Start polling for the SDK
    waitForUnicornStudio();

    // Cleanup function
    return () => {
      isComponentMounted = false;
      if (pollTimeoutId) {
        clearTimeout(pollTimeoutId);
      }
      if (projectRef.current) {
        console.log('🧹 Cleaning up Unicorn Studio animation');
        projectRef.current.destroy();
        projectRef.current = null;
      }
    };
  }, []);

  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 text-center min-h-[600px] sm:min-h-[650px] lg:h-[700px] flex flex-col items-center justify-center overflow-hidden">
      {/* Unicorn Studio Animation Background */}
      <div 
        ref={animationRef}
        className="absolute inset-0 w-full h-full bg-red-500/10"
        style={{ 
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
      
      {/* Fallback Background - Only show if animation fails */}
      <div 
        className="absolute inset-0 w-full h-full bg-hero-gradient opacity-50"
        style={{ zIndex: 2 }}
      />

      {/* Hero Content */}
      <div className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" style={{ zIndex: 100 }}>
        <div className="inline-flex items-center bg-brand-gray-dark/80 backdrop-blur-sm border border-brand-gray-border px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm mb-4 sm:mb-6">
          <Sparkles className="text-brand-purple mr-1.5 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
          <span className="text-brand-gray-light">1 Click Alchemy - AI Automations That Scale</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight max-w-5xl mx-auto drop-shadow-lg">
          Scale Faster And Reliably With AI Automations And Agents.
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-brand-gray-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Experience the future of business with intelligent, scalable automation solutions tailored to your needs.
        </p>
        <button className="mt-8 sm:mt-10 inline-block bg-brand-purple hover:bg-brand-purple/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors text-sm sm:text-base shadow-lg hover:shadow-xl">
          Schedule A Quick Call <ArrowRight className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 inline" />
        </button>
      </div>
    </section>
  );
};

export default Hero;