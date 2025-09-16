'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { type BaseProps } from '@/lib/types';

interface DeviceMockupProps extends BaseProps {
  variant: 'browser' | 'mobile' | 'editor';
  rotation?: number;
  hoverRotation?: number;
}

const DeviceMockup: React.FC<DeviceMockupProps> = ({
  children,
  className,
  variant,
  rotation = 0,
  hoverRotation,
}) => {
  const baseStyles = 'transition-all duration-700 ease-out shadow-2xl';
  
  const variants = {
    browser: 'bg-white rounded-2xl border border-gray-100 overflow-hidden',
    mobile: 'bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl text-white',
    editor: 'bg-gray-900 rounded-2xl overflow-hidden',
  };

  const WindowControls: React.FC<{ variant: 'browser' | 'editor' }> = ({ variant }) => (
    <div className={cn(
      'flex items-center gap-2 p-4',
      variant === 'editor' ? 'bg-gray-800' : ''
    )}>
      <div className="w-3 h-3 bg-red-400 rounded-full" />
      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
      <div className="w-3 h-3 bg-green-400 rounded-full" />
    </div>
  );

  return (
    <div
      className={cn(
        baseStyles,
        variants[variant],
        className
      )}
      style={{
        transform: `rotate(${rotation}deg)`,
        '--hover-rotation': `${hoverRotation || rotation}deg`,
      } as React.CSSProperties}
    >
      {(variant === 'browser' || variant === 'editor') && (
        <WindowControls variant={variant} />
      )}
      {children}
    </div>
  );
};

export default DeviceMockup;