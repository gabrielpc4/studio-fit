'use client';

import { Info, AlertTriangle, Lightbulb, CheckCircle } from 'lucide-react';
import clsx from 'clsx';

type InfoBoxType = 'info' | 'warning' | 'tip' | 'success';

interface InfoBoxProps {
  type?: InfoBoxType;
  title?: string;
  children: React.ReactNode;
}

const config = {
  info: {
    icon: Info,
    bgColor: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
    titleColor: 'text-blue-800',
    textColor: 'text-blue-700',
  },
  warning: {
    icon: AlertTriangle,
    bgColor: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
    titleColor: 'text-amber-800',
    textColor: 'text-amber-700',
  },
  tip: {
    icon: Lightbulb,
    bgColor: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600',
    titleColor: 'text-purple-800',
    textColor: 'text-purple-700',
  },
  success: {
    icon: CheckCircle,
    bgColor: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
    titleColor: 'text-green-800',
    textColor: 'text-green-700',
  },
};

export function InfoBox({ type = 'info', title, children }: InfoBoxProps) {
  const { icon: Icon, bgColor, iconColor, titleColor, textColor } = config[type];

  return (
    <div className={clsx('my-4 p-4 rounded-lg border', bgColor)}>
      <div className="flex gap-3">
        <Icon className={clsx('w-5 h-5 flex-shrink-0 mt-0.5', iconColor)} />
        <div className="flex-1">
          {title && (
            <h4 className={clsx('font-semibold mb-1', titleColor)}>{title}</h4>
          )}
          <div className={clsx('text-sm', textColor)}>{children}</div>
        </div>
      </div>
    </div>
  );
}
