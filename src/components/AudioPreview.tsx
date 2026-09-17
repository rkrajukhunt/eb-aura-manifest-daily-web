'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, Sparkles, RefreshCw } from 'lucide-react';

interface MomentSample {
  id: string;
  title: string;
  category: string;
  duration: number;
  text: string;
  voice: string;
}

const SAMPLES: MomentSample[] = [
  {
    id: '1',
    title: 'Morning Awakening: Grounded Momentum',
    category: 'Daily Morning Moment',
    duration: 38,
    voice: 'Serene Dawn (Warm & Intimate)',
    text: 'Good morning. You don’t need to force today to be profound. You only need to meet it with open hands and an unhurried mind. What you planted yesterday is already taking root.',
  },
  {
    id: '2',
    title: 'Self-Belief & Creative Flow',
    category: 'Affirmation Meditation',
    duration: 32,
    voice: 'Grounded Ember (Steady & Poetic)',
    text: 'I trust the pace of my evolution. My clarity does not depend on chaos fading away; it comes from knowing who I am beneath the noise.',
  },
  {
    id: '3',
    title: 'Evening Release & Quiet Gratitude',
    category: 'Night Reflection',
    duration: 42,
    voice: 'Twilight Breath (Gentle & Deep)',
    text: 'Lay down whatever you carried today that was not yours to resolve. You showed up. You did enough. Rest now and let tomorrow arrive in its own time.',
  },
];

export default function AudioPreview() {
  const [activeSampleIndex, setActiveSampleIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const sample = SAMPLES[activeSampleIndex];

  // Synthesize a soothing ambient harmonic tone using Web Audio API
  const startAmbientTone = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Soothing warm harmonic chord (A3 = 220Hz or gentle 432Hz ambient feeling)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(activeSampleIndex === 0 ? 216 : activeSampleIndex === 1 ? 288 : 172, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.03, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      oscillatorRef.current = osc;
      gainNodeRef.current = gain;
    } catch {
      // Graceful ignore if audio context isn't allowed
    }
  };

  const stopAmbientTone = () => {
    if (gainNodeRef.current && audioContextRef.current) {
      try {
        gainNodeRef.current.gain.linearRampToValueAtTime(0.0001, audioContextRef.current.currentTime + 0.5);
        setTimeout(() => {
          oscillatorRef.current?.stop();
          audioContextRef.current?.close();
        }, 500);
      } catch {
        // Ignore
      }
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      stopAmbientTone();
      if (intervalRef.current) clearInterval(intervalRef.current);
    } else {
      setIsPlaying(true);
      startAmbientTone();
      intervalRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= sample.duration) {
            setIsPlaying(false);
            stopAmbientTone();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
  };

  const switchSample = (index: number) => {
    if (isPlaying) {
      stopAmbientTone();
      setIsPlaying(false);
    }
    setCurrentTime(0);
    setActiveSampleIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    return () => {
      stopAmbientTone();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 md:p-10 border border-[#e2682f]/30 max-w-4xl mx-auto shadow-[0_20px_60px_-15px_rgba(226,104,47,0.15)] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 bg-[#e2682f]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header with tags */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#e2682f]/15 text-[#f2a96f] border border-[#e2682f]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Audio Moment</span>
          </span>
          <span className="text-xs text-[#8a8265]">AI Voice by ElevenLabs</span>
        </div>

        {/* Sample Switcher Tabs */}
        <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/5">
          {SAMPLES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => switchSample(idx)}
              className={`px-3 py-1 text-xs rounded-lg transition-all ${
                activeSampleIndex === idx
                  ? 'bg-[#e2682f] text-white font-medium shadow-md'
                  : 'text-[#8a8265] hover:text-[#f5f2e8]'
              }`}
            >
              Track {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Track Info */}
      <div className="relative z-10 space-y-2 mb-6">
        <span className="text-xs uppercase tracking-widest text-[#8a8265] font-semibold">
          {sample.category}
        </span>
        <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f5f2e8]">
          {sample.title}
        </h3>
        <p className="text-xs text-[#dad5be]/80 flex items-center gap-1.5">
          <Volume2 className="w-3.5 h-3.5 text-[#e2682f]" />
          <span>Synthesized voice: {sample.voice}</span>
        </p>
      </div>

      {/* Quote / Script text display */}
      <div className="relative z-10 bg-[#0c0b09]/80 border border-white/5 rounded-2xl p-5 sm:p-6 mb-8">
        <p className="font-serif-luxury italic text-lg sm:text-xl text-[#f5f2e8]/90 leading-relaxed">
          &ldquo;{sample.text}&rdquo;
        </p>
      </div>

      {/* Player transport & waveform */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
        {/* Play/Pause CTA Button */}
        <button
          onClick={togglePlay}
          className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 transition-all transform hover:scale-105 active:scale-95 shadow-xl ${
            isPlaying
              ? 'bg-[#e2682f] text-white shadow-[0_0_30px_rgba(226,104,47,0.6)]'
              : 'bg-gradient-to-tr from-[#f2a96f] to-[#e2682f] text-[#1b1810]'
          }`}
          aria-label={isPlaying ? 'Pause audio preview' : 'Play audio preview'}
        >
          {isPlaying ? (
            <Pause className="w-7 h-7 fill-current" />
          ) : (
            <Play className="w-7 h-7 fill-current ml-1" />
          )}
        </button>

        {/* Dynamic Waveform Visualizer */}
        <div className="flex-1 w-full space-y-2.5">
          <div className="flex items-center justify-between text-xs text-[#8a8265] font-mono">
            <span>{formatTime(currentTime)}</span>
            <span className="text-[#e2682f]">
              {isPlaying ? 'Playing binaural sample...' : 'Tap play to listen'}
            </span>
            <span>{formatTime(sample.duration)}</span>
          </div>

          {/* Animated Waveform Bars */}
          <div className="h-12 flex items-center justify-between gap-1 sm:gap-1.5 px-2 bg-black/40 rounded-xl border border-white/5">
            {Array.from({ length: 32 }).map((_, i) => {
              const active = (currentTime / sample.duration) * 32 >= i;
              const delay = (i % 8) * 0.15;
              const baseHeight = 20 + ((i * 7) % 65);

              return (
                <div
                  key={i}
                  style={{
                    height: isPlaying ? undefined : `${baseHeight}%`,
                    animation: isPlaying
                      ? `waveBar 1.2s ease-in-out infinite ${delay}s`
                      : 'none',
                  }}
                  className={`w-1.5 rounded-full transition-colors duration-200 ${
                    active || isPlaying
                      ? 'bg-gradient-to-t from-[#e2682f] to-[#f2a96f]'
                      : 'bg-white/10'
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Reset button */}
        <button
          onClick={() => {
            setCurrentTime(0);
            if (isPlaying) {
              stopAmbientTone();
              setIsPlaying(false);
            }
          }}
          className="p-3 text-[#8a8265] hover:text-[#f5f2e8] rounded-xl hover:bg-white/5 transition-colors"
          title="Reset"
          aria-label="Reset audio track"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
