'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { type BaseProps } from '@/lib/types';

interface ToggleProps extends BaseProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  leftLabel?: string;
  rightLabel?: string;
}

const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  size = 'md',
  disabled = false,
  leftLabel,
  rightLabel,
  className,
}) => {
  const sizes = {
    sm: { switch: 'h-6 w-10', thumb: 'h-4 w-4', translate: 'translate-x-1' },
    md: { switch: 'h-8 w-14', thumb: 'h-6 w-6', translate: 'translate-x-1' },
    lg: { switch: 'h-10 w-18', thumb: 'h-8 w-8', translate: 'translate-x-1' },
  };

  const sizeConfig = sizes[size];

  return (
    <div className={cn('flex items-center gap-4', className)}>
      {leftLabel && (
        <span className={cn(
          'font-medium transition-colors duration-300',
          checked ? 'text-purple-500' : 'text-gray-600'
        )}>
          {leftLabel}
        </span>
      )}
      
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={cn(
          'relative inline-flex items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50',
          sizeConfig.switch,
          checked 
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:shadow-xl' 
            : 'bg-gray-300 hover:bg-gray-400'
        )}
      >
        <span
          className={cn(
            'inline-block transform rounded-full bg-white shadow-lg transition-transform duration-300',
            sizeConfig.thumb,
            checked ? `translate-x-${6}` : sizeConfig.translate
          )}
        />
      </button>
      
      {rightLabel && (
        <span className={cn(
          'font-medium transition-colors duration-300',
          !checked ? 'text-gray-800' : 'text-gray-400'
        )}>
          {rightLabel}
        </span>
      )}
    </div>
  );
};

export default Toggle;