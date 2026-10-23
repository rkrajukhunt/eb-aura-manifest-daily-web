'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Play, Pause, Volume2, Sparkles, RefreshCw } from 'lucide-react';
import Glim from './Glim';

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
    title: 'What you planted yesterday',
    category: 'Morning moment',
    duration: 38,
    voice: 'Warm and unhurried, read by name in the app',
    text: 'Good morning. You don’t need to force today to be profound. You only need to meet it with open hands and an unhurried mind. What you planted yesterday is already taking root.',
  },
  {
    id: '2',
    title: 'Beneath the noise',
    category: 'Affirmation',
    duration: 32,
    voice: 'Steady, one line at a time',
    text: 'I trust the pace of my evolution. My clarity does not depend on chaos fading away; it comes from knowing who I am beneath the noise.',
  },
  {
    id: '3',
    title: 'You did enough',
    category: 'Evening',
    duration: 42,
    voice: 'Gentle, for winding down',
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
  const timeRef = useRef(0);

  const sample = SAMPLES[activeSampleIndex];

  const setTime = (seconds: number) => {
    timeRef.current = seconds;
    setCurrentTime(seconds);
  };

  // Synthesize a soothing ambient harmonic tone using Web Audio API
  const startAmbientTone = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

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
      // Graceful ignore
    }
  };

  const stopAmbientTone = useCallback(() => {
    // Capture the current nodes so a quick replay can't have its new context closed by this timeout
    const ctx = audioContextRef.current;
    const osc = oscillatorRef.current;
    const gain = gainNodeRef.current;
    audioContextRef.current = null;
    oscillatorRef.current = null;
    gainNodeRef.current = null;
    if (!ctx || !osc || !gain) return;

    try {
      gain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
      setTimeout(() => {
        osc.stop();
        ctx.close();
      }, 500);
    } catch {
      // Ignore
    }
  }, []);

  // The ticker lives only while playing, so pausing, resetting or switching can never leave it running
  useEffect(() => {
    if (!isPlaying) return;

    const id = setInterval(() => {
      const next = timeRef.current + 1;
      if (next > sample.duration) {
        clearInterval(id);
        timeRef.current = 0;
        setCurrentTime(0);
        setIsPlaying(false);
        stopAmbientTone();
        return;
      }
      timeRef.current = next;
      setCurrentTime(next);
    }, 1000);

    return () => clearInterval(id);
  }, [isPlaying, sample.duration, stopAmbientTone]);

  useEffect(() => stopAmbientTone, [stopAmbientTone]);

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      stopAmbientTone();
    } else {
      setIsPlaying(true);
      startAmbientTone();
    }
  };

  const switchSample = (index: number) => {
    if (isPlaying) {
      stopAmbientTone();
      setIsPlaying(false);
    }
    setTime(0);
    setActiveSampleIndex(index);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="card overflow-hidden grid grid-cols-1 lg:grid-cols-5 max-w-5xl mx-auto">
      {/* The app's dusk player scene, with Glim listening in */}
      <div className="relative lg:col-span-2 min-h-[260px] sm:min-h-[320px] overflow-hidden">
        <Image
          src="/assets/illustrations/player-dusk.jpg"
          alt="Aura dusk audio sanctuary meditation moment"
          fill
          sizes="(max-width: 1024px) 100vw, 400px"
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 flex items-end justify-center pb-6">
          <Glim clip="listen" className="w-[120px] sm:w-[140px] drop-shadow-[0_10px_30px_rgba(242,169,111,0.45)]" />
        </div>
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold text-[#f5f2e8] bg-black/30 backdrop-blur-md border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-ember-soft" />
          A moment from Aura
        </div>
      </div>

      <div className="lg:col-span-3 p-6 sm:p-8 md:p-10 flex flex-col gap-6">
        {/* Sample switcher */}
        <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Choose a sample">
          {SAMPLES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => switchSample(idx)}
              aria-pressed={activeSampleIndex === idx}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors ${
                activeSampleIndex === idx ? 'bg-pill text-pill-text' : 'text-muted hover:text-ink bg-ink/5'
              }`}
            >
              {s.category}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-ink">{sample.title}</h3>
          <p className="font-serif italic text-lg sm:text-xl text-body leading-relaxed">&ldquo;{sample.text}&rdquo;</p>
          <p className="text-xs text-muted flex items-center gap-1.5">
            <Volume2 className="w-3.5 h-3.5 text-ember" />
            <span>{sample.voice}</span>
          </p>
        </div>

        {/* Transport and waveform: the one place ember lives, because this is where Aura speaks */}
        <div className="flex items-center gap-4 sm:gap-5 mt-auto">
          <button
            onClick={togglePlay}
            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shrink-0 transition-transform hover:scale-105 active:scale-95 text-[#1b1810] bg-gradient-to-tr from-ember-soft to-ember ${
              isPlaying ? 'shadow-[0_0_30px_rgba(226,104,47,0.55)]' : 'shadow-[0_12px_24px_-10px_rgba(226,104,47,0.7)]'
            }`}
            aria-label={isPlaying ? 'Pause audio preview' : 'Play audio preview'}
          >
            {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
          </button>

          <div className="flex-1 min-w-0 space-y-2">
            <div className="h-10 flex items-center justify-between gap-[3px]">
              {Array.from({ length: 36 }).map((_, i) => {
                const active = (currentTime / sample.duration) * 36 >= i;
                const delay = (i % 8) * 0.15;
                const baseHeight = 20 + ((i * 7) % 65);

                return (
                  <div
                    key={i}
                    style={{
                      height: isPlaying ? undefined : `${baseHeight}%`,
                      animation: isPlaying ? `waveBar 1.2s ease-in-out infinite ${delay}s` : 'none',
                    }}
                    className={`flex-1 max-w-1.5 rounded-full transition-colors duration-200 ${
                      active || isPlaying ? 'bg-gradient-to-t from-ember to-ember-soft' : 'bg-[#ebd9c4] dark:bg-white/10'
                    }`}
                  />
                );
              })}
            </div>
            <div className="flex items-center justify-between text-[11px] text-muted tabular-nums">
              <span>{formatTime(currentTime)}</span>
              <span className="truncate px-2">{isPlaying ? 'Ambient preview playing' : 'Tap play for an ambient preview'}</span>
              <span>{formatTime(sample.duration)}</span>
            </div>
          </div>

          <button
            onClick={() => {
              setTime(0);
              if (isPlaying) {
                stopAmbientTone();
                setIsPlaying(false);
              }
            }}
            className="p-2.5 text-muted hover:text-ink rounded-full hover:bg-ink/5 transition-colors"
            title="Reset"
            aria-label="Reset audio track"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
